// смена изображений

var images = [
    "Photo/js1.jpg",
    "Photo/js2.jpg",
    "Photo/js3.jpg"
];
	
var index = 0;

var userTime = prompt("інтервал зміни фото в секундах:");
var interval = parseInt(userTime) * 1000;

function changeImage() {
    index++;
    if (index >= images.length){
        index = 0;
    }
    document.getElementById("prokrutka").src = images[index];
}

setInterval(changeImage, interval);




// Изменение фона 
var date = new Date();
var hour = date.getHours();


if (hour >= 6 && hour < 20){
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
}

else{
    document.body.style.backgroundColor = "#1b1c42";  
    document.body.style.color = "white";
}






// створення таблиці 

function createTable(){
	var min = document.getElementById("min").value;
	var max = document.getElementById("max").value;

	min = parseInt(min);
	max = parseInt(max);

	var table = document.getElementById("randTable");
	table.innerHTML = ""; // очищення

	for (var i = 0; i < 10; i++) {

		var row = document.createElement("tr");
		for (var j = 0; j < 10; j++) {
			var cell = document.createElement("td");

            // випадкове число
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            cell.innerHTML = num;


            // шаховий фон
             cell.style.color = "black";
            if ((i + j) % 2 == 0) {
                cell.style.backgroundColor = "#ffffff"; // білий
            } else{
                cell.style.backgroundColor = "#d3d3d3"; // світло-сірий
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
