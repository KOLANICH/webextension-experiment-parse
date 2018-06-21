"use strict";
let jsEl=document.getElementById("JS");
let astEl=document.getElementById("AST");

if(!Reflect.parse){
	jsEl.value="You need the extensions to test this API";
	jsEl.reportValidity(jsEl.value);
	jsEl.reportValidity();
}
function updateAST(evt){
	return Reflect.parse(jsEl.value).then(res => {
		astEl.value=JSON.stringify(res, null, "\t");
		jsEl.setCustomValidity("");
	}, err =>{
		let errStr=err.toString();
		jsEl.setCustomValidity(errStr);
		astEl.value=errStr;
	}).then(()=>{jsEl.reportValidity();});
}
updateAST();
jsEl.addEventListener("change", updateAST, false);
jsEl.addEventListener("input", updateAST, false);
