const http = require ("http");
const url = require ("url");
const path = require ("path");
const fs = require("fs");

const pageHead = ('<!DOCTYPE html><html>\n<head><meta charset="utf-8">\n<title>Eerik Poopuu</title>\n</head>\n<body >');
const pagebanner = ('<img src="banner.png" alt="kursuse banner">');
const pagebody = ('<h1> Eerik Poopuu </h1>\n<p> see veebileht on valminud  <a href="https://www.tlu.ee/" target="_blank">TLÜ</a> Digitehnoloogiate insituudi informaatika eriala õppetöö raames.</p>');
const pagefoot = ('\n<hr></body></html>');


http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	console.log(currentURL);
	if (currentURL.pathname === "/"){
		res.writeHead(200, {"content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pagebody);
		res.write('\n\t <hr>\n\t <p> <a href = "addname">Lisa oma nimi</a>! </p>');
		res.write(pagefoot);
		console.log("keegi vaatab");
		return res.end();
	}
	else if (currentURL.pathname === "/addname"){
		res.writeHead(200, {"content-type": "text/html"});
		res.write(pageHead);
		res.write(pagebanner);
		res.write(pagebody);
		res.write('\n\t <hr>\n\t <p> <a href = "addname">Lisa oma nimi</a>! </p>');
		res.write(pagefoot);
		return res.end();
		
		
	}
	else if (currentURL.pathname === "/banner.png"){
		console.log("tahame pilti")
		let bannerPath = path.join(__dirname, "public","banner");
		fs.readFile(bannerPath + currentURL.pathname,(err,data)=>{
			if (err){
				throw err;
			}
			else {
				res.writeHead(200,{"Content-Type":"image/png"});
				res.end(data);
			}
		});
		};
	else{
	res.end("error404")};
	//valmis,saada ära
}).listen(5155);
