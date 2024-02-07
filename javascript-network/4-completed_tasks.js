#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, function (error, response, body) {
  if (error) {
    console.error(error.message);
  } else {
    const tasks = JSON.parse(body);
    const completed = {};
    for (const x of tasks) {
      if (x.completed === true) {
        if (x.userId in completed) {
          completed[x.userId]++;
        } else {
          completed[x.userId] = 1;
        }
      }
    }
    console.log(completed);
  }
});


// Write a script that computes the number of tasks completed by user id.

// The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
// Only print users with completed task
// You must use the module request