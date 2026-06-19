import express from 'express'
import {
  addToCart,
  getCart,
  removeAllFromCart,
  removeFromCart,
} from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/add', authMiddleware, addToCart)
cartRouter.post('/remove', authMiddleware, removeFromCart)
cartRouter.post('/removeAll', authMiddleware, removeAllFromCart)
cartRouter.post('/get', authMiddleware, getCart)

export default cartRouter
