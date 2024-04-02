async function refresh(file) {
    let response = await fetch(file);
    let data = await response.json();

    let tableBody = document.getElementById("tablebody");

    for (let i = 0; i < data.length; i++) {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        let ageCell = document.createElement("td");

        nameCell.textContent = data[i].name;
        ageCell.textContent = data[i].age;

        row.appendChild(nameCell);
        row.appendChild(ageCell);

        tableBody.appendChild(row);
    }
}