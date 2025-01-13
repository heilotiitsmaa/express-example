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
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit>0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);

});

//get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const post = posts.find(post => post.id === id);

    if(!post) {
        return res
        .status(404)
        .json({ msg: `Postitust id'ga ${id} ei leitud`});
    }
        res.status(200).json(post);
        
});

app.listen(port, () => console.log(`Server töötab pordis ${port}`));