import express from 'express'
import { engine } from 'express-handlebars'
import path from 'path'
import indexRouter from './routes/index.routes'

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.engine(
  '.hbs',
  engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    extname: '.hbs',
    partialsDir: path.join(__dirname, 'views', 'partials')
  })
)
app.set('view engine', 'hbs')

// Routes
app.use(indexRouter)

export default app
