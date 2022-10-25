import express from 'express'
import discos from './discos'

const router = express.Router()
router.use(express.json())

//Aqui se conectarian todas las rutas, por ejemplo: cree la ruta para los discos
router.use("/discos", discos)

export default router