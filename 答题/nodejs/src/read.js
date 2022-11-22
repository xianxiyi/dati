const fs=require('fs');
const express=require("express");
const app=new express();
const port=3000;
app.listen(port,function(){
	console.log("服务器已经启动了");
});
const filepath='d:/desktop/题库.txt';
app.get("/begin",(req,res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	//允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
	//允许的请求类型
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	//获取请求的题目序号
	var num=req.query.number;
	var txt=[];
	fs.readFile(filepath,'utf-8',function(err,data){
		if(err){
			console.error(err);
		}
		else{
			
		}
		const lines = data.split('\r\n');
		lines.forEach((item)=>{
			txt.push(item);	
		})
		//console.log(txt[num]);
		res.send(
			txt[num],
		);
	});
	
	
});
app.get("/getcount",(req,res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	//允许的头部信息，如果自定义请求头，需要添加以下信息，允许列表可以根据需求添加
	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
	//允许的请求类型
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",' 3.2.1');
	var txt=[];
	fs.readFile(filepath,'utf-8',function(err,data){
		if(err){
			console.error(err);
		}
		else{
			
		}
		const lines = data.split('\r\n');
		var length=lines.length;
		//console.log(txt[num]);
		res.send({
			length:length}
		);
	});
	
	
});
