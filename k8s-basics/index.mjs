import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log(`VERSION 2: Hello from the ${os.hostname()}`)
    res.send(`Hello from the ${os.hostname()}`)
})

app.listen(PORT, () => {
    console.log(`Web server is listening on ${PORT}`)
})
