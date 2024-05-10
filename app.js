import express from 'express';
import data from './data.js'; 
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();



const app = express();
const {PORT} = process.env ||3000


let ourTweets = [...data.tweets]
app.use(cors())
app.use(express.json());

app.get('/tweets', (req, res) => {
  res.send(ourTweets);
})

app.post('/tweets', (req, res)=> {
   const newTweets = req.body
   ourTweets.push(newTweets);
   res.send(newTweets);
});
app.get('/users/:handler', (req, res) => {
    const theuser = req.params.handler
    const userTweets = ourTweets.filter((tweet) => tweet.user.userName == theuser)
 
     console.log(userTweets)
    res.send(userTweets)
})
  app.get('/user', (req, res) => {
    res.send(data["current-user"])
  })

app.listen(PORT)