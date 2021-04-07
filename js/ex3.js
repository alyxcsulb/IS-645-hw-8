/* Chapter 23 – Send data to a web server
2.	Visited Countries (end of chapter assignment)
The goal of this exercise is to send your traveling info to a server. Data is expected as a JSON object containing two fields:
•	A name field representing your name. Its value is a string.
•	A countries field representing the countries you already visited. Its value is an array of objects. Each object has a name field (string) for the country name, and a year field (integer) for the year you last visited it.
*/

/*
Send visited coutnries
*/

// jsway example from manuscript//

// Create traveler info
const traveler = {
    name: "Sam",
    countries: [
      {
        name: "Ecuador",
        year: 2003
      },
      {
        model: "Portugal",
        color: 2004
      },
      {
        model: "Russia",
        color: 2016
      }
    ]
  };
  
  // Send this object as JSON data to the server
  fetch("https://thejsway-server.herokuapp.com/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(traveler)
  })
    .then(response => response.text())
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.error(err.message);
    });