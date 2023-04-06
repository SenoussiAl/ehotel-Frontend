import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/room');
}

const create = data => {
    return httpClient.post("/room", data);
}

const get = id => {
    return httpClient.get(`/room/${id}`);
}

const update = data => {
    return httpClient.put('/room', data);
}

const remove = id => {
    return httpClient.delete(`/room/${id}`);
}
export default { getAll, create, get, update, remove };