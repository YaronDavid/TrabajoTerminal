import axios from "axios";

const API_URL="http://localhost:8081/api/v1/ejercicios"

class ExercicesServices{

    getExercises(){
        return axios.get(API_URL)
    }
    createExercise(exercise){
        return axios.post(API_URL, exercise);
    }

    getExerciseById(id){
        return axios.get(API_URL+'/'+id)
    }

    async updateExercise(exercise, id){
        return await axios.put(API_URL + "/" + id, exercise);
    }

    deleteExercise(id){
        return axios.delete(API_URL+"/"+id);
    }
    getExerciseByGroup(id_grupo){
        return axios.get(API_URL+"/grupo/"+id_grupo)
    }
    getExerciseMax(){
        return axios.get(API_URL+"/max");
    }
    addExerciseToGroup(id_ejercicio,id_grupo){
        let ejercicio_grupos={id_ejercicio,id_grupo}
        console.log(id_ejercicio+"..."+id_grupo)
        return axios.post(API_URL+"/grupos",ejercicio_grupos);
    }
    deleteExerciseToGroup(id_ejercicio,id_grupo){
        return axios.delete(API_URL+"/grupos/"+id_ejercicio+"/"+id_grupo);
    }
}

export default new ExercicesServices()
