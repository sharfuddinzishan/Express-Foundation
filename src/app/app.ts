import express, { Request,Response } from 'express'
const app = express()

// Parser
app.use(express.json())
app.use(express.text())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World Zishan!')
})

app.post('/:id/:semester', (req:Request, res:Response) => {
  let {id,semester}=req.params||{}
  res.send(`Got Param Data ${id},${semester}`)
  console.log(req.params);
})

app.post('/', (req:Request, res:Response) => {
  let {id,semester}=req.query||{}
  res.send(`Got Query Data ${id},${semester}`)
  console.log(req.query);
})


app.post('/poem', (req:Request, res:Response) => {
  console.log(req.body);
  res.send('Poem Send!')
})

app.post('/getData',(req:Request,res:Response)=>{
  console.log(req.body);
  res.send('got Data')
})

export default app;