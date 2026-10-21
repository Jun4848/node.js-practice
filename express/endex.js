import express from 'express'

const app = express()
let ab = [1];

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/user/:id', (req, res) => {
  // const p = req.params
  // res.send(p.id)
  const q = req.query
  res.send(q)
})

app.get('/cat', (req, res) => {
  res.send('야옹ㅅㅂ')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
