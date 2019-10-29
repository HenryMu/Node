const express = require('express')
let app = express()
app.use(express.static('./public'))

app.listen(690, function() {
    console.log('690端口已经开启');
})