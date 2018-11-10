import program from '../config.js';
const fs = program.fs;
const data = program.data;

const close = () => {
    let table = {
    "name": "Null",
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
  console.info("Current loot table closed.");
};

export default close;
