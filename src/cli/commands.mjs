// import commander
import {commander as cmd} from '.../config.js';

// import modules
import cancel from '../cancel.mjs';
import close from '../close.mjs';
import add from '../add.mjs';
import remove from '../remove.mjs'; 
import edit from '../edit.mjs';
import finish from '../finish.mjs';
import init from '../init.mjs';
import open from '../open.mjs';
import read from '../read.mjs';
import reset from '../reset.mjs';

// setup commander
cmd
  .version("0.0.1")
  .description("Loot table generator");

// create commands
cmd
  .command("cancel")
  .alias("c")
  .description("Cancel the current command.")
  .action(() => {
      cancel();
  });

cmd
  .command("close")
  .alias("close")
  .description("Closes the current loottable.")
  .action(() => {
      close();
});

cmd
  .command("add <entry-name> <weight> <object-data>")
  .alias("a")
  .description("Adds a new loot table object.")
  .action((name, weight, data) => {
        add(name, weight, data);
});

export default cmd;
