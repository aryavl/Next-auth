import express from 'express'
import { postNewUser, postUser } from '../controllers/usersController/usersController.js'
const usersRoute = express()


usersRoute.post('/login',postUser)
usersRoute.post('/register',postNewUser)
export default usersRoute