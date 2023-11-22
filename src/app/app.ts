import express, { NextFunction, Request,Response, request, response } from 'express'
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

app.get('/info',logger,(req:Request,res:Response,next:NextFunction)=>{
  try{
    res.send(data)
  }
  catch(error){
    next(error)
  }
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

// Routing handler
const handleRouting=(req:Request,res:Response)=>{
  res.status(400).json({
    message:'Invalid Address',
    successfull:false
  })
}
app.all('**',handleRouting)

// Global Error Handle
let handleError=(error:any,req:Request,res:Response,next:NextFunction)=>{
  console.log(error);
  res.status(400).json({
    message:'No Response Found',
    successful:false,
    data:error
  })
}
app.use(handleError)

export default app;