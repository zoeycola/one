require("express")().get("*",function (req, res) {
  res.sendFile(__dirname+req.path);
}).listen(8080,function(){
  console.log("服务器启动成功");
})
