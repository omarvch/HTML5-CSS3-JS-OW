

function mostarMas(){
	var masinfo = document.getElementById("textoResumen");

	if(masinfo.style.display == "none"){
		masinfo.style.display = "inline";	
	}else{
		masinfo.style.display = "none"
	}
}
$('#masInfo').on('click',function(e){
	mostarMas();	
});

/*$(document).ready(fucntion(){
	console.log("ready");
});*/