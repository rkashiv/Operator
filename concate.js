const { from, concat } = require('rxjs'); 
 
// concat() runs one observable after the other 
const stream1 = from([1, 2, 3]); const stream2 = from([4, 5]); 
 concat(stream1, stream2).subscribe(result => console.log('concat ->', result)); 
