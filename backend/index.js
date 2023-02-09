const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const app = express()
const port = 3001

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}!`))

