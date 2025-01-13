const express = require('express');
const path = require('path');

const app = express();

//setup static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
//app object-> Get method: respond to a get request to '/' (root V endpoint), 
// sec argument of f: f takes in a req & res obj
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(8000, () => console.log('Server töötab pordis 8000'));