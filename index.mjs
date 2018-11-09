import cmd from './src/cli/commands.mjs';

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

let table = {
  "entry-count": 0,
  "entries": [
    
    ],
};

cmd.parse(process.argv);
