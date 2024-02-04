const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require('./secrets.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

async function write(collection, id, data) {
    const ref = db.collection(collection).doc(id);
    await ref.set(data);
}

async function readAll(collection) {
    const snapshot = await db.collection(collection).get();
    return snapshot;
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        return doc;
    });
}

async function read(collection, id) {
    const snapshot = await db.collection(collection).get();
    var retValue = null;
    snapshot.forEach((doc) => {
        if(doc.id == id) {
            retValue = {
                id : doc.id,
                data : doc.data()
            }
        }
    })
    console.log("This is the ret value", retValue);
    return retValue;
  
}

async function update(collection, id, data) {
    const ref = db.collection(collection).doc(id)
    await ref.update(data);
}

async function remove(collection, id) {
    const ref = await db.collection(collection).doc(id);
    await ref.delete();
}

module.exports = function () {
    this.db = db,
    this.write = write,
    this.readAll = readAll,
    this.read = read
    this.remove = remove
    this.update = update
}









