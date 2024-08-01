import express from 'express'
const app= express()
const PORT= process.env.PORT || 9000
import "dotenv/config"

app.get("/", (req, res)=>{
    return res.json({message:"working"})
})

app.listen(PORT, ()=> console.log(`Server is running on PORT ${PORT}`))