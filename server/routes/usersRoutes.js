import express from 'express'
import { postUser } from '../controllers/usersController/usersController.js'
const usersRoute = express()


usersRoute.post('/',postUser)
export default usersRoute