console.log("Blog")
const express = require('express')
const app = express()
const port = 3000
const posts = require('./posts')

app.use(express.static('pubblic'))


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json({
    count: posts.length,
    posts: posts
  })
})

//index 
app.get ('/images', (req,res) => {
  console.log(`Lista dei dolci: ${posts}`)
  res.json (posts)
})

//show
app.get ('/images/:slug', (req,res) => {
  const slug = req.params.slug
  console.log (`Nome dolce: ${slug}`)
  res.send ('Nome dolce:' + slug ) 
}) 

//Store
app.post ('/images', (req,res) => {
  console.log (`Creo dolce:`)
  res.send ('Creo un nuovo dolce')
})

// Update
app.put('/images/:slug', (req, res) => {
	const slug = req.params.slug
  console.log (`Aggiorno dolce: ${slug}`)
	res.send(`Aggiorno il dolce: ${slug}`)
})

// modify
app.patch('/images/:slug', (req, res) => {
	const slug = req.params.slug
  console.log (`Modifico dolce: ${slug}`)
	res.send(`Modifico il dolce: ${slug}`)
})

// destroy
app.delete('/images/:slug', (req, res) => {
	const slug = req.params.slug
  console.log (`Elimino dolce: ${slug}`)
	res.send(`Elimino il dolce: ${slug}`)
})



app.listen(port, () => {
  console.log(`Porta in ascolto ${port}`)
})
