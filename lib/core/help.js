const program = require('commander');

const helpOptins = () => {
    program.option('-w, --why','a why cli')
    program.option('-d, --dest <dest>','a destination folder,例如： -d /src/component')
    program.option('-f --framework <framework>','your framework')


    program.on('--help',()=>{
        console.log('');
        console.log('Other:');
        console.log(' other options');
    })
}

module.exports = helpOptins;