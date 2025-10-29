const { of } = require('rxjs'); const { reduce } = require('rxjs/operators'); 
 
// reduce() collects all values and returns a single result 
const numbers = of(1, 2, 3, 4, 5); 
 numbers.pipe(   reduce((acc, value) => acc + value, 0) 
).subscribe(result => console.log('reduce ->', result));  
