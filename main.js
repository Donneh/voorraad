//get modal element
var modal = document.getElementById("simpleModal");
//get open modal button
var modalBtn = document.getElementById('berekenbutton');
//get Close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
//get oke button
var okeButton = document.getElementsByClassName('closeModal')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

//listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outsideclick
window.addEventListener('click', outsideClick);

//button in de modal
okeButton.addEventListener('click', closeModal);

//functie openModal
function openModal(){
		modal.style.display = 'block';
		document.getElementById("ectpunten").style.color = "lime";
}

function closeModal(){
	modal.style.display = 'none';
}

function outsideClick(x){
	if(x.target == modal){
		modal.style.display = 'none';
	}
}
