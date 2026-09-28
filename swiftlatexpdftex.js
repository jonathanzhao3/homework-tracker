// Worker wrapper for SwiftLaTeX: ensure engine resolves .wasm/.fmt to local files
var Module = typeof Module !== 'undefined' ? Module : {};
Module.locateFile = function(path){
	if(typeof path === 'string'){
		if(path.endsWith('.wasm')) return 'swiftlatexpdftex.wasm';
		if(path.endsWith('.fmt')) return 'swiftlatexpdftex.fmt';
	}
	return path;
};
importScripts('remote_swiftlatex.js');
