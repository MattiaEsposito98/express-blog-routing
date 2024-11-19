console.log("Blog")
const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts')


app.use(express.static('images'))


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json({
    count: posts.length,
    posts: posts
  })
})


app.listen(port, () => {
  console.log(`Porta in ascolto ${port}`)
})

console.log ("ciao")