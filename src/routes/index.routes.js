import { Router } from 'express'

const router = Router()

router
  .get('/', (req, res) => {
    res.render('index')
  })

  .get('/about', (req, res) => {
    res.render('about')
  })

  .get('/edit', (req, res) => {
    res.render('edit')
  })

export default router
