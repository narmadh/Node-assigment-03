const http=require("http")
const server=http.createServer((Request,Response)=>{
    Response.end("<p>Hello World</p><p>This is Narmadha</p>")
})
server.listen(5000,()=>{
    
})