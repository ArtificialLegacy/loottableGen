import program from '../config.js';
const fs = program.fs;
const data = program.data;

const init = (name) => {
  let table = {
    "name": name,
    "item-count": 0,
    "items": [
      {
        "name": "Null",
        "weight": 0,
        "data": {},
      },
    ],
  };
  
  data.set("session", table);
  
  let check = JSON.parse(fs.readFileSync(`../tables/${name}.json`));
  
  if(check[name]) throw("This loot table already exists. Try using the open command.");
  
  fs.writeFileSync(`../tables/${name}.json`, JSON.stringify(table, null, 4), (err) => {
    if(err) console.warn(err);
  });
};

export default init;
