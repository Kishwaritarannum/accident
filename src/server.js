// const express = require('express');
// const app = express();
// const path = require('path');
// const bodyParser = require('body-parser');
// const mysql = require('mysql2');
// const cors = require('cors');
// const multer = require('multer');
// const storage = multer.memoryStorage();
// const uploads = multer({ storage: storage });

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// var jsonParser = bodyParser.json({
//     limit: 1024 * 1024 * 10,
//     type: 'application/json',
// });
// var urlencodedParser = bodyParser.urlencoded({
//     extended: true,
//     limit: 1024 * 1024 * 10,
//     type: 'application/x-www-form-urlencoded',
//     // console.log("limit file size" + limit);
// });
// app.use(jsonParser);
// app.use(urlencodedParser);
// //move this line down to over-write 1mb packet limit
// app.use(express.json());

// const db = mysql.createPool({
//     host: '192.168.0.139',
//     user: 'newuser',
//     password: 'web@123',
//     database: 'crud_contact',
// });

// const insertImages = (images, callback) => {
//     const sql = 'INSERT INTO photos (images) VALUES (?)';

//     images.forEach((images) => {
//         db.query(sql, [images], (err, result) => {
//             if (err) throw err;
//             console.log(`Image with id ${result.insertId} inserted`);
//         });
//     });

//     callback();
// };

// // store the images in the database.

// // app.post('/main/post',uploads.array('images')),(req,res)=>{
// // req.files.forEach((file)=>{
// //     const images = file.buffer;
// //     const query = 'INSERT INTO uploads (images) VALUES (?)';
// //     connection.query(query,[images],(error,results)=>{
// //         console.log(error);
// //     })
// // })
// // }

// // app.post('/api/upload', uploads.array('image', 4), (req, res) => {
// //   console.log(req.files);

// //   // Connect to the MySQL database and save the images to the database.

// //   res.send({ message: 'Images uploaded successfully' });
// // });

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: '192.168.0.121',
//     user: 'remote_test',
//     password: 'AniSQL@456',
//     database: 'testdb',
// });

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', ' http://localhost:3000');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

// app.get('/data', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) {
//             res.status(500).json({
//                 error: 'Error connecting to database: ' + err.message,
//             });
//             return;
//         }

//         connection.query('SELECT * FROM test2', (error, results) => {
//             connection.release();
//             if (error) {
//                 res.status(500).json({
//                     error: 'Error executing query: ' + error.message,
//                 });
//                 return;
//             }
//             res.json(results);
//         });
//     });
// });

// // const db1 = mysql.createPool({
// //     host: "localhost",
// //     user:"remote_test",
// //     password:"AniSQL@456",
// //     database:"testdb"
// // });

// // app.get('/detect/get', (req, res) => {
// //     const sqlGet = "SELECT * FROM test";
// //     db1.query(sqlGet, (error, result) => {
// //        res.send(result);
// //     });
// //   });

// // app.get("/data", (req, res) => {
// //     db1.query("SELECT * FROM test2", (error, results) => {
// //       res.send(results);
// //     });
// //   });

// // app.get('/search', (req, res) => {
// //     const username = req.query.username;
// //     const sqlGet = `SELECT * FROM image WHERE username LIKE '%${username}%'`;
// //     db.query(sqlGet, (error, result) => {
// //       if (error) {
// //         return res.send(error);
// //       }
// //       res.send({ result });
// //     });
// //   });

// //   app.get("/api/search", (req, res) => {
// //     const name = req.query.name;

// //     // query the database for data matching the search term
// //     const result = database.filter((item) => item.name.includes(name));

// //     res.json(result);
// //   });

// app.get('/main/get', (req, res) => {
//     const sqlGet = 'SELECT * FROM uploads';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });
// app.get('/api/get', (req, res) => {
//     const sqlGet = 'SELECT * FROM contact_db';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/outside/get', (req, res) => {
//     const sqlGet = 'SELECT * FROM outside_db';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/inside/get', (req, res) => {
//     const sqlGet = 'SELECT * FROM inside_db';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/image', (req, res) => {
//     const sqlGet = 'SELECT * FROM image';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/main/get', (req, res) => {
//     const sqlGet = 'SELECT * FROM uploads';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/register', (req, res) => {
//     const sqlGet = 'SELECT * FROM users';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// app.get('/contact', (req, res) => {
//     const sqlGet = 'SELECT * FROM contact';
//     db.query(sqlGet, (error, result) => {
//         res.send(result);
//     });
// });

// // let allImages = [];
// // app.get("/image", (req, res) => {
// //     const sqlGet = "SELECT * FROM image";
// //     db.query(sqlGet, (error, result) => {
// //         allImages.push(result);

// //     });
// //     console.log('Async code....');
// //     res.send(allImages);
// // });

// // let allurl = [];
// // app.get("/image", (req,res)=> {
// //     const sqlGet = "SELECT * FROM image";
// //     db.query(sqlGet, (error, result)=>{
// //         allurl.push(result)
// //     });
// //    console.log('Async code....');
// //    res.send(allurl);
// // });

// app.post('/register', (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const contact = req.body.contact;
//     const password = req.body.password;

//     db.query('INSERT INTO users ( name,email,contact, password ) VALUES (?,?,?,?)', [name, email, contact, password], (error, result) => {
//         console.log(error);
//     });
// });

// // app.post('/main/post', uploads.array('images'), (req, res) => {
// //     console.log(req.file);
// //     res.json({ success: true });
// //     const images  = req.file;
// //    db.query("INSERT INTO uploads (images) VALUES(?)",
// //      [images], (error, result) => {
// //             console.log(error);
// //         }
// //     );
// //   });

// app.post('/main/post', (req, res) => {
//     const name = req.body.name;
//     const images = req.body.images;
//     const values = images.map((string) => [string]);
//     console.log(values);
//     const sql = 'INSERT INTO uploads (name,images,image2,image3,image4,image5) VALUES (?,?,?,?,?,?)';
//     db.query(sql, [name, values[0], values[1], values[2], values[3], values[4]], (error, result) => {
//         console.log(error);
//     });
// });

// // app.post('/test/post',(req, res) => {
// //     const images  = req.body.images;
// //     db.query("INSERT INTO test (images) VALUES(?)",
// //     [images], (error, result) => {
// //             console.log(error);
// //             }
// //         );
// //     });

// app.post('/test/post', (req, res) => {
//     const name = req.body.name;
//     const images = req.body.images;
//     const values = images.map((string) => [string]);
//     console.log(values);
//     const sql = 'INSERT INTO photos (name,images,image2,image3,image4) VALUES (?,?,?,?,?)';
//     db.query(sql, [name, values[0], values[1], values[2], values[3]], (error, result) => {
//         console.log(error);
//     });
// });

// app.post('/image', (req, res) => {
//     const url = req.body.url;
//     const username = req.body.username;
//     const number = req.body.number;
//     const newold = req.body.newold;

//     db.query('INSERT INTO image ( url,username, number, newold ) VALUE (?,?,?,?)', [url, username, number, newold], (error, result) => {
//         console.log(error);
//     });
// });

// app.post('/contact', (req, res) => {
//     const username = req.body.username;
//     const useremail = req.body.useremail;
//     const usernumber = req.body.usernumber;
//     const usermessage = req.body.usermessage;

//     db.query(
//         'INSERT INTO contact (username, useremail,usernumber, usermessage) VALUES (?,?,?,?)',
//         [username, useremail, usernumber, usermessage],
//         (error, result) => {
//             console.log(error);
//         }
//     );
// });

// app.post('/api/post', (req, res) => {
//     const { url, name, number, date } = req.body;
//     const sqlInsert = 'INSERT INTO contact_db (url,name, number, date) VALUES (?,?, ?, ?)';
//     db.query(sqlInsert, [url, name, number, date], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.post('/outside/post', (req, res) => {
//     const { name, number, url, date } = req.body;
//     const sqlInsert = 'INSERT INTO outside_db (name, number, url, date) VALUES (?, ?, ?,?)';
//     db.query(sqlInsert, [name, number, url, date], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.post('/inside/post', (req, res) => {
//     const { url, name, number, date } = req.body;
//     const sqlInsert = 'INSERT INTO inside_db (url,name, number, date) VALUES (?,?, ?,?)';
//     db.query(sqlInsert, [url, name, number, date], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.post('/login', (req, res) => {
//     const name = req.body.name;
//     const password = req.body.password;

//     db.query('SELECT * FROM users WHERE name = ? AND password = ?', [name, password], (err, result) => {
//         if (err) {
//             res.send({ err: err });
//         }
//         if (result.length > 0) {
//             res.send(result);
//         } else {
//             res.send({ message: 'Wrong username / password!' });
//         }
//     });
// });

// app.delete('/api/remove/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = 'DELETE FROM contact_db WHERE id = ?';
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.delete('/main/remove/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = 'DELETE FROM uploads WHERE id = ?';
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.delete('/inside/remove/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = 'DELETE FROM inside_db WHERE id = ?';
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.delete('/image/remove/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = 'DELETE FROM image WHERE id = ?';
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.get('/api/get/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlGet = 'SELECT * FROM contact_db where id =?';
//     db.query(sqlGet, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.get('/outside/get/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlGet = 'SELECT * FROM outside_db where id =?';
//     db.query(sqlGet, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.get('/inside/get/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlGet = 'SELECT * FROM inside_db where id =?';
//     db.query(sqlGet, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.delete('/outside/remove/:id', (req, res) => {
//     const { id } = req.params;
//     const sqlRemove = 'DELETE FROM outside_db WHERE id = ?';
//     db.query(sqlRemove, id, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//     });
// });

// app.get('/api/get/:key', (req, res, next) => {
//     const { key } = req.params;
//     const sqlGet = 'SELECT * FROM contact_db where  name = ?';
//     db.query(sqlGet, key, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//         next.send(result);
//     });
// });

// app.get('/inside/get/:key', (req, res) => {
//     const { key } = req.params;
//     const sqlGet = 'SELECT * FROM inside_db where name = ?';
//     db.query(sqlGet, key, (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.get('/api/search', (req, res) => {
//     const searchQuery = req.query.name;
//     db.query(`SELECT * FROM outside_db WHERE name LIKE '%${searchQuery}%'`, (error, results) => {
//         if (error) throw error;
//         res.json(results);
//     });
// });

// app.put('/api/update/:id', (req, res) => {
//     const { id } = req.params;
//     const { url, name, number, date } = req.body;
//     const sqlUpdate = 'UPDATE contact_db SET url = ?, name = ?, number = ?, date = ? WHERE id = ?';
//     db.query(sqlUpdate, [url, name, number, date, id], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.put('/outside/updateout/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, number, url, date } = req.body;
//     const sqlUpdate = 'UPDATE outside_db SET name = ?, number = ?, url = ?, date = ? WHERE id = ?';
//     db.query(sqlUpdate, [name, number, url, date, id], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// app.put('/inside/updatein/:id', (req, res) => {
//     const { id } = req.params;
//     const { url, name, number, date } = req.body;
//     const sqlUpdate = 'UPDATE inside_db SET url = ?, name = ?, number = ? , date = ? WHERE id = ?';
//     db.query(sqlUpdate, [url, name, number, date, id], (error, result) => {
//         if (error) {
//             console.log(error);
//         }
//         res.send(result);
//     });
// });

// var imgconfig = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, './uploads');
//     },
//     filename: (req, file, callback) => {
//         callback(null, `image-${Date.now()}.${file.originalname}`);
//     },
// });

// //img filter
// const isImage = (req, file, callback) => {
//     if (file.mimetype.startsWith('image')) {
//         callback(null, true);
//     } else {
//         callback(null, Error('only image is allowed'));
//     }
// };

// var upload = multer({
//     storage: imgconfig,
//     fileFilter: isImage,
// });

// // addoutside objectdata
// app.post('/addoutside', upload.single('photo'), (req, res) => {
//     console.log(req.file);
// });

// app.get('/', (req, res) => {
//     //  const sqlInsert =
//     // "INSERT INTO contact_db (name, email, contact) VALUES ('john doe', 'johndoe@gmail.com', 4546576776)";
//     //   db.query(sqlInsert, (error, result) => {
//     //   console.log("error", error);
//     //  console.log("result", result);
//     //  res.send("Hello Express");
//     // });
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const multer = require('multer');
const storage = multer.memoryStorage();
const uploads = multer({ storage: storage });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'web@123',
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected!');
});

app.use(cors());

app.listen('5000', (err) => {
    if (err) {
        throw err;
    }
    console.log('app is running on port');
});
