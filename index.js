import express from 'express'
import { TrafficLight } from './TrafficLight.js'

const server = express()
const port = 3000
const northTrafficLight = new TrafficLight('green', 20)

server
  .get('/init', (req, res) => {
    //  const northTrafficLight = new TrafficLight("green", 20)
    northTrafficLight.start()
    res.json({ message: 'Tarea iniciada', uids: [northTrafficLight.UID] }).status(200)
  })
  .get('/stop', (req, res) => {
    northTrafficLight.stop()
    res.json({ message: 'Tarea finalizada' }).status(200)
  })

server.listen(port, () => {
  console.log(`Servidor arriba ${port}`)
})
