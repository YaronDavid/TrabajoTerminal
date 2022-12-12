import axios from "axios";

const API_URL="http://localhost:8081/api/v1/"

class GroupServices{

    getByClave(clave){
        return axios.get(API_URL+"grupo/clave/"+clave);
    }
    get(){
        return axios.get(API_URL+"grupos");
    }
    unirse(id_grupo,id_user){
        let user_grupo = {id_grupo, id_user}
        return axios.post(API_URL+"user/grupo",user_grupo);
    }
    getMax(){
        return axios.get(API_URL+"grupo/max");
    }
    crear(grupo){
        console.log(grupo)
        return axios.post(API_URL+"grupo",grupo)
    }
    salir(id_grupo,id_user){
        return axios.delete(API_URL+"user/grupo/"+id_user+"/"+id_grupo);
    }
    eliminar(id_grupo){
        return axios.delete(API_URL+"grupo/"+id_grupo);
    }
}

export default new GroupServices();
