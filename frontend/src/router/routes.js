import express from 'express';
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile('index.html'));
app.get('/search', controller.searchTweets)
app.listen(4000, ()=> console.log("App running at http://localhost:4000"));