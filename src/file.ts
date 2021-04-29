import * as fs from 'fs';
// import {spawn} from 'child_process';
import * as yargs from 'yargs';
import * as chalk from 'chalk';

let route: string = "";

yargs.command({
  command: 'listdir',
  describe: 'List a directory',
  builder: {
    dir: { // --dir="directorio"
      describe: 'Enlistar los nombres de los archivos de un directorio',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    console.log("holi holi", route);
    route += argv.dir;
    listdir();
  },
});


function listdir() {
  if (fs.existsSync(route)) {
    let files = fs.readdirSync(route);
  
    for (let f of files){
      let fileRoute: string = route + "/" + f;
      let fileContent = fs.readFileSync(fileRoute, "utf-8");
      console.log(`El archivo ${f} tiene el siguiente contenido: `);
      console.log(fileContent);
    }
  }
  else {
    console.log(chalk.red("Error. El directorio no existe"));
  }  
}

// const wc = spawn('wc', [route]);

// let wcOutput = '';
// wc.stdout.on('data', (piece) => wcOutput += piece);

// wc.on('close', () => {
//   const wcOutputAsArray = wcOutput.split(/\s+/);
//   console.log(`File has ${wcOutputAsArray[1]} lines`);
//   console.log(`File has ${wcOutputAsArray[2]} words`);
//   console.log(`File has ${wcOutputAsArray[3]} characters`);
// });
