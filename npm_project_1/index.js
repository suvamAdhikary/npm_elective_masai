const { Command } = require('commander');
const program = new Command();


program.version('0.0.1');


const QRCode = require('qrcode');


program.argument("<text>", "text for qrcode")
    .argument("[name]", "file name", "myQR.png")
    .option("-p, --print", "print the qrcode in a file")
    .description("take the text and file name from CLI, then print the QRCode as png")
    .action((text, name) => {

        QRCode.toFile(`./${name}.png`, text, ()=> {
          console.log(`Your QRCode : ${name}.png`);
        })

    })
    program.parse();



// program.argument("<name>", "name to print")
//   .argument("[number]", "number of times to print", 1)
//   .action((name, number) => {
//       for(let i = 0; i < number; i++) {
//         console.log(name);
//       }
//   })
// program.parse(process.argv)





// program.argument("<username>", "user login details")
//   .argument("[password]", "password for user, if needed", "default")
//   .action((username, password)=> {
//       console.log('username', username)
//       console.log('password', password)
      
//   })

// program.parse(process.argv);


// program
//   .option('-d, --debug', 'output extra debugging')
//   .option('-s, --small', 'small pizza size')
//   .option('-p, --pizza-type <type>', 'flavour of pizza');

// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);



// var QRCode = require('qrcode')
 
// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//     console.log(url)
//   })