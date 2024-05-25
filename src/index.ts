import express from 'express'
import { dbinit } from './infrastructure/driven_adapters/database/dbinit/db.init'
import { router } from './infrastructure/entry_points/routes/events.routes'

const app = express()
app.use(express.json())

dbinit()

const PORT = process.env.PORT || 8787

app.listen(PORT, () =>{
    console.log(`escuchando por el puerto ${PORT}`)
})

app.use(router)

app.get("/", (_req, res) => {
    res.send("Hola mundo")
})