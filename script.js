function open(e) {
	let img = e.target;
	let box = img.parentElement;
	box.classList.add("open")
}

function close(e) {
	let closeBtn = e.target;
	let box = closeBtn.parentElement.parentElement;
	box.classList.remove("open");
}

function compF(e) {
	let box = e.target.parentElement.parentElement;
	box.querySelector("img").style.filter = "grayscale(95%)";
	box.querySelector(".reddemBtn").innerText = "felhasználva";
	box.querySelector(".reddemBtn").style.backgroundColor = "#555";
	box.removeEventListener("click", open);
	let boxNum = parseInt(box.classList[1][1] + box.classList[1][2] - 1);
	complete.push(boxNum);
	localStorage.setItem('compArr', JSON.stringify(complete));
}

function completed() {
	let boxes = document.querySelectorAll(".box");
	for(let i = 0; i < complete.length; i++) {
		boxes[complete[i]].querySelector("img").style.filter = "grayscale(95%)";
		boxes[complete[i]].removeEventListener("click", open);
	}
}

let boxObj = {
	1: 16,
	2: 4,
	3: 9,
	4: 0,
	5: 14,
	6: 12,
	7: 19,
	8: 7,
	9: 10,
	10: 5,
	12: 2,
	13: 15,
	14: 3,
	15: 20,
	16: 17,
	17: 18,
	18: 1,
	19: 8,
	20: 21,
	21: 11,
	22: 6,
	23: 13
}

let complete = JSON.parse(localStorage.getItem('compArr')) || [16,9];

let date = new Date();
let day = date.getDate();

for (let i = 1; i <= day; i++) {
	(i < 24 && i != 11) ? document.querySelectorAll(".box")[boxObj[i]].addEventListener("click", open) : "";
}

document.querySelectorAll(".box")[boxObj[23]].addEventListener("click", open)

document.querySelectorAll(".close").forEach((e)=>e.addEventListener("click", close));

document.querySelectorAll(".reddemBtn").forEach((e)=>e.addEventListener("click", compF));

completed();