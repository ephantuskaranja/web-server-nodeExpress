let express = require('express')

let app = express()

let port = 3030


app.get('/', (req, res) => {
    req.header("Content-Type", "application/json")
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, function () {
    console.log('Web server started on port ' + port + '!')
})