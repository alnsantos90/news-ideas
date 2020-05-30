const port = 3333
const express = require('express');
const server = express()
const nunjucks = require('nunjucks');
const db = require('./db');
server.use(express.static("public"))
server.use(express.urlencoded({
  extended: true
}))
nunjucks.configure('views', {
  express: server,
  noCache: true
})
// PAGE DAFAULT
server.get('/', (req, res) => {
  db.all(`SELECT * FROM ideas`, (err, rows) => {
    if (err) return console.log(err);
    const lastIdeas = []
    const reverserdIdeas = [...rows].reverse()
    for (idea of reverserdIdeas) {
      if (lastIdeas.length < 2) {
        lastIdeas.push(idea)
      }
    }
    res.render('index.html', {
      ideas: lastIdeas
    })
  })
})
// LIST IDEAS
server.get('/ideas', (req, res) => {
  db.all(`SELECT * FROM ideas`, (err, rows) => {
    const reverserdIdeas = [...rows].reverse()
    res.render('ideias.html', {
      ideas: reverserdIdeas
    })
  })
})
// CREATE IDEA
server.post('/', (req, res) => {
  const {
    title,
    image,
    category,
    description,
    url
  } = req.body
  db.run(`INSERT INTO ideas (title, image, category, description, url)
  VALUES (?, ?, ?, ?, ?)`, [title, image, category, description, url], (err) => {
    if (err) {
      res.send('Erro de conexão no banco de dados.')
    }
    res.redirect('/ideas')
  })
})
// DELETE IDEA
server.post('/delete/:id', (req, res) => {
  const idIdea = req.params.id
  db.run(`DELETE FROM ideas WHERE id = ?`, [idIdea], (err) => {
    if (err) console.log(err);
    res.redirect('/ideas')
  })
})
server.listen(port, () => {
  console.log(`Servidor ON, rodando em http://localhost:${port}`);
})