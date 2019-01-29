const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const o = req.originalUrl;
  if ((o == '/chapter') || (o == '/programs') || (o == '/') || (o == '/celebrating')) {
    res.sendFile(`${__dirname}/dist/index.html`)
  } else {
    res.redirect('/')
  }
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})