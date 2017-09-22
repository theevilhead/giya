var modalTrigger =  document.getElementsByClassName("modal-trigger")[0];
var closeTrigger = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName("modalINF")[0];
var submit = document.getElementsByClassName("submit")[0];


modalTrigger.addEventListener("click", function(el){
	modal.style.visibility = "visible";
	modal.style.opacity = 1;
});

closeTrigger.onclick = function() {
	modal.style.visibility = "hidden";
};

submit.onclick = function() {
	modal.style.visibility = "hidden";
	modal.style.opacity = 0;
};

window.onclick = function (event){
	if (event.target == modal) {
		modal.style.visibility = "hidden";
    }
};
