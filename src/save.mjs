import program from '../config.js';
const fs = program.fs;
const data = program.data;

const save = () => {
  let loottable = data.get("session");
  
  fs.writeFileSync(`../tables/${loottable.name}.json`, JSON.stringify(loottable, null, 4), (err) => {
    if(err) console.warn(err);
  });
  
  console.info("Current loot table saved.");
}

export default save;
