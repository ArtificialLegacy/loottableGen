import program from '../config.js';
const data = program.data;

const read = () => {
  let loottable = data.get("session");
  
  console.dir(loottable);
};

export default read;
