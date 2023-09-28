const http = require ("http");

http.createServer(function(req, res){
	res.writeHead(200, {"content-type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Eerik Poopuu</title></head><body >');
	res.write('<h1> Eerik Poopuu </h1><p> see veebileht on valminud  <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> Digitehnoloogiate insituudi informaatika eriala õppetöö raames.</p>');
	res.write('<hr></body></html>');
	console.log("keegi vaatab");
	//valmis,saada ära
	return res.end();
}).listen(5112);
