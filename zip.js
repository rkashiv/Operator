const { of, zip } = require('rxjs');  
// zip() pairs values by their index 
const letters = of('X', 'Y', 'Z'); const numbers = of(1, 2); 
 
zip(letters, numbers).subscribe(result => console.log('zip ->', result)); 
