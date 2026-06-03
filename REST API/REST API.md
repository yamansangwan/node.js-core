# REST API
 
### if you want to communicate between  both front and backend application 

1. GET -> when we have to fetch data from server
2. POST -> sending data towards server
3. PATCH -> data present on serever and we want to update it
4. DELETE -> server's data deletion



### Request and Response

1. (request) -> frontend to backend.
2. (response) -> backend to frontend.



### Postman

- It is a tool used to develop and test backend APIs , Postman acts as an Frontend



### Middleware

- middleware is used "app.use( express.json() )"
- middleware makes the data raw data we are sending using postman readable to the express



### Params

1. Its the dynamic part of a API
2. example : /delete /Tweets:43
  - 43 is changeable also known as dynamic part which is called params
3. "req.params.index" is used (important) to achieve indexes



### NodeMon

- installation : npx nodemon server.js
- used to update live server changed
- prevents turning off and on of server again and again

### Response

1. Response is sent in json ({}) always
2. response uses status codes like (200,201...)
