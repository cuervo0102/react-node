import http from 'http';
// const fs = require('fs');

const PORT = process.env.PORT;

//creating server
const server = http.createServer(async(req, res)=>{
    res.setHeader('Content-type', 'text/html');
    res.write('Test Done  success');
    res.statusCode = 200;
    res.end();
})


server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})