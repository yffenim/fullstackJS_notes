// 09 typescript FSO notes


// define specific type for input
type Operation = 'multiply' | 'add' | 'divide';
type Result = number 

// type keyword creates a type alias
// union types allow compiler to accept more than 1 value

// thinking about what SHOULD be returned:
// is it really ok for a function that is an math operation to return a string or should it raise an error?


export const calculator = 
  (a: number, b: number, op: Operation): Result => {
 switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) 
        throw new Error('Can\'t divide by 0!');      
      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');  
  }
}

// error handling
// catch block allows you to specify type of catch clause var
// default type is "unknown" 
// assigning error type to unknown here allows that anything is assignable to unknown
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type

try { 
  console.log(calculator(1, 1, 'divide'));
} catch (error: unknown ) {
  let errorMessage = "Something went wrong."
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
} 


