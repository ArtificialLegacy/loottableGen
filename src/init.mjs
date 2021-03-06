import program from '../config.js';
const fs = program.fs;
const data = program.data;

const init = (name) => {
  let table = {
    "name": name,
    "item-count": 0,
    "items": {
      "Null": {
        "name": "Null",
        "weight": 0,
        "entrydata": {},
        },
      },
  };
  
  data.set("session", table);
  
  let check = JSON.parse(fs.readFileSync(`../tables/${name}.json`));
  
  if(check[name]) return console.info("This loot table already exists. Try using the open command.");
  
  fs.writeFileSync(`../tables/${name}.json`, JSON.stringify(table, null, 4), (err) => {
    if(err) console.warn(err);
  });
};

export default init;
