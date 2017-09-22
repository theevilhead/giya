var modalTrigger =  document.getElementsByClassName("modal-trigger")[0];
var modal = document.getElementsByClassName("alert-modal")[0];
var modalContent = document.getElementsByClassName("alertContainer")[0];
var close = document.getElementsByClassName("close")[0];


modalTrigger.addEventListener("click", function(el){
	modal.style.visibility = "visible";
	modal.style.opacity = 1;
});

close.addEventListener("click", function(el){
	modal.style.visibility = "hidden";
	modal.style.opacity = 0;
});

// window.onclick = function (){
// 	if (event.target == modal) {
// 		modal.style.visibility = "visible";
// 		modalContent.classList.add("active");
// 		window.setTimeout(function(){
// 			modalContent.classList.remove("active");
// 		},200);

//     }
// };
