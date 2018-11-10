// import config
import program from '.../config.js';
const fs = program.fs;
const data = program.data;
const cmd = program.cmd;

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
import rename from '../rename.mjs';
import save from '../save.mjs';
import backup from '../backup.mjs';
import restore from '../restore.mjs';

// setup commander
cmd
  .version(program.version)
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

cmd
  .command("remove <entry-name>")
  .alias("rm")
  .description("Removes a loot table object.")
  .action((name) => {
        remove(name);
});

cmd
  .command("edit <entry-name> <new-name> <weight> <object-data>")
  .alias("edit")
  .description("Edits a loot table object. (Use ~ to ignore a section)")
  .action((name, newName, weight, data) => {
      edit(name, newName, weight, data);
});

cmd
  .command("finish")
  .alias("f")
  .description("Saves and closes the current loot table.")
  .action(() => {
      finish();
});

cmd
  .command("init <name>")
  .alias("i")
  .description("Creates a new loot table.")
  .action((name) => {
      init(name);
});

cmd
  .command("open <name>")
  .alias("o")
  .description("Opens a loot table.")
  .action((name) => {
      open(name);
});

cmd
  .command("read")
  .alias("read")
  .description("Prints the current loot table to the console.")
  .action(() => {
      read();
});

cmd
  .command("reset")
  .alias("reset")
  .description("Resets the current loot table.")
  .action(() => {
      reset();
});

cmd
  .command("rename <name>")
  .alias("rename")
  .description("Renames the current loot table.")
  .action((name) => {
      rename(name);
});

cmd
  .command("save")
  .alias("s")
  .description("Saves the current loot table.")
  .action(() => {
      save();
});

export default cmd;
