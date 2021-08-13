import axios from 'axios';

const REST_API_URL_GET ='http://localhost:3700/getNotes';
const REST_API_URL_POST ='http://localhost:3700/addNote';
const REST_API_URL_GET1 ='http://localhost:3700/getNoteById';
const REST_API_URL_PUT ='http://localhost:3700/editNote';
const REST_API_URL_DELETE ='http://localhost:3700/deleteNote';


class UserService {
    getNotes(){
       return axios.get(REST_API_URL_GET);
    }
    createNote(myNote){
        return axios.post(REST_API_URL_POST, myNote);
    }
    getNoteById(title){
        return axios.get(REST_API_URL_GET1 + '/' + title)
    }
    updateNote(myNote){
        return axios.put(REST_API_URL_PUT, myNote)
    }
    deleteNote(title){
        return axios.delete(REST_API_URL_DELETE +'/' +title)
    }
}
export default new UserService();