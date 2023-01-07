const container = document.getElementById('container');

async function getRandomPerson() {
    const server = 'https://randomuser.me/api';
    const response = await fetch(server, {
        method: 'GET',
    });

    const responseResult = await response.json();
    return responseResult.results[0];
}

async function add() {
    const person = await getRandomPerson();

    const temple = `
    <div class="card">
        <div>
            <img src="${person.picture.medium}" alt="">
        </div>
        <div>
            <p><b>Cell:</b> ${person.cell}</p>
            <p><b>City:</b> ${person.location.city}</p>
            <p><b>Email:</b> ${person.email}</p>
            <p><b>Coordinates:</b> ${person.location.coordinates.latitude} ${person.location.coordinates.longitude} </p>
        </div>
    </div>`;

    container.insertAdjacentHTML('afterbegin', temple);
}

function deleteUser() {
    container.innerHTML = '';
}