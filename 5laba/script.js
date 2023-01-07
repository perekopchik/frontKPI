const form = document.getElementById("form");
const name = document.getElementById("name");
const id_card = document.getElementById("id_card");
const fname = document.getElementById("fname");
const birthday = document.getElementById("birthday");
const address = document.getElementById("address");
const info_name = document.getElementById("inf_name");
const info_id_card = document.getElementById("inf_id_card");
const info_fname = document.getElementById("inf_fname");
const info_birthday = document.getElementById("inf_birthday");
const info_address = document.getElementById("inf_address");

function getName(input){
	return /^[А-ЯІїЄ|A-Z][а-яіЇЄ|a-z]{1,20}\s[А-ЯЇЄ|A-Z]\.[А-ЯЇЄ|A-Z]\.$/.test(input);
}

function getId_card(input){
	return /^[А-ЯІЇЄ|A-Z]{1,2}\s[№][0-9]{1,6}$/.test(input);
}

function getFname(input){
	return /^[А-ЯІЇЄ]{1,4}$/.test(input);
}

function getBirthday(input){
	return /^\d{2}\.\d{2}\.\d{4}$/.test(input);
}

function getAddress(input){
	return /^м\.\s[А-ЯІЇЄ][А-ЯІЇЄа-яіїє-]{1,20}$/.test(input);
}

function checkValidationForm(){
	var correct = true;
	name.classList.remove("input-error");
	if(!getName(name.value)){
		name.classList.add("input-error");
		correct = false;
	}
	
	id_card.classList.remove("input-error");
	if(!getId_card(id_card.value)){
		id_card.classList.add("input-error");
		correct = false;
	}
	
	fname.classList.remove("input-error");
	if(!getFname(fname.value)){
		fname.classList.add("input-error");
		correct = false;
	}
	birthday.classList.remove("input-error");
	if(!getBirthday(birthday.value)){
		birthday.classList.add("input-error");
		correct = false;
	}
	address.classList.remove("input-error");
	if(!getAddress(address.value)){
		address.classList.add("input-error");
		correct = false;
	}
	
	if(correct){
		alert("Все введено вірно");
		info_name.innerHTML = name.value;
		info_id_card.innerHTML = id_card.value;
		info_fname.innerHTML = fname.value;
		info_birthday.innerHTML = birthday.value;
		info_address.innerHTML = address.value;
		form.reset();
	}
	else{
		alert("Неправильне введення. Спробуйте знову");
	}
	correct = true;
}