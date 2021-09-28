const getStorage = id => {
    let getDB = localStorage.getItem(id);
    return getDB;
}
const setStorage = (id, data) => {
    let localData = getStorage(id);
    if (localData) {
        const dataInJs = JSON.parse(localData);
        if (dataInJs[data]) {
            dataInJs[data] += 1;
        }
        else {
            dataInJs[data] = 1;
        }
        const dataInJson = JSON.stringify(dataInJs);
        localStorage.setItem('cart', dataInJson);

    }
    else {
        const dataInJs = {};
        dataInJs[data] = 1;
        const dataInJson = JSON.stringify(dataInJs);
        localStorage.setItem('cart', dataInJson);
    }
}

const retriveCart = () => {
    const storage = getStorage('cart');
    return storage ? JSON.parse(storage) : {};
}

export { setStorage, retriveCart }