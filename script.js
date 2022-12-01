function open(e) {
	let img = e.target;
	let box = img.parentElement;
	let gift = box.firstElementChild;
	box.classList.add("open")
}

document.querySelectorAll(".box")[16].addEventListener("click", open);

//document.querySelectorAll(".box").forEach((e)=>e.addEventListener("click", open));