# PostIt
> PostIt is a web Application that allows for Broadcast messaging to specified groups created.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]


PostIt is a full fledge app that allows users to login, signup, create groups and add users to groups created and post messages.
The API routes include:

* api/signup
* api/login
* api/user/group
* api/user/groupid
* api/user/groupid/message

## Installation
You will need the Postgresql and Postman installed

1. kindly clone the repo
```sh
git clone https://github.com/ZainabOyewo/PostIt.git
```
2. Install all dependencies defined in the Package.json file
3.   create a database PostIt in PgAdmin (Postgresql). To migrate the tables, run
```sh
sequelize db:migrate 
```
4. Start up your server to test API route. run: 
```sh
npm run start:build 
```
5. Open postman to test the api routes stated above.

## Development setup
DEPENDENCIES include;

```sh
npm install nodejs express
npm install babel- cli
npm install eslint
npm install jsonwebtoken
npm install bcrypt
npm install sequelize
npm install body-parser
npm install nodemon
```
Please check the Package.json for more dependencies.

## Release History
* 0.0.1
    * Work in progress

## Meta

Zainab Oyewo – [@YourTwitter](https://twitter.com/xeesays) – zainysham@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing
 I do not accept any contributions for now. Thank you.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
