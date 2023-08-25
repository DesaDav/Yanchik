import express from 'express'
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 8080
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/spisok', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'spisok.html'))
})

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})