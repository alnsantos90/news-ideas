const port = 3333
const express = require('express');
const server = express()
const nunjucks = require('nunjucks');
const db = require('./db');

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))
nunjucks.configure('views', {
  express: server,
  noCache: true
})

// const ideas = [
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729007.svg',
//     title: 'Curso de Programação',
//     category: 'Estudo',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae id velit ducimus odit',
//     url: 'https://ncode.com.br'
//   },
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729005.svg',
//     title: 'Exercícios',
//     category: 'Saúde',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae id velit ducimus odit',
//     url: 'https://ncode.com.br'
//   },
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729027.svg',
//     title: 'Meditação',
//     category: 'Mentalidade',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae id velit ducimus odit',
//     url: 'https://ncode.com.br'
//   },
//   {
//     img: 'https://image.flaticon.com/icons/svg/2729/2729032.svg',
//     title: 'Karaôke',
//     category: 'Família',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae id velit ducimus odit',
//     url: 'https://ncode.com.br'
//   },
// ]


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

server.get('/ideas', (req, res) => {
  db.all(`SELECT * FROM ideas`, (err, rows) => {
    const reverserdIdeas = [...rows].reverse()
    res.render('ideias.html', {
      ideas: reverserdIdeas
    })
  })
})

server.post('/', (req, res) => {
  const { title, image, category, description, url } = req.body

  db.run(`INSERT INTO ideas (title, image, category, description, url)
  VALUES (?, ?, ?, ?, ?)`, [title, image, category, description, url], (err) => {
    if(err) {
      res.send('Erro de conexão no banco de dados.')
    }
    res.redirect('/ideas')
  })

})

server.listen(port, () => {
  console.log(`Servidor ON, rodando em http://localhost:${port}`);
})