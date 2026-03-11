const express = require('express')

 

const app = express()

 

const PORT = 3000

 

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/about', (req, res) => {
    res.send("<h1>About Me</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Welcome to My Website</h1>")
})
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

