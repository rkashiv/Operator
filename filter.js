const { of } = require('rxjs'); const { filter } = require('rxjs/operators'); 
 
// filter() passes only values that match a condition 
const numbers = of(1, 2, 3, 4, 5);  
numbers.pipe( 
  filter(x => x % 2 === 0) // keep only even numbers 
).subscribe(result => console.log('filter ->', result)); 
