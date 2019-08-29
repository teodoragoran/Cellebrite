import PhoneModel from '../models/Phone';

const Phone = {

    async create(req, res, next) {
        try {
            const phone = await PhoneModel.create(req.body);
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
                res.status(404).send({'message': 'not found'})
            const updatedPhone = await PhoneModel.update(id, req.body);
            res.status(200).send(updatedPhone);
        } catch (error) {
            next(error);
        }
    }, 

    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const phone = await PhoneModel.findOne(id);
            if (!phone)
                res.status(404).send({'message': 'not found'})
            const deletedPhone = await PhoneModel.delete(id);
            res.status(204).send(deletedPhone)
            
        } catch (error) {
            next(error)
        }
    }

}

export default Phone;