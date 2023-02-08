const express = require('express')
const routes = require('./routes')
const app = express()
const port = 3000

app.use(express.json());
app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))

