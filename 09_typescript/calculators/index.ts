// which import statement depends on export in package
//  If import does not work, try a combined method: import ... = require('...').

// function l(_arg1, _arg2) {
// 	( _arg1, _arg2 ) ? console.log(_arg1,_arg2) : console.log(_arg1)
// }


import express from 'express';
import { calculator } from './calculator';


// NOTES
// underscore: addresses unused var
// Hey, this is to be treated like a private property for internal use only by socket, so don't read it, because it might totally get changed around in a later version and we're not going to tell you."

// on any 
// every untyped var whose type cannot be inferred implicitly is any. should not be there unless explicitly declared.
// query field of Express req object and body are typed any 

// SERVER

const app = express();

app.get('/ping', (_req, res) => {
  res.send('pongpong');
});


app.post('/calculate', (req, res) => {
  const { value1, value2, op } = req.body;

  const result = calculator(value1, value2, op);
  res.send(result);
});



const PORT = 3003;

app.listen(PORT, () => {
  let message = `Server running on ${PORT}`
  console.log(message);
});
