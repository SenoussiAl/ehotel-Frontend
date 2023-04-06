import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/hotel');
}

const create = data => {
    return httpClient.post("/hotel", data);
}

const get = id => {
    return httpClient.get(`/hotel/${id}`);
}

const update = data => {
    return httpClient.put('/hotel', data);
}

const remove = id => {
    return httpClient.delete(`/hotel/${id}`);
}
export default { getAll, create, get, update, remove };