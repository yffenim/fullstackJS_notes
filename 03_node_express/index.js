const express = require('express');
const app = express();

// helpers
function l(arg1, arg2) {
	( arg1, arg2 ) ? 
		console.log(arg1, arg2) : 
		console.log(arg1)
};

// use express json-parser
app.use(express.json());

// data
let notes = [  
{    id: 1,    content: "HTML is easy",    date: "2022-05-30T17:30:31.098Z",    important: true  },  
{    id: 2,    content: "Browser can execute only Javascript",    date: "2022-05-30T18:39:34.091Z",    important: false  },  
{    id: 3,    content: "GET and POST are the most important methods of HTTP protocol",    date: "2022-05-30T19:20:14.298Z",    important: true  }
]

const effy = '<h1>effy is the best</h1>'

// helper functions

const generateId = () => {
	const maxId = notes.length > 0
		? Math.max(...notes.map(n => n.id)) // creates new arr if ids; ... is spread syntax that transforms arr into individual numbers to pass into Math.max
		: 0;
	return maxId + 1;
};


// requests
app.post('/api/notes', (request,response) => {

	// no body
	if (!body.content) {
		return response.status(400).json({ // remember to return here
			error: 'content missing'
		})
	};

	const note = {
		content: body.content,
		important: body.important || false,
		date: new Data(), // better to generate timeStamps on server than in browser
		id: generateId(),
	};
	
	notes = notes.concat(note);
	response.json(note);
});

app.get('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	const note = notes.find(note => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    return note.id === id
  })
	if (note) {    
		response.json(note)  
	} else {   
		response.statusMessage = "Override of 'not found!'"; // custom status message
		response.status(404).end() // undefined evaluates to false 
	};
})

app.delete('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id);
	notes = notes.filter(note => note.id !== id)
	response.statusMessage = "GONE FOREVER, IT IS!!!";
	response.status(204).end();
});



app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>');
});

app.get('/api/notes', (request, response) => {
	response.json(notes);
});

app.get('/effy', (request, response) => {
	l("shor");
	response.send(effy);
});

const PORT = 3001;
app.listen(PORT); // binding the http server assigned to app to port 
console.log(`Server runing on port ${PORT}`);
