//import bodyParser from 'body-parser';
import express from 'express'

//import usersRoutes from './routes/usuarios.js'
import router from './routes/usuarios.js'
import routeracomodacoes from './routes/acomodacoes.js'
import routerreservas from './routes/reservas.js'
import routeavaliacoes from './routes/avaliacoes.js'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const porta = 5000

app.use(cors())
app.use(router, routeracomodacoes, routerreservas, routeavaliacoes)

//app.use('/users', usersRoutes)

//app.get('/',(req,res)=>{res.send('Hello, are you good?')})

app.listen(porta, ()=>{ console.log(`Servidor em atividade na porta: http://localhost:${porta}`)})

