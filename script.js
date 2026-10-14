const createButton = document.querySelector("#createBtn");
const resultContainer = document.querySelector(".result");
const genderCheckbox = document.querySelector("#genderCheckbox");

let firstNames = ["Андрей", "Марк", "Ростислав", "Иван", "Петр", "Сергей"];
let lastNames = ["Героев", "Лебедев", "Титов", "Иванов", "Смирнов", "Кузнецов"];

let femaleNames = ["Анна", "Мария", "Елена", "Ольга", "Ирина", "Татьяна"];
let femaleSurnames = ["Иванова", "Петрова", "Сидорова", "Смирнова", "Кузнецова", "Попова"];

let jobs = ["Алхимик", "Учитель", "Врач", "Воин", "Маг", "Кузнец"];

createButton.addEventListener("click", () => {

    let currentNames, currentSurnames;

    if (genderCheckbox.checked) {
        currentNames = femaleNames;
        currentSurnames = femaleSurnames;
    }

    else{
        currentNames = firstNames;
        currentSurnames = lastNames;
    };

    const randomNameIndex = Math.floor(Math.random() * Object.keys(currentNames).length);
    const randomSurnameIndex = Math.floor(Math.random() * Object.keys(currentSurnames).length);
    const randomProfessionIndex = Math.floor(Math.random() * Object.keys(jobs).length);
    let randomAge = Math.floor(Math.random() * 86) + 14;

    let character = {
        name: currentNames[randomNameIndex],
        surname: currentSurnames[randomSurnameIndex],
        age: randomAge,
        profession: jobs[randomProfessionIndex]
    };

    const characterDiv = document.createElement("div");
    characterDiv.className = "character-card";

    for (let key in character){
        const paragraph = document.createElement("p");
        paragraph.textContent = `${key}: ${character[key]}`;
        characterDiv.appendChild(paragraph);
    };

    resultContainer.appendChild(characterDiv);
});