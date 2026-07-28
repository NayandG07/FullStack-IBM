const fetchData = async () => {
    const res = await fetch('http://localhost:8000/users');

    const response = await res.json();
    renderData(response);
}

function renderData(data) {
    const parent = document.getElementById('container');
    data.forEach((e, i) => {
        const childDiv = document.createElement('div');
        childDiv.style.border = '1px solid darkgreen';

        const name = document.createElement('p');
        name.innerText = `Name: ${e.name}`;

        const uni = document.createElement('p');
        uni.innerText = `University: ${e.uni}`;

        childDiv.append(name, uni);
        parent.appendChild(childDiv);
    });
}

fetchData();