## Mongo DB
- Mongo DB have clusters 
- We create database inside cluster
- Clusters are divided in regions

## Server DB connection
- Server is connected to the DB center
- we need allocations for security 

## Security of DB
- Each machine have ip address 
- We configure our DB to a perticular ip to avoid security conflicts(happens in network access layer)
- We allow ip addresses of machine.


## Network Access

### For Production
- we use private / perticular machine ip addresses
### For Development 
- we use public / anyone access



## Database Access
- 4 main operations CRUD
- Create , Read , Update , Delete
- Creates Different users which performs different operations
- *Roles* Atlas Admin , Read and Write , Read Only



## Mongo DB Compass
- tool used to only read / see the data from database



## Process of Compass
- Make a Cluster
- Make a DB inside Cluster
- Setup a new User
- generate password
- Setup network / ip / accesibility settings
- generate strings
- connect to mongo db Compass


## Mongoose
- npm package used to connect server to database
- mongoose.connect("string/databse_name")
- connect method connects + created the DB(if not found)
- gives id(unique) and versions to the data enterexd to the DB

## Database file structure
- src >> db >> db.js
- requires mongoose
- written with async , await 

## Why Async / Await
- connection depends on the network speed , strength of the server and machine 
- async executes after connection of the DB

## Schema
- We need to tell the server what type of data are we storing in the db here comes schema creation
- <new mongoose.Schema ( { prop : DATATYPE , prop2 : DATATYPE } )>
- *file structure* -> src >> models >> file.model.js

## Model
- we create model to perform CRUD
- <mongoose.model("model_name" , schema_name) >
- model.find() -> finds all the data created in DB (allways returns a array)
- model.findOne( prop : - ) -> finds one *object*


## Mongo DB file structure in compass

MongoDB Cluster
│
├── admin      (system)
├── config     (system)
├── local      (system)
│   └── oplog.rs
│
└── newDB      (YOUR database)
     └── tasks (YOUR collection)
          └── documents



