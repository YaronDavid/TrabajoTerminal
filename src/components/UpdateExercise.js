import React, { Component } from 'react';
import ExcercisesServices from '../services/ExcercisesServices';
import "./styles/Update.css"

class UpdateExercise extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id_ejercicio: window.location.pathname[17]+(window.location.pathname[18] ? window.location.pathname[18] : ''),
      X1: '',
      Sign1: '',
      Y1: '',
      Const1: '',
      X2: '',
      Sign2: '',
      Y2: '',
      Const2: '',
      AnswerX: '',
      AnswerY: '',
      Ec1:'',
      Ec2:'',
    }

    
    this.changeEc1Handler = this.changeEc1Handler.bind(this);
    this.changeEc2Handler = this.changeEc2Handler.bind(this);
    this.updateExercise = this.updateExercise.bind(this);

  }

  componentDidMount(){
    ExcercisesServices.getExerciseById(this.state.id_ejercicio).then(res=>{
      let exercise = res.data;
      this.setState({X1: exercise.x1,
        Sign1: exercise.sign1,
        Y1: exercise.y1,
        Const1: exercise.const1,
        X2: exercise.x2,
        Sign2: exercise.sign2,
        Y2: exercise.y2,
        Const2: exercise.const2,
        AnswerX: exercise.answerX,
        AnswerY: exercise.answerY,
        Ec1: exercise.x1+"x"+exercise.sign1+exercise.y1+"y="+exercise.const1,
        Ec2: exercise.x2+"x"+exercise.sign2+exercise.y2+"y="+exercise.const2
      })
    })
  }

  updateExercise = (e) => {

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
        ExcercisesServices.updateExercise(exercise, this.state.id_ejercicio)
        window.location.href = '/exercises';
          alert("Se actualizo correctamente")
       
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
            <h3 className='text-center'>Actualizar ejercicio</h3>
            <div className='card-body'>
              <p className='adv'>Las respuestas de los ejercicios deben estar contenidas entre los puntos (-10 y 10).</p>
              <p className='adv'>Las ecuaciones deben ser de la forma ax+by=c</p>
              <form onSubmit={this.updateExercise}>
                <div className='form-group'>
                  <label>Ecuación 1</label>
                  <input placeholder='Primer ecucación' name='Ec1' className='form-control' value={this.state.Ec1}
                  onChange={this.changeEc1Handler}/>
                </div>
                <div className='form-group'>
                  <label>Ecuación 2</label>
                  <input placeholder='Segunda ecuación' name='Ec2' className='form-control' value={this.state.Ec2}
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

export default UpdateExercise;