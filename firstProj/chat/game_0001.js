document.addEventListener("DOMContentLoaded", function () {
  // Здесь можно написать код, который будет выполнен после загрузки страницы

  // debugger;
  // создаем таблицу
  var table = document.createElement("table");

  // Добавить рамку к таблице
  table.style.border = "1px solid black";

  // создаем заголовочную строку таблицы
  var headerRow = document.createElement("tr");
  var headerCell = document.createElement("th");
  headerCell.style.border = "1px solid blue";

  headerRow.appendChild(headerCell);
  for (var i = 1; i <= 10; i++) {
    headerCell = document.createElement("th");
    headerCell.appendChild(document.createTextNode(i));
    headerRow.appendChild(headerCell);
    headerCell.style.border = "1px solid blue";
  }
  table.appendChild(headerRow);
  // создаем строки таблицы
  for (var i = 1; i <= 10; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    cell.style.border = "1px solid green";


    cell.appendChild(document.createTextNode(i));
    row.appendChild(cell);
    for (var j = 1; j <= 10; j++) {
      cell = document.createElement("td");
      cell.style.border = "1px solid red";

      cell.appendChild(document.createTextNode(i * j));
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  // добавляем таблицу на страницу
  document.body.appendChild(table);

});

console.log("Страница загружена");
