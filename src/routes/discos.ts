import express from 'express'

const app = express()

app.get('/', (_req, res) => {
    res.send("Todos mis discos")
})

export default app