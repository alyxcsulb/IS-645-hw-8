/* Chapter 21 – Query a Web Server
1.	Famous Paintings (end of chapter assignment / modified table requirements)
In this exercise, you'll show information about some famous paintings on a web page table. Information about the paintings is located at URL:
https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json
It has the following content.
[
  {
    "name": "The Starry Night",
    "year": "1889",
    "artist": "Vincent Van Gogh"
  },
  {
    "name": "The Scream",
    "year": "1893",
    "artist": "Edvard Munch"
  },
  {
    "name": "Guernica",
    "year": "1937",
    "artist": "Pablo Picasso"
  }
]
*/

// jsway example from manuscript//
fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )
    .then(response => response.json()) // Access and return response's JSON content
    .then(paintings => {
      const paintingsElement = document.getElementById("paintings");
      paintings.forEach(painting => {
        const paintingElement = document.createElement("tr");
        paintingElement.innerHTML = `<td>
          ${painting.name}
          </td>
          <td>
          ${painting.year}
          </td>
          <td>
          ${painting.artist}
          </td>`;
        paintingsElement.appendChild(paintingElement);
      });
    })
    .catch(err => {
      console.error(err.message);
    });