import simpleEncryptor from 'simple-encryptor';

const key = 'ere218b563eb48c0979ff95e6b';
const encryptor = simpleEncryptor(key);

export function hash(data) {
    let metadata = ''
    try {
        metadata = JSON.parse(data);
        metadata = encryptor.encrypt(metadata);
    } catch(error) {
        return false;
    }
    return metadata;
}

export function unhash(metadata) {
    let data = {};
    try {
        data = encryptor.decrypt(metadata);
    } catch(error) {
        return false;
    }
    return data;
}