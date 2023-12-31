import { startServer } from "@api/server"

const mode = process.env.MODE || 'api'
const env = process.env.NODE_ENV || 'development'

if (mode === 'api') {
  startServer()
  console.log(`Running in api mode on ${env}`)
}

if (mode === 'worker') {
  console.log(`Running in worker mode on ${env}`)
}
