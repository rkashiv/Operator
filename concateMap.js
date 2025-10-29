const { of } = require('rxjs'); const { concatMap, delay } = require('rxjs/operators'); 
  
// concatMap runs each inner stream sequentially 
const letters = of('A', 'B'); 
 letters.pipe(   concatMap(x =>      of(x + '1', x + '2').pipe(delay(200)) 
  ) 
).subscribe(result => console.log('concatMap ->', result));  
