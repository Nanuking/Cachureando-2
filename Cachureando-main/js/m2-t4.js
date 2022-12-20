// Mostrar fecha
const currentDate = new Date();
const time = currentDate.getHours();
const min = currentDate.getMinutes();
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

document.getElementById(
  "datetime"
).innerHTML = `${day}/${month}/${year} Hora: ${time}:${min}`;

//mostrar calificación de input grade
function displayGradeMessage(grade) {
  if (grade >= 0 && grade <= 2) {
    message = `Haz calificado con un ${grade} - Muy deficiente :(`;
  } else if (grade >= 3 && grade <= 4) {
    message = `Haz calificado con un ${grade} - Insuficiente :(`;
  } else if (grade >= 5 && grade <= 6) {
    message = `Haz calificado con un ${grade} - Suficiente :|`;
  } else if (grade >= 7 && grade <= 8) {
    message = `Haz calificado con un ${grade} - Bien :)`;
  } else if (grade >= 9 && grade <= 10) {
    message = `Haz calificado con un ${grade} - Sobresaliente! :D`;
  }
  return message;
}

document.getElementById("btn").addEventListener("click", function () {
  const grade = document.getElementById("grade").value;
  document.getElementById("displaygrade").innerHTML =
    displayGradeMessage(grade);
});
