"use strict";
//import rootkit from "./rootkit.js";

//injects an API into a webpage
function parse(sourceCode, options={}){
	return new window.Promise(function(resolve, reject){
		browser.runtime.sendMessage({sourceCode, options}).then((res)=>{
			res=allowPageAccess(res);
			if(res.error){
				reject(res.error)
			}
			if(res.res){
				resolve(res.res)
			}
			reject(res.res)
		});
	});
}

window.wrappedJSObject.Reflect.parse=cloneInto(parse, window, {cloneFunctions: true});
