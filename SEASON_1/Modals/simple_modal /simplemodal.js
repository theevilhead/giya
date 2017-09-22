var modalTrigger =  document.getElementsByClassName("modal-trigger")[0];
var closeTrigger = document.getElementsByClassName("close")[0];
var modal = document.getElementsByClassName("modal-1Container")[0];


modalTrigger.addEventListener("click", function(el){
	modal.style.visibility = "visible";

});

closeTrigger.onclick = function() {
	modal.style.visibility = "hidden";
};

window.onclick = function (event){
	if (event.target == modal) {
		modal.style.visibility = "hidden";
    }
};
