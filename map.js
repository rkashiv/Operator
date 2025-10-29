const { of } = require('rxjs'); const { map } = require('rxjs/operators'); 
 
// map() transforms each value in the stream 
 const numbers = of(1, 2, 3, 4, 5); 
 numbers.pipe(   map(x => x * 10) 
).subscribe(result => console.log('map ->', result)); 
