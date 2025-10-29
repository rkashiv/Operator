const { of } = require('rxjs'); const { mergeMap, delay } = require('rxjs/operators'); 
 
// mergeMap (aka flatMap) flattens inner observables 
const letters = of('A', 'B'); 
 letters.pipe(   mergeMap(x =>  
    of(x + '1', x + '2').pipe(delay(x === 'A' ? 300 : 100))   ) 
).subscribe(result => console.log('mergeMap ->', result)); 
