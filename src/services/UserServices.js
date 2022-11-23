import axios from "axios";

const API_URL="http://localhost:8081/api/v1/"

class UserServices{

    login(contrasena,correo){
        return axios.get(API_URL+'user/'+contrasena+'/'+correo);
    }
    
    getUserById(id){
        return axios.get(API_URL+'users/'+id);
    }

    getGroups(id){
        return axios.get(API_URL+'user/grupos/'+id)
    }
}

export default new UserServices();
