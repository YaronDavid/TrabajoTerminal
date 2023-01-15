import React, { Component } from 'react'
import ExcercisesServices from '../services/ExcercisesServices';

class CreateExercise extends Component {
    constructor(props){
        super(props)

        this.state ={
          Ec1:'',
          Ec2:'',
        }

        this.changeEc1Handler = this.changeEc1Handler.bind(this);
        this.changeEc2Handler = this.changeEc2Handler.bind(this);
        this.saveExercise = this.saveExercise.bind(this);

    }
  
    saveExercise = (e) => {
      e.preventDefault();
        let x1='';
        let bX1=false;
        let y1='';
        let bY1=false;
        let By1e=false
        let const1='';
        let sign1='';
        let bSign1=false;
        let x2='';
        let bX2=false;
        let y2='';
        let bY2=false;
        let By2e=false
        let const2='';
        let sign2='';
        let bSign2=false;
      for(let i=0; i<this.state.Ec1.length; i++){
        let actual = this.state.Ec1.charAt(i);
        if(i==0&&(actual=="x"||actual=="X")){
          x1=1;
        }
        if(actual=="("||actual==")"||actual==' '||actual=="["||actual=="]"){}
        else{
          if(actual!='x'&&actual!="X"&&bX1==false){
            x1 = x1+actual;
          }else{
            bX1=true;
            if(bSign1==false){
              if(actual=="+"||actual=="-"){
                sign1=actual;
                bSign1=true;
              }
            }else{
              if(actual!="y"&&actual!="Y"&&bY1==false){
                y1 = y1+actual
                By1e=true;
              }else{
                bY1=true;
                if(By1e==false){
                  y1=1;
                }
                if(actual!="="&&actual!="y"&&actual!="Y"){
                  const1 = const1+actual;
                }
              }
            }
          }
        }
      }
      
      for(let i=0; i<this.state.Ec2.length; i++){
        let actual = this.state.Ec2.charAt(i);
        if(i==0&&(actual=="x"||actual=="X")){
          x2=1;
        }
        if(actual=="("||actual==")"||actual==' '||actual=="["||actual=="]"){}
        else{
          if(actual!='x'&&actual!="X"&&bX2==false){
            x2 = x2+actual;
          }else{
            bX2=true;
            if(bSign2==false){
              if(actual=="+"||actual=="-"){
                sign2=actual;
                bSign2=true;
              }
            }else{
              if(actual!="y"&&actual!="Y"&&bY2==false){
                y2 = y2+actual
                By2e=true;
              }else{
                bY2=true;
                if(By2e==false){
                  y2=1;
                }
                if(actual!="="&&actual!="y"&&actual!="Y"){
                  const2 = const2+actual;
                }
              }
            }
          }
        }
      }

      if(bSign1&&bSign2){
      if(bX1&&bY1&&bX2&&bY2){
        
      let auxY1 = sign1+y1;
      let auxY2 = sign2+y2;

      let AX = ((auxY1*const2)-(auxY2*const1))/((x2*auxY1)-(x1*auxY2));
      let AY = ((const1)-(x1*AX))/auxY1;
      if(AX<=10&&AY<=10){
      let exercise = {x1:x1, sign1: sign1, y1: y1, const1: const1,
        x2: x2, sign2: sign2, y2: y2, const2: const2,
        answerX: AX, answerY: AY}
      
      console.log('ejercicio => ' + JSON.stringify(exercise));

      if(x1%1==0&&y1%1==0&&x2%1==0&&y2%1==0&&AX%1==0&&AY%1==0){
      ExcercisesServices.createExercise(exercise).then(res =>{
        ExcercisesServices.getExerciseMax().then(r=>{
          ExcercisesServices.addExerciseToGroup(r.data.id_ejercicio,sessionStorage.getItem("idGrupo")).then(()=>{
            window.location.href="/exercises"
          })
          
        })
      });
      }else{
        alert("Las respuestas y los coeficientes deben ser enteros");
      }
      }else{
        alert("Los resultados deben estar entre 10 y -10");
      }
    }
    else{
      alert("Las ecuaciones deben estar en la forma aX+bY=c");
    }
    }else{
      alert("Agrege signo + o - al coeficiente Y")
    }
      
     
}

    changeEc1Handler = (event) =>{
      this.setState({Ec1: event.target.value});
    }
    changeEc2Handler = (event) =>{
      this.setState({Ec2: event.target.value});
    }
    
    render() {
    return (
      <div className='body' id="createE">
      <br/>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Nuevo ejercicio</h3>
            <div className='card-body'>
              <p className='adv'>Las respuestas de los ejercicios deben estar contenidas entre los puntos (-10 y 10).</p>
              <p className='adv'>Las ecuaciones deben ser de la forma ax+by=c</p>
              <form onSubmit={this.saveExercise}>
                <div className='form-group'>
                  <label>Ecuación 1</label>
                  <input placeholder='Primer ecucación' name='Ec1' className='form-control' required
                  onChange={this.changeEc1Handler}/>
                </div>
                <div className='form-group'>
                  <label>Ecuación 2</label>
                  <input placeholder='Segunda ecuación' name='Ec2' className='form-control' required
                  onChange={this.changeEc2Handler}/>
                </div><br/>
                <input type="submit" className='btn btn-success' value="Guardar"/>
                <a className='btn btn-orange' href='/exercises' style={{marginLeft: "10px"}}>Cancelar</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default CreateExercise;