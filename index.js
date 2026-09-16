let score = 0;

const nycb = prompt(`What does NYCB stand for:
    [1] New York City Ballet
    [2] New York City Bridge
    [3] New York City Ball
    `);

const nycbNum = Number(nycb);

if (Number.isNaN(nycbNum)) {
    alert("Must enter a Number");
} else {
    if (nycbNum < 1 || nycbNum > 3) {
        alert("Enter a number between 1 - 3");
    } else if (nycbNum === 1) {
        score += 1;
    }
}

const abt = prompt(`Who was the director of American Ballet Theatre in 1984:
    [1] George Balanchine
    [2] Mikhail Baryshnikov
    [3]Kevin Mackenzie
    `);
const abtNum = Number(abt);

if (Number.isNaN(abtNum)) {
    alert("Must enter a Number");
} else {
    if (abtNum < 1 || abtNum > 3) {
        alert("Enter a number between 1 - 3");
    } else if (abtNum === 2) {
        score += 1;
    }
}

const est = prompt(`Estonia is in what regian:
    [1] Balkins
    [2] Middle East
    [3] Baltics
    `);
const estNum = Number(est);

if (Number.isNaN(estNum)) {
    alert("Must enter a Number");
} else {
    if (estNum < 1 || estNum > 3) {
        alert("Enter a number between 1 - 3");
    } else if (estNum === 3) {
        score += 1;
    }
}

alert(`Your score is: ${score}`);