import express, { NextFunction, Request,Response } from 'express'
const app = express()

// Parser
app.use(express.json())
app.use(express.text())

// Routing
const userRouter=express.Router()
app.use("/api/v1/users",userRouter)

const cycleRouter=express.Router()
app.use('/api/v1/cycles',cycleRouter)


// Middleware
const logger =(req:Request,res:Response,next:NextFunction)=>{
  console.log(req.url,req.hostname,req.ip,req.path);
  next()
}

userRouter.post('/',(req,res)=>{
  console.log(req.body);
  res.json({
    message:'User Created',
    success:true,
    data:req.body,
  })
})

cycleRouter.get('/show',(req,res)=>{
  res.json({
    cycleId:'12k3j4j5',
    price:12000,
    model:'Urban',
  })
})

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World Zishan!')
})

app.post('/:id/:semester',logger, (req:Request, res:Response) => {
  let {id,semester}=req.params||{}
  res.send(`Got Param Data ${id},${semester}`)
  console.log(req.params);
})

app.post('/', (req:Request, res:Response) => {
  let {id,semester}=req.query||{}
  res.send(`Got Query Data ${id},${semester}`)
  console.log(req.query);
})


app.post('/poem',logger, (req:Request, res:Response) => {
  console.log(req.body);
  res.send('Poem Send!')
})

app.post('/getData',(req:Request,res:Response)=>{
  console.log(req.body);
  res.send('got Data')
})

export default app;