import { createRequire } from 'module';
import express, { response } from "express";
import { error } from 'console';
import { request } from 'http';

const require = createRequire(import.meta.url);
const app = express();
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const session = require('express-session')

app.use(express.json());
app.use(cors())
app.use(session({secret: "Shh, its a secret!"}));

const users = [{ email: 'asdfg@gmail.com', username: 'Person_1', password: 'qwerty' }] //this will be replaced by an SQL table

const PORT = process.env.PORT || 3000;

//use EJS as the view engine
app.set('view engine', 'ejs')

//create a list of users. This will be replaced by a database query
const mockUsers = [
    { id:1, username: "miikka", displayName: "Miikka"},
    { id:2, username: "lasse", displayName: "Lasse"},
    { id:3, username: "samuli", displayName: "Samuli"}
]

//Create database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'maantieto'

})
//GET get a list of all users from the MySQL database
app.get('/users', (request, response) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, data) => {
        if(err) return response.json(err);
        return response.json(data);
    })
})

//GET send status code 201 (reuqest successful)
app.get("/", (request, response) => {
    response.sendStatus(201).send({msg: "Hey!"});
});

//GET create a route where the user can request for a list of users using filtering
app.get('/api/users', (request, response) => {
    response.json(users)
})

//POST create a post method that is used to post new user information to the server via a request body
app.post('/api/register', async (request, response) => {
    try{
        const rounds = 13
        const hashedPassword = await bcrypt.hash(request.body.password, rounds) //encrypt the user password by using bcrypt, 10 rounds of salt added
        console.log(hashedPassword)
        const sql = 'INSERT INTO users (Email, UserName, Hash) VALUES ("'+request.body.email+'", "'+request.body.username+'", "'+hashedPassword+'")';
        db.query(sql); //insert user information into the MySQL database using the query in the previous line
        response.status(201).send() //return code 201 (Created) if new user info is added successfully into the users list
    } catch {
        response.status(500).send() //return code 500 (Internal server error)
    }
    
});

//GET create a route used to fetch users by the "id" value
app.get("/api/users/:id", (request, response) => {
    console.log(request.params);
    const parsedId = parseInt(request.params.id);   //parse the id to integer value
    if(isNaN(parsedId))
        return response.status(400).send({ msg: "Bad request. Invalid ID."});   //return error msg if the "id" is not a numeric value

    const findUser=mockUsers.find((user) => user.id === parsedId);  //find user by "id"
    if (!findUser) return response.sendStatus(404); //return code 404 if user was not found by the "id"
    return response.send(findUser);
});

//GET create a route where the user can request a list of countries
app.get('/api/countries', (request, response) => {
    response.send([
        { id:1, country: "Norway", population:5550203},
        { id:2, country: "Denmark", population:5932654}
    ])
});

//PUT create a route that can be used to replace user information by "id"
app.put("/api/users/:id", (request, response) => {
    const {
      body,
      params: { id },
    } = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);

    const findUserIndex = mockUsers.findIndex(
        (user) => user.id === parsedId
    );

    if(findUserIndex === -1) return response.sendStatus(404);
    mockUsers[findUserIndex] = { id: parsedId, ...body };
    return response.sendStatus(200);
});

//PATCH create a patch route that can be used to update single info fields in the list of users
app.patch('/api/users/:id', (request,response) => {
    const {
        body,
        params: { id },
    } = request;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.sendStatus(400);   //return error if sent "id" is not a numeric
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return response.sendStatus(404);  //return error if sent "id" is negative
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...body };
    return response.sendStatus(200);    //return code 200(OK) if the patch was successful
})


const verifyJWT = (request, response, next) => {
    const token = request.headers["x-access-token"]

    if (!token) {
        response.send("A token is needed!")
    } else{
        jwt.JsonWebTokenError.verify(token, "jwtSecret", (err, decoded) => {
            if(err) {
                response.json({ auth: false, message: "U failed to authenticate" });
            } else {
                request.useId = decoded.id;
                next();
            }
        })
    }
}

app.get('isUserAuth', verifyJWT, (request, response) =>{
    response.send("You are authenticated")
})

//GET login route
app.post('/login', (request, response) => {
    //response.render('login')
    const name = request.body.username;
    const password = request.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        name,
        (err,result) => {
            if (err) {
                response.send({ err: err });
            } //toimii tähän asti

            if (toString(result).length > 5) {
                bcrypt.compare(password, result[1].Hash, (err) => {
                    if (result) {

                        const id = result[1].UserName //using username as id

                        const token = jwt.sign({id}, "jwtSecret", {
                            expiresIn: 300,
                        })

                        request.session.currentuser = result;
                        //response.send({ message: "Correct password. Token set" })
                        response.json({auth: true, token: token, result: result[1]});
                    } else if (err) {
                        //response.json(result[0].Hash)
                        response.send({ message: "Wrong username/password combination!" });
                    }
                
                });

            } else {
                response.send({ message: "User does not exist" });
            }
        }
    )
})

//GET login route
app.get('/signup', (request, response) => {
    response.render('signup')
})

//define the port 
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/countries?key=value&key2=value2