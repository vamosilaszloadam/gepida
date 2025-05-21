/*
* File: app.js
* Author: Vámosi László Ádám
* Copyright: 2025, Vámosi László Ádám
* Group: Szoft I-N
* Date: 2025-05-21
* GitHub: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

const tbody = document.querySelector("#tbody")
const url = 'http://localhost:8000/api/bikes'
var bikeList = []

function getBikes() {
    fetch(url)
    .then(response => response.json())
    .then(result => {
        console.log(result.data)
        bikeList = result.data
        renderTbody()
    })
}

function renderTbody() {
    let rows = ""
    for(let bike of bikeList) {

        rows += `
            <tr>
                <td>${bike.id}</td>
                <td>${bike.name}</td>
                <td>${bike.wheel}</td>
                <td>${bike.usage}</td>
                <td>${bike.price}</td>
            </tr>
        `
    }
    console.log(rows)
    tbody.innerHTML = rows
}

getBikes()