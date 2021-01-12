import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const express = require("express");
// const app = express();
// const cors = require("cors");
// const PORT = 4000;
// const mongoose = require("mongoose");

// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/details", {
//   useNewUrlParser: true
// });

// const connection = mongoose.connection;
// const router = express.Router();

// let user_info = require()
// connection.once("open", function() {
//   console.log("Connection with MongoDB was successful");
// });

// app.listen(PORT, function() {
//   console.log("Server is running on Port: " + PORT);
// });


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

