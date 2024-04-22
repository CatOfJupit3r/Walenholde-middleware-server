import { Request, Response } from 'express'
import { BadRequest, MethodNotAllowed } from '../models/ErrorModels'
import EntityEditorService from '../services/EntityEditorService'

class EntityEditorController {
    async createEntity(req: Request, res: Response) {
        console.log('Creating entity. Params:', req.body)
        const { descriptor, attributes, customAttributes } = req.body
        if (!descriptor || !attributes || !customAttributes) {
            throw new BadRequest(
                `Missing parameters: ${!descriptor ? 'descriptor' : ''} ${!attributes ? 'attributes' : ''} ${!customAttributes ? 'customAttributes' : ''}`
            )
        }
        const entity_id = await EntityEditorService.createNewEntity(descriptor, attributes, customAttributes)
        res.json({ result: 'ok', entity_id })
    }

    async changeAttribute(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async addWeapon(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async addSpell(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async addItem(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async removeWeapon(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async removeSpell(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async removeItem(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }

    async getEntityInfo(req: Request, res: Response) {
        throw new MethodNotAllowed()
    }
}

export default new EntityEditorController()