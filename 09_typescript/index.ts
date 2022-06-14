import express from 'express';


const app = express();
app.use(express.json());

const PORT = 3003;

// python API will take 1 tag argument and return an array of servers 

// express server needs to take an array of input (POST)
// and serve an array of output (GET)

// express server needs to ask python API for the relevant arrays of servers
// filter through basesd on exclusion
// return the rest 

// EXPRESS SERVER
// - receives up to 5 inputs (POST)
// - sends up to 5 requests to python API
// - takes the response and filters 
// - returns an array 


// test
app.get('/effy', (_req, res) => {
	console.log('serve no master but your ambition');
	res.send(`Hello from port ${PORT}...!`);
});



app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});



