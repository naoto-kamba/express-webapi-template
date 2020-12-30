import { check } from 'express-validator'

export const SampleValidator = [check('name').isInt()]
