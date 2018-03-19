import {expect} from "chai";
import jsdom from "jsdom/lib/old-api";

//fs is imported from Node.js, it stands for File System
//fs will allow us to interact with the File System, using Node.js
import fs from "fs";

describe("Our first test", function(){
	it("Should pass", function(){
			expect(true).to.equal(true);
	});
});

//this test will confirm that HTML markup is in the index.html file
describe("index.html",function(){
	it("should say Hello", function(done){
		//get a reference to the HTML file and put that in memory
		const index = fs.readFileSync("./src/index.html", "utf-8");

		//this defines the jsdom environment
		//the window argument corresponds to the window in the browser
		//index corresponds to a string that contains the entire HTML markup of index.html
		jsdom.env(index, function(err, window){
			const h1 = window.document.getElementsByTagName("h1")[0];
			expect(h1.innerHTML).to.equal("Hello World!");
			done();
			window.close();
		});
	});
});
