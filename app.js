const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'html');
app.use(express.static(__dirname));

app.get('/', (req, res) => {

  res.sendFile('index.html',{ root : __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})