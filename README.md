# Nodejs Tutorial Rest API

This is an app to practise working with Representational State Transfer (REST) APIs that just transfer data instead of user interfaces.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* This app creates simple get and post routes/controllers to send and receive data, as well as header and status information.

A Postman API and a [Codepen REST API test app](https://codepen.io/AndrewJBateman/pen/dwbVaX?editors=0010) are used to send/receive data.

## Screenshots

![Example screenshot](./images/postman.png).

## Technologies

* [multer v1.4.1](https://www.npmjs.com/package/multer) is the middleware used for uploading files.

* [socket.io v2.2.0](https://socket.io/) is added for real-time event-based communications.

* [graphql v14.1.1](https://www.graphql.org/) is added, a query language for APIs.

* [bcrypt v2.4.3](https://www.npmjs.com/package/bcrypt) library used to hash passwords.

* [mongoose v5.4.6](https://mongoosejs.com/) object modelling for node.js.

* [Postman](https://www.getpostman.com/) API dev platform used.

* [Codepen 'REST API test'](https://codepen.io/AndrewJBateman/pen/dwbVaX?editors=1010) used to test the app.

## Setup

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Code Examples

* getPosts method from controllers\feed.js

```javascript

exports.getPosts = async (req, res, next) => {
  const currentPage = req.query.page || 1;
  const perPage = 2;
  try {
    const totalItems = await Post.find().countDocuments();
    const posts = await Post.find()
      .populate('creator')
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

        // return a response with json data
    res.status(200).json({
      message: 'Fetched posts successfully.',
      posts: posts,
      totalItems: totalItems
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

```

## Features

* MongoDB cluster set up with usernme and password.

## Status & To-Do List

* Status: incomplete, nothing viewed on localhost://8080

* To-Do: update code. Also requires more commenting and screen shots.

## Inspiration

* [NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL sections 24 and other sections)](https://www.udemy.com/nodejs-the-complete-guide/).

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
