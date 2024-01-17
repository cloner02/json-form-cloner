// destination will be created or overwritten by default.
import fs from 'fs';

const source = process.argv.indexOf('--source') > -1 ? process.argv[process.argv.indexOf('--source') + 1] : 'src';
const destination = process.argv.indexOf('--destination') > -1 ? process.argv[process.argv.indexOf('--destination') + 1] : 'dist';

if(source === 'src' && destination === 'dist') {
    console.log('Source or destination is empty. Please provide source and destination.');
}

fs.cp(source, destination, {recursive: true}, (err) =>  console.log('File was copied to destination'));