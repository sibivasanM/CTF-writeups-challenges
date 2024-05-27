const express = require('express')
const app = express()

app.get('/', (req, res) => {
    var whoami = req.query.whoami
    res.setHeader('Content-Security-Policy', `script-src 'self' https://www.google.com; object-src 'none';`)
    const temp =
    `
    <html>
    <body>
    
    <h1> ${whoami}</h1>
    </script>
    </body>
    </html>
    `
    res.send(temp)
})

app.get('/jsonp.json', (req, res)=>{
    if(req.query.callback){
        res.send(req.query.callback+"{'a':'b'}")
    }
    else{
        res.send("{'a':'b'}")
    }
})

app.listen(3000)
