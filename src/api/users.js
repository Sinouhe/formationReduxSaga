import axios from 'axios';

const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 100
        }
    })
};

const createUser = ({firstName, lastName}) => {
    return axios.post('/users', {
        firstName,
        lastName
    })
};

const deleteUser = (userId) => {
    return axios.delete(`/users/${undefined}`);
}

export {getUsers, createUser, deleteUser};