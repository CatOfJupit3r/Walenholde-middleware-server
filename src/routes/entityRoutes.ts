import { Router } from 'express'
import { createNewEntity } from '../services/DatabaseService'

const router = Router()

router.post('/create', async (req, res) => {
    console.log('Creating entity. Params:', req.body)
    const { descriptor, attributes, customAttributes } = req.body
    const entity_id = await createNewEntity(descriptor, attributes, customAttributes)
    res.json({ result: 'ok', entity_id })
})

export default router
