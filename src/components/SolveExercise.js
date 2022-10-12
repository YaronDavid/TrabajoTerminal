import React, { Component } from 'react'
import "./styles/solve.css"
import ExcercisesServices from '../services/ExcercisesServices'
export default class SolveExercise extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
          id_ejercicio: '',
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
          AuxX: '',
          AuxY: '',
          AuxX2: '',
          AuxY2: '',
          punto1: {x:'',y:''},
          punto2: {x:'',y:''}
        }
        this.canvasRef=React.createRef()
        this.changeX = this.changeX.bind(this)
        this.changeY = this.changeY.bind(this)
        this.changeX2 = this.changeX2.bind(this)
        this.changeY2 = this.changeY2.bind(this)
        this.dibuja=this.dibuja.bind(this)
        
    }
    
    componentDidMount(){
        
        ExcercisesServices.getExerciseById(sessionStorage.getItem("id")).then(res =>{
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
            AnswerY: exercise.answerY})
        })
    }

    changeX = (event) =>{
      this.setState({AuxX: event.target.value});
    }
    changeY = (event) =>{
      this.setState({AuxY: event.target.value});
    }
    changeX2 = (event) =>{
      this.setState({AuxX2: event.target.value});
    }
    changeY2 = (event) =>{
      this.setState({AuxY2: event.target.value});
    }

    dibuja = (e,x,y,line) =>{
      e.preventDefault();
      const ctx = this.canvasRef.current.getContext("2d");
      
      if(line){//si se dibuja (x2,y2)
        if(this.state.punto2.x!=''){//si ya se definio punto inicial se dibuja
          ctx.beginPath();
          ctx.strokeStyle= "green"
          ctx.moveTo(150+(13.9*this.state.punto2.x),76-(6.9*this.state.punto2.y));//150,76 es el origen
          //la linea de arriba representa el punto inicial
          ctx.lineTo(150+(13.9*x),76-(6.9*y));//vertical +-14 horizontal +-7 por punto
          //la linea de arriba representa el punto final
          ctx.stroke();
          this.state.punto2.x=x;
          this.state.punto2.y=y;
        }else{//si no hay punto de inicio se inicia
          this.state.punto2.x=x;
          this.state.punto2.y=y;
        }
      }

      else{//si se dibuja(x,y)
        if(this.state.punto1.x!=''){//si ya se definio punto inicial se dibuja
          ctx.beginPath();
          ctx.strokeStyle= "blue"
          ctx.moveTo(150+(13.9*this.state.punto1.x),76-(6.9*this.state.punto1.y));//150,76 es el origen
          //la linea de arriba representa el punto inicial
          ctx.lineTo(150+(13.9*x),76-(6.9*y));//vertical +-14 horizontal +-7 por punto
          //la linea de arriba representa el punto final
          ctx.stroke();
          this.state.punto1.x=x;
          this.state.punto1.y=y;
        }else{//si no hay punto de inicio se inicia
          this.state.punto1.x=x;
          this.state.punto1.y=y;
        }
      }
    }

    render() {
    return (
      <>
        <br/>
        <div className='container'>
          <div className='row center'>
            <h2>{this.state.X1}X {this.state.Sign1} {this.state.Y1}Y = {this.state.Const1}</h2>
            <h2>{this.state.X2}X {this.state.Sign2} {this.state.Y2}Y = {this.state.Const2}</h2> 
          </div>
          <div className='row'>
            <div className='card col-md-4 '>
              <div className='card-body'>
              <form>
                <div className='form-group'>
                <label>Ingrese el valor de X</label>
                <input type="text" className='form control' onChange={this.changeX} placeholder='Valor de X (horizontal)'/>
                <label>Ingrese el valor de Y</label>
                <input type="text" className='form control' onChange={this.changeY} placeholder='Valor de Y (vertical)'/>
                </div>
                <div className='form-group'>
                <button className='btn btn-success' onClick={event => this.dibuja(event,this.state.AuxX,this.state.AuxY,0)}>Dibujar (x,y)</button>
                </div>
                <div className='form-group'>
                <label>Ingrese el valor de X2</label>
                <input type="text" className='form control' onChange={this.changeX2} placeholder='Valor de X2 (horizontal)'/>
                <label>Ingrese el valor de Y2</label>
                <input type="text" className='form control' onChange={this.changeY2} placeholder='Valor de Y2 (vertical)'/>
                </div>
                <div className='form-group'>
                <button className='btn btn-success' onClick={event => this.dibuja(event,this.state.AuxX2,this.state.AuxY2,1)}>Dibujar (x,y)</button>
                </div>
            </form>
          </div>
          </div>
          <div id="canvas">
              <canvas ref={this.canvasRef}></canvas>
          </div>
          </div>
          </div>
      </>
    )
  }
}
