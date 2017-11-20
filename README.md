# PC Cultural Issues Master Project
*A website to manage PC issues, solutions and repairs in order to maintain a good level of organization in a school environment.*
## Wanna help?
### Prerequisites
* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [AngularCLI](https://cli.angular.io/) - A command line interface for Angular.
* [Angular 5](https://angular.io/) -  A structural framework for dynamic web apps.
* [NodeJS MySQL Connector](https://github.com/mysqljs/mysql) -  This is a node.js driver for mysql.
### Installing
Initiate Git:
```
git init
```
Clone master git:
```
git clone https://github.com/LeParadoxHD/pc-issues-cultural.git
```
Commit your changes:
```
git add .
git commit -m "Changes"
git push origin master
```
### How to access Database through NodeJS
*MySQL Connector is needed in order to use the database in backend.*

**Basic configuration:**
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'secret',
  password : 'secret',
  database : 'issues'
});

connection.connect();

connection.query('SELECT * FROM issues', function (error, results, fields) {
  if (error) throw error;
  results.forEach((row) => {
   console.log(row.name); 
  }
});
connection.end();
```

**Project created by LeParadoxHD (Álex Barba Pérez) and [Cultural Badalona](http://www.culturalbadalona.com)**
