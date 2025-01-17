import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

//create a list of users. This will be replaced by a database query
const mockUsers = [
    { id:1, username: "miikka", displayName: "Miikka"},
    { id:2, username: "lasse", displayName: "Lasse"},
    { id:3, username: "samuli", displayName: "Samuli"}
]

//GET send status code 201 (reuqest successful)
app.get("/", (request, response) => {
    response.sendStatus(201).send({msg: "Hey!"});
});

//GET create a route where the user can request for a list of users using filtering
app.get('/api/users', (request, response) => {
    console.log(request.query);
    const {
      query: { filter, value },
    } = request;

    if(!filter && !value) return response.send(mockUsers);  //if filter or value field is empty, return the whole list of users

    if (filter && value)
        return response.send(
          mockUsers.filter((user) => user[filter].includes(value))
    )

    response.send(mockUsers)
});
//POST create a post method that is used to post new user information to the server via a request body
app.post('/api/users', (request, response) => {
    console.log(request.body);
    const { body } = request;
    const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...body };
    mockUsers.push(newUser);
    return response.status(201).send(newUser); //return code 201 (Created) if new user info is added successfully into the users list
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

//define the port 
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

// localhost:3000
// localhost:3000/users
// localhost:3000/countries?key=value&key2=value2