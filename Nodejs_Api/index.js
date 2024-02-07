const express=require('express')
const app=express()
const PORT=3000


app.get('/', (req,res)=>{
    res.json({
        "Docker":"Hey dockerization of Dev team"
    })
})

app.listen(PORT, ()=>{
    console.log('server started successfully')
})
// docker login
// docker build -t ankit608/nodejs_api:0.0.1.RELEASE .
// to run it we do:- docker container run -d -p 3000:3000 ankit608/nodejs_api:0.0.1.RELEASE
// docker push ankit608/nodejs_api:0.0.1.RELEASE 