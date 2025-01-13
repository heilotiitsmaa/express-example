const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000; //8000 is fallback

const app = express();

/* //static web server with node.js:
//setup static folder
app.use(express.static(path.join(__dirname, 'public')));
/* app.get('/', (req, res) => {
//app object-> Get method: respond to a get request to '/' (root V endpoint), 
// sec argument of f: f takes in a req & res obj
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
}); */

let posts = [
    {id: 1, title: 'Post 1'},
    {id: 2, title: 'Post 2'},
    {id: 3, title: 'Post 3'},
];

//get all posts
app.get('/api/posts', (req, res) => {
    console.log(req.query);
    res.json(posts);
});

//get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt (req.params.id);
    res.json(posts.filter((post) => post.id === id));
});

app.listen(port, () => console.log(`Server töötab pordis ${port}`));