import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, () =>{
    console.log(`escuchando por el puerto ${PORT}`)
})

app.get("/", (_req, res) => {
    res.send("Hola mundo")
})