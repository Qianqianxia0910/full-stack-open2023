import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/persons',
});

const getAll = async () => {
    const response = await api.get('/');
    return response.data;
}
export default { getAll };  

