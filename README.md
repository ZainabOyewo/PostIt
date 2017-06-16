# PostIt version 1.0

Postit is an App that allows for Broadcast messaging to groups. The Nodejs framework is used, all tests, functions and javascrit code are written in es6 but Babel is inplemneted to transpire down to es5 in the cases of browsers that dont yet identify with es6.

The features includes User signups, create groups, add users to groups and post messages to a specified group.

The frontend designs isnt functioning yet. You can test using the API routes creates via postman.
- POST: api/user/login
- POST: api/user/signup
- POST: api/user/group
- POST: api/user/group:groupid/user
- POST: api/user/group:groupid/message
- GET: api/user/group:groupid/message


After cloning;
Ensure you have a database name PostIt (use Postgresql) created locally before testing.
run db:migrate to migrate the tables for use.
run npm run start:dev to start up the server

Install Postman and test GET: 127.0.0.1:8000
you should see "welcome to the world of nothingness"

study the table created in your database to know the attributes required before running the apis above.
NOTE:
only login and signup works for now.

#TO- DO
-->ENSURE all api routes work well and properly




