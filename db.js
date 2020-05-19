const sqlite = require('sqlite3');
const db = new sqlite.Database('./ideas.db')

db.serialize(() => {

  // Criar tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      image, TEXT,
      category TEXT,
      description TEXT,
      url TEXT
    );
  `)

  // // Inserir dado na tabela
  // const query = 
  //   `INSERT INTO ideas(
  //     image,
  //     title,
  //     category,
  //     description,
  //     url
  //   ) VALUES (?, ?, ?, ?, ?)`

  // const values = [
  //   'https://image.flaticon.com/icons/svg/2729/2729007.svg',
  //   'Curso de Programação',
  //   'Estudo',
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vitae id velit ducimus odit',
  //   'https://ncode.com.br'
  // ]
  //   db.run(query, values, function(err) {
  //     if(err) return console.log(err);
    
  //     console.log(this);
  //   })


  // // Deletar dado da tabela
  // db.run(`DELETE FROM ideas WHERE id = ?`, [9], (err) => {
  //   if(err) return console.log(err);

  //   console.log('DELETEI'); 
  // })


  // // Consultar dados da tabela
  // db.all(`SELECT * FROM ideas`, (err, rows) => {
  //   if(err) return console.log(err);

  //   console.log(rows);
  // })

})

module.exports = db