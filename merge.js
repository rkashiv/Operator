const { interval, merge } = require('rxjs'); const { map, take } = require('rxjs/operators');  
// merge() combines multiple observables concurrently 
const stream1 = interval(200).pipe(take(3), map(i => 'A' + i)); const stream2 = interval(100).pipe(take(3), map(i => 'B' + i)); 
 
merge(stream1, stream2).subscribe(result => console.log('merge ->', result)); 
 setTimeout(() => console.log('done'), 1000);  
