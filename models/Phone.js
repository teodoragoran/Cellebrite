import moment from 'moment';
import uuid from 'uuid';

class Phone {

    constructor() {
        this.phones = [];
    }

    create(data, metadata) {
        const phone = {
            id: uuid.v4(), 
            type: data.type || '',
            serial: data.serial || '',
            color: data.color || '',
            metadata: metadata, 
            created: moment.now(),
            updated: moment.now()
        };

        this.phones.push(phone);
        return phone;
    }

    findOne(id) {
        return this.phones.find(phone => phone.id === id);
    }

    findAll() {
        return this.phones;
    }

    update(id, data, metadata) {
        const phone = this.findOne(id);
        const index = this.phones.indexOf(phone);

        this.phones[index].type = data.type || phone.type;
        this.phones[index].serial = data.serial || phone.serial;
        this.phones[index].color = data.color || phone.color;
        this.phones[index].metadata = metadata;
        this.phones[index].updated = moment.now();

        return this.phones[index];
    }

    delete(id) {
        const phone = this.findOne(id);
        const index = this.phones.indexOf(phone);
        this.phones.splice(index, 1);
        return {};
    }

}

export default new Phone();