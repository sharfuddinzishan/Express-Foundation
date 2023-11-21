import app from './app'
import {Server} from 'http'

let server:Server
const port = 4000

async function bootstrap(){
  server=app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}
