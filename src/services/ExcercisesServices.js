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

    updateExercise(exercise, id){
        return axios.put(API_URL + "/" + id, exercise);
    }

    deleteExercise(id){
        return axios.delete(API_URL+"/"+id);
    }
}

export default new ExercicesServices()
