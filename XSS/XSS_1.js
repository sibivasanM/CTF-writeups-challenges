const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.setHeader('Content-Security-Policy', `script-src 'self' 'unsafe-inline';`)
    const temp =
    `
    <html>
    <title>unsafe-inline</title>
    <body>
    <div id=xss></div>

    <script>
    let params = new URL(document.location).searchParams;
    let x= params.get('x')
    window.xss.innerHTML = x;

    </script>
    </body>
    </html>
 
   `
    res.send(temp)

})

app.listen(3000)
