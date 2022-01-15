import Dexie from 'dexie';

const db = new Dexie("Newcart");

db.version(1).stores({
    cart: '++id, price, title, category', // Primary key and indexed props
});

export default db;