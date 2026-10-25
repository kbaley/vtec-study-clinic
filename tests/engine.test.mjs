import test from 'node:test';
import assert from 'node:assert/strict';
import {templates,generate,rng,topics,grade,answerText} from '../public/engine.js';
const field=(value,unit='',type='number')=>({value,unit,type,dp:2});
test('answer parser accepts supported notation, fractions, units and grouped thousands',()=>{
 for(const s of ['1.25','5/4','1.25 mL','1.25e0','1.25 × 10^0']) assert.equal(grade(s,field(1.25,'mL')).correct,true,s);
 assert.equal(grade('1,250',field(1250)).correct,true);
 assert.equal(grade('25%',field(25,'%')).correct,true);
 assert.equal(grade('0.25',field(25,'%')).correct,false);
});
test('malformed answers, zero denominators, nonfinite values and wrong units fail',()=>{
 for(const s of ['', '1/0','Infinity','1e999','1.25 mg','1,25','1+0.25','<script>','1.25 junk','1 1/4','1 25']) assert.equal(grade(s,field(1.25,'mL')).valid,false,s);
});
test('format and precision are marked, not merely approximate magnitude',()=>{
 const f=field(.75,'','fraction');
 assert.equal(grade('3/4',f).correct,true);
 for(const s of ['6/8','.75','-3/-4'])assert.equal(grade(s,f).correct,false,s);
 const sci=field(2.34e-7,'','scientific');
 assert.equal(grade('2.34e-7',sci).correct,true);
 assert.equal(grade('23.4e-8',sci).correct,false);
 assert.equal(grade('0.000000234',sci).correct,false);
 assert.equal(grade('2.35e-7',sci).correct,false);
 assert.equal(grade('5.066666',field(5.07)).correct,false);
 assert.equal(grade('5.070',field(5.07)).correct,true);
 assert.equal(grade('101',field(100)).correct,false);
});
const make=(id,ints,picks=[])=>{let i=0,j=0;return templates.find(t=>t.id===id).make({int:()=>ints[i++],pick:()=>picks[j++]});};
test('course examples independently verify dosage, dilution, serial convention, fluids and nutrition',()=>{
 assert.equal(make('dose-volume',[38,40],[30]).fields[0].value,5.07);
 assert.equal(make('insulin',[29],[1.75,40]).fields[0].value,1.27);
 const dilution=make('dilution',[],[40,25,85]);
 assert.deepEqual(dilution.fields.map(f=>f.value),[5.31,79.69]);
 assert.equal(make('serial',[8],[40,2]).fields[0].value,.31);
 assert.equal(make('titre',[4],[2]).fields[0].value,8);
 assert.equal(make('drip',[35],[30,18,20]).fields[0].value,19);
 assert.equal(make('cri',[5.6],[10,4,30,250]).fields[0].value,20.83);
 assert.equal(make('energy',[21],[1.5]).fields[0].value,1050);
 assert.equal(make('dry-matter',[87,6]).fields[0].value,46.15);
 assert.equal(make('specificity',[223,18,11,454]).fields[0].value,96.19);
});
test('all generated canonical answers round-trip over many seeds',()=>{
 for(let seed=1;seed<=200;seed++){
  const random=rng(seed),r={int:(a,b)=>Math.floor(random()*(b-a+1))+a,pick:a=>a[Math.floor(random()*a.length)]};
  for(const t of templates){const q=t.make(r);assert.ok(q.steps.length);for(const f of q.fields){assert.ok(Number.isFinite(f.value),t.id);assert.equal(grade(answerText(f),f).correct,true,`${t.id}: ${answerText(f)}`);assert.equal(grade(String(f.value+1),f).correct,false,t.id);}}
 }
});
test('seed reproducibility, topic filtering, balanced sessions, empty selection',()=>{
 const options={seed:42,count:27,selected:Object.keys(topics)};
 assert.deepEqual(generate(options),generate(options));
 assert.notDeepEqual(generate(options),generate({...options,seed:43}));
 assert.equal(new Set(generate({...options,count:8}).map(q=>q.topic)).size,8);
 assert.ok(generate({seed:1,count:20,selected:['dosage']}).every(q=>q.topic==='dosage'));
 assert.throws(()=>generate({selected:[]}),/Select/);
});
