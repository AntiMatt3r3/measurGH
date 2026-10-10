import objects from '../src/data/objects.json' with { type: 'json' };
import families from '../src/data/families.json' with { type: 'json' };
import constructs from '../src/data/constructs.json' with { type: 'json' };

const fail=(m)=>{console.error(`DATA ERROR: ${m}`);process.exitCode=1};
const unique=(rows,key,label)=>{const vals=rows.map(r=>r[key]);if(new Set(vals).size!==vals.length)fail(`${label} ${key} values are not unique`)};
unique(objects,'slug','object'); unique(families,'slug','family');
const calibrated=objects.filter(o=>o.isEvidenceComplete);
if(calibrated.length!==23) fail(`expected 23 calibrated objects, found ${calibrated.length}`);
if(objects.length!==446) console.warn(`NOTE: mapped object count is ${objects.length}, not the calibration-era 446.`);
if(constructs.length<1) fail('construct dictionary is empty');
for(const o of calibrated){if(!o.synthesis?.evidence_currently_identified_line) fail(`${o.name}: calibrated record lacks public evidence line`)}
if(!process.exitCode) console.log(`Data OK: ${objects.length} objects, ${families.length} families, ${constructs.length} constructs, ${calibrated.length} calibrated.`);
