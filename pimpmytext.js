
window.onload=function(){
	
	function onPimpinBtnClick() {
		var check = document.getElementById('checkbox').checked;
		document.getElementById('textarea').style.fontSize = "24pt";
		if (check) {
			document.getElementById('textarea').style.fontWeight = "bold";
			document.getElementById('textarea').style.color = "green";
			document.getElementById('textarea').style.textDecoration = "underline";
			document.getElementById('textarea').style.fontFamily = "Impact";
			document.getElementById('textarea').style.textAlign = "center";
		}
		else{
			document.getElementById('textarea').style.fontWeight = "";
			document.getElementById('textarea').style.color = "";
			document.getElementById('textarea').style.textDecoration = "";
			document.getElementById('textarea').style.fontFamily = "";
			document.getElementById('textarea').style.textAlign = "";
		}
	}

	function onSnoopifyBtnClick(){
		document.getElementById('textarea').style.textTransform = "uppercase";
		var text = document.getElementsById('textarea').value;
		var parts = text.split(".");
		text = parts.join("-izzle");
		document.getElementById('textarea').value = text;

	}

	document.getElementById('buttonPimpin').onclick = onPimpinBtnClick;
	document.getElementById('buttonSnoopify').onclick = onSnoopifyBtnClick;

}

