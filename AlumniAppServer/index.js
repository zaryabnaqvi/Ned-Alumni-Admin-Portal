//const express = require('express');
import express from 'express'
//const morgan = require('morgan');
import morgan from 'morgan'
import cors from 'cors'
//const bodyParser = require('body-parser');
//import bodyParser from 'bodyParser'
//const axios = require('axios');
//import {axios} from 'axios'

import mongoose from 'mongoose';
import Event from './models/Event.js';
import bodyParser from 'body-parser'

// express app
const app = express();
const hostname = 'localhost';
const port = 3000;


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// app.options(cors())
app.use(cors({origin:"http://localhost:5173"}))
app.use(bodyParser.json({limit:"1000000000"}));
app.use(bodyParser.urlencoded({ limit: '1000000000', extended: true })); 
// app.use((req, res, next) => {
//   res.locals.path = req.path;
  
//  // Website you wish to allow to connect
//  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');

//  // Request methods you wish to allow
//  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//  // Request headers you wish to allow
//  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//  next();
// });

    mongoose.connect('mongodb://127.0.0.1:27017/AlumniAppDB', function(err) {
    if (err) 
     console.log("The error is : " + err); 
    else{
        console.log("Database Connected") 
    }
});

async function saveEvent(obj){
  console.log(obj);
    const event = new Event({
        title: obj.title,
        content: obj.content,
        eventDate: obj.eventDate,
        eventTime: obj.eventTime,
        choice:obj.choice,
        createdAt: obj.createdAt,
        userID:  obj.userID,
        status:  obj.status,
        imagePath:  obj.imagePath
    });
    
     const savedEvent = await event.save();
     return savedEvent
    
}

async function getEventsList(){ 
    const eventsList = await Event.find();
    return eventsList;
}

async function getEvent(id){
  const event = await Event.findById(id).exec();
  return event;
}

async function searchEvents(name){
  const event = await Event.find({ title: name }).exec();
  console.log(event)
  return event;
}

async function deleteEvents(obj){
  const deletedEvent = await Event.findByIdAndDelete(obj).exec();
  console.log(deletedEvent);
  return deletedEvent;
}
async function updateEvents(obj,id){
  const updateEvent = await Event.findByIdAndUpdate(id,obj).exec();
  console.log(updateEvent);
  return updateEvent;
}

// routes
app.get('/', (req, res) => {
  console.log("WELCOME TO NED ALUMNI APP")
  res.send("WELCOME TO NED ALUMNI APP")
})

app.get('/getEventsList', (req, res) => {
    getEventsList()
    .then(response => 
       {
        console.log(response)
        res.send(response)
      })
})

app.get('/getEvent', (req, res) => {
  getEvent(req.query._id)
  .then(response => 
     {
      console.log(response)
      res.status(200).json({ data: response })
    })
})

app.get('/searchEvents', (req, res) => {
  searchEvents(req.query.eventName)
  .then(response => 
     {
      console.log(response)  
      res.status(200).json({ data: response })
    })
}) 


app.post('/saveEvent', async(req, res) => {
    await saveEvent(req.body)
    .then(response => 
      {
       console.log(req.body)
       if(response._id){
        res.status(200).json({ data: response, messsage: "Data Saved Successfully" })
      }else{
        res.status(200).json({ data: response, messsage: "Unable to save data" })
      }
     })
})

app.delete('/deleteEvent/:id', (req, res) => {
  deleteEvents(req.params.id)
  .then(response =>
  { 
    res.status(200).json({ data: "Data Deleted Successfully" })
   })
})

app.put('/updateEvent/:id', (req, res) => {
  updateEvents(req.body,req.params.id)
  .then(response =>
  { 
    res.status(200).json({ data: "Data Deleted Successfully" })
   })
})

// const blog = await Blog.deleteOne({ author: "Jesse Hall" })
// console.log(blog)

// 404 page
// app.use((req, res) => {
//   res.status(404).render('404', { title: '404' });
// });


