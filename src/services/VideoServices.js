import axios from "axios";

const API_URL="http://localhost:8081/api/v1/"

class VideoServices{
    async upload(archivo,nombre,id_grupo,imagen){
        const f = new FormData();

        f.append("file",archivo);
        f.append("file",imagen[0]);

        console.log(imagen[0]);
        console.log(archivo);
        return await axios.post(API_URL+"upload/"+nombre+"/"+id_grupo,f);
    }

    async getImages(id_grupo){
        return await axios.get(API_URL+"videos/getByGroup/"+id_grupo);
    }
    async getNames(id_grupo){
        return await axios.get(API_URL+"videos/getAll/"+id_grupo);
    }
}

export default new VideoServices()
