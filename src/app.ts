import express from 'express'
import { routerRoot } from './routes/root'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routerRoot)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
