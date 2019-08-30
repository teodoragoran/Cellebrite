import PhoneModel from '../models/Phone';
import {hash, unhash} from '../util';

const Phone = {

    async create(req, res, next) {
        try {
            let metadata = ''
            if (req.body.proprietary) {
                metadata = hash(req.body.proprietary);
                if (!metadata)
                    return res.status(400).send({'message': 'Unprocessable entity'})
            }    
            const phone = await PhoneModel.create(req.body, metadata);
            res.status(201).send(phone);
        } catch (error) {
            next(error)
        } 
    },

    async getAll(req, res, next) {
        try {
            const phones = await PhoneModel.findAll();
            res.status(200).send(phones);
        } catch (error) {
            next(error);
        }
    },

    async update(req, res, next) {
        try {
            const id = req.params.id;
            const phone = await PhoneModel.findOne(id);
            if (!phone)
                return res.status(404).send({'message': 'Phone not found'})
            let metadata = phone.metadata;
            if (req.body.proprietary) {
                metadata = hash(req.body.proprietary);
                if (!metadata)
                    return res.status(400).send({'message': 'Unprocessable entity'})
            }    
            const updatedPhone = await PhoneModel.update(id, req.body, metadata);
            res.status(200).send(updatedPhone);
        } catch (error) {
            console.log(error)
            next(error);
        }
    }, 

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const phone = await PhoneModel.findOne(id);
            if (!phone)
                res.status(404).send({'message': 'Phone not found'})
            const deletedPhone = await PhoneModel.delete(id);
            res.status(204).send(deletedPhone)
            
        } catch (error) {
            next(error)
        }
    },

    async get(req, res, next) {
        try {
            const id = req.params.id;
            const phone = await PhoneModel.findOne(id);
            if (!phone)
                res.status(404).send({'message': 'Phone not found'})
            res.status(200).send(phone)

        } catch (error) {
            next(error)
        }
    }

}

export default Phone;