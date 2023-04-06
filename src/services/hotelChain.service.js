import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/hotel_chain');
}

const create = data => {
    return httpClient.post("/hotel_chain", data);
}

const get = id => {
    return httpClient.get(`/hotel_chain/${id}`);
}

const update = data => {
    return httpClient.put('/hotel_chain', data);
}

const remove = id => {
    return httpClient.delete(`/hotel_chain/${id}`);
}
export default { getAll, create, get, update, remove };