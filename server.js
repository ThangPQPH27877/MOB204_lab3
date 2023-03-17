const express = require('express')

//import { engine } from 'express-handlebars';
const expressHbs = require('express-handlebars');

const app = express()

//app.engine('.hbs', ExpressHandlebars());
app.engine('.hbs', expressHbs.engine({
  extname: "hbs",
  defaultLayout: 'main',
  layoutsDir: "views/layouts/"
}));

//app.engine( "hbs", engine({ extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts/", }) );

app.set('view engine', '.hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  let a = Number(req.query.soA);
  let b = Number(req.query.soB);
  let operator = req.query.operator;
  let pt = '';
  let kq = 0;
  switch (operator) {
    case 'cong':
      kq = a + b;
      pt = '+';
      break;
    case 'tru':
      kq = a - b;
      pt = '-';
      break;
    case 'nhan':
      kq = a * b;
      pt = '*';
      break;
    case 'chia':
      kq = a / b;
      pt = '/';
      break;
  }
  res.render('home', {
    layout: 'main',
    showContentMaytinh: true,
    soA: a,
    soB: b,
    phepTinh: pt,
    kq: kq,
    helpers: {
      foo() { return `${kq}`; }
    }

  });
});

app.get('/maytinh', (req, res) => {
  
});


const port = 8000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})