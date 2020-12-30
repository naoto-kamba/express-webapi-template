import express from 'express'
import { SampleController } from '../controllers/SampleController'
import { SampleValidator } from '../validators/SampleValidator'

const router = express.Router()

router.get('/sample', SampleController.index)
router.post('/sample', SampleValidator, SampleController.store)

export { router as routerRoot }
