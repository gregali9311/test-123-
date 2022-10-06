const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const exp = require('constants');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const helpers = require('./utils/helpers');


// const mysql = require('mysql2')


// const db = mysql.createConnection(
//   {
//       host: 'localhost',
//       user: 'root',
//       password: 'root',
//       database: 'Emotions_Db'
//   },
//   console.log('We are live, people')
// )


const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    proxy: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    })
  };

  app.use(session(sess));

 
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars')

  app.use(express.json());
  app.use(express.urlencoded({ extended: true}))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use(routes);



  sequelize.sync({ force: false}).then(()=>{
    app.listen(PORT, () => console.log('Listening now'))
  });

  