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

let products = [
    {id: 1, title: 'Talvesaapad'},
    {id: 2, title: 'Sall'},
    {id: 3, title: 'Kindad'},
    {id: 4, title: 'Müts'},
    {id: 5, title: 'Sukkpüksid'},
    {id: 6, title: 'Karupüksid'},
    {id: 7, title: 'Sulejope'},
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

//get all products
app.get('/api/products', (req, res) => {
    const limit = parseInt(req.query.limit)
    if(!isNaN(limit) && limit>0) {
        return res.status(200).json(products.slice(0, limit));
    }
    //res.send('Products');
    res.status(200).json(products);
});

//get single product
app.get('/api/products/:id', (req, res) => {
    const id = parseInt (req.params.id);
    const product = products.find(product => product.id === id);
    
    if(!product) {
        return res
        .status(404)
        .json({ msg: `Toodet id'ga ${id} ei leitud`});
    }
    res.status(200).json(product);
});

app.listen(port, () => console.log(`Server töötab pordis ${port}`));