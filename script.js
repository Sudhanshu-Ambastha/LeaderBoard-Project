let data = [];
const fname = document.getElementById("fName");
const lname = document.getElementById("lName");
const country = document.getElementById("country");
const score = document.getElementById("score");
const playersList = document.getElementById("playersList");
const addPlayerBtn = document.getElementById("addPlayerBtn");

addPlayerBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (fname.value && lname.value && country.value && score.value) {
        let player = {
            fname: fname.value,
            lname: lname.value,
            country: country.value,
            score: parseInt(score.value),
        };
        data.push(player);
        resetForm();
        updateDataOnUI();
    } else {
        alert("Please fill in all fields");
    }
});

function updateDataOnUI() {
    data.sort((a, b) => b.score - a.score);
    playersList.innerHTML = data
        .map((player, index) => `
            <div class="player">
                <span>${player.fname} ${player.lname}</span>
                <span>${player.country}</span>
                <span>${player.score}</span>
                <div>
                    <button onclick="changeScore(${index}, 5)">+5</button>
                    <button onclick="changeScore(${index}, -5)">-5</button>
                    <button onclick="deletePlayer(${index})">X</button>
                </div>
            </div>
        `)
        .join("");
}

function changeScore(index, value) {
    data[index].score += value;
    updateDataOnUI();
}

function deletePlayer(index) {
    data.splice(index, 1);
    updateDataOnUI();
}

function resetForm() {
    fname.value = "";
    lname.value = "";
    country.value = "";
    score.value = "";
}
