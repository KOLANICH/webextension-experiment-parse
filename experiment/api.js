"use strict";

//import "resource://gre/modules/reflect.jsm";
//import("resource://gre/modules/reflect.jsm");
Components.utils.import("resource://gre/modules/reflect.jsm");
//ChromeUtils.import("resource://gre/modules/reflect.jsm");
//ChromeUtils.import("resource:///modules/SitePermissions.jsm");

class ReflectParseAPI extends ExtensionAPI {
	getAPI() {
		return {
			experiments : {
				parse : {
					async parse(sourceCode, loc=true, source="", line=1) { // you must double default args in signature
						/*if(SitePermissions.get(gBrowser.currentURI, "reflect-parse") == 0){
							SitePermissions.set(gBrowser.currentURI, "reflect-parse", SitePermissions.ASK)
						)*/
						//console.log(sourceCode, loc, source, line*);
						return new Promise((resolve, reject)=>{
							try{
								resolve({"res":Reflect.parse(sourceCode, {loc, source, line})});
							}
							catch(ex){
								resolve({"error":ex.message});
							}
						});
					},
				},
			},
		};
	}
};

var parse; // identifier from the manifest (key in experiment_apis). __FORMERLY__ COULD BE ANY matching the key in experiment_apis within the manifest. NOW it MUST match API 
parse=ReflectParseAPI; //let, const, class, export or without var don't work. 