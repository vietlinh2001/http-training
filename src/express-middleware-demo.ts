import express, { Router, RequestHandler } from 'express'
import morgan from 'morgan'

const app = express()


const loginOnly: RequestHandler = (request, response, next) => {
    if (request.headers.authorization === 'a-very-secret-token') {
        next()
    } else {
        response.status(403).json({
            message: 'Login required'
        })
    }
}

const ageFiltering: RequestHandler = (request, response, next) => {
    const userAge = request.query.age || 1

    if (userAge >= 18) {
        next()
    } else {
        response.status(422).json({
            message: 'Adult only'
        })
    }
}

const router = Router()
app.use(morgan('combined'))
app.use(router)

router.get('/hot-content', ageFiltering, (request, response) => {
    response.json({
        content: 'Yui Hanato'
    })
})


router.get('/not-so-hot-content', (request, response) => {
    response.json({
        content: 'Yuki Amei'
    })
})


app.listen(3001)

