import React, { Component } from 'react'
import "./styles/solve.css"
import "./styles/Index2.css"
import ExcercisesServices from '../services/ExcercisesServices'
export default class SolveExercise extends Component {
  
    constructor(props) {
        super(props)
    
        this.state = {
          X1:'',
          Y1:'',
          X2:'',
          Y2:'',
          Sign1:'',
          Sign2:'',
          Const1:'',
          Const2:'',
          id_ejercicio: '',
          AnswerX: '',
          AnswerY: '',
          puntoOX1:-10,
          puntoOX2:-10,
          puntoOY1:-10,
          puntoOY2:-10,
          puntoDX1:-10,
          puntoDX2:-10,
          puntoDY1:-10,
          puntoDY2:-10,
          linea1:false,
          linea2:false,
          X1Max:'',
          X1Min:'',
          Y1Max:'',
          Y1Min:'',
          X2Max:'',
          X2Min:'',
          Y2Max:'',
          Y2Min:'',
          m1:'',
          m2:'',
          err:<></>
        }
        this.canvasRef=React.createRef()
        this.changeXO_ec1=this.changeXO_ec1.bind(this)
        this.changeXD_ec1=this.changeXD_ec1.bind(this)
        this.changeYO_ec1=this.changeYO_ec1.bind(this)
        this.changeYD_ec1=this.changeYD_ec1.bind(this)
        this.changeXO_ec2=this.changeXO_ec2.bind(this)
        this.changeXD_ec2=this.changeXD_ec2.bind(this)
        this.changeYO_ec2=this.changeYO_ec2.bind(this)
        this.changeYD_ec2=this.changeYD_ec2.bind(this)
        
        
    }
    
    componentDidMount(){
        
        ExcercisesServices.getExerciseById(sessionStorage.getItem("idE")).then(res =>{
            let exercise = res.data;
            this.setState({X1:exercise.x1, X2:exercise.x2, Y1:exercise.y1, Y2:exercise.y2,
              Const1:exercise.const1, Const2:exercise.const2, Sign1:exercise.sign1, Sign2:exercise.sign2,
               AnswerX: exercise.answerX,AnswerY: exercise.answerY})
        })
    }

    changeXO_ec1 = (event) =>{
      
      this.setState({puntoOX1:event.target.value})
    }
    changeXD_ec1 = (event) =>{
      
      this.setState({puntoDX1:event.target.value})
    }
    changeYO_ec1 = (event) =>{
      this.setState({puntoOY1:event.target.value})
    }
    changeYD_ec1 = (event) =>{
     
      this.setState({puntoDY1:event.target.value})
    }
    changeXO_ec2 = (event) =>{
      
      this.setState({puntoOX2:event.target.value})
    }
    changeXD_ec2 = (event) =>{
      
      this.setState({puntoDX2:event.target.value})
    }
    changeYO_ec2 = (event) =>{
      
      this.setState({puntoOY2:event.target.value})
    }
    changeYD_ec2 = (event) =>{
    
      this.setState({puntoDY2:event.target.value})
    }
    

    dibuja = (e,line) =>{
      e.preventDefault();
      const ctx = this.canvasRef.current.getContext("2d");
      let punto = 1;
      let X1Max=this.state.X1Max
      let X1Min=this.state.X1Min
      let Y1Max=this.state.Y1Max
      let Y1Min=this.state.Y1Min
      let X2Max=this.state.X2Max
      let X2Min=this.state.X2Min
      let Y2Max=this.state.Y2Max
      let Y2Min=this.state.Y2Min
      let m1=this.state.m1
      let m2=this.state.m2
      let l1 = this.state.linea1;
      let l2 = this.state.linea2;

      if(line==0){//linea azul
          this.setState({err:<></>})
          if(this.state.puntoOX1>=this.state.puntoDX1){
            X1Max=this.state.puntoOX1;
            X1Min=this.state.puntoDX1;
          }else{
            X1Min=this.state.puntoOX1;
            X1Max=this.state.puntoDX1;
          }
          if(this.state.puntoOY1>=this.state.puntoDY1){
            Y1Max=this.state.puntoOY1;
            Y1Min=this.state.puntoDY1;
          }else{
            Y1Min=this.state.puntoOY1;
            Y1Max=this.state.puntoDY1;
          }
          ctx.beginPath();
          ctx.strokeStyle= "blue"
          ctx.arc(150+(13.9*this.state.puntoOX1),76-(6.9*this.state.puntoOY1),punto,0,Math.PI*2,true);
          ctx.arc(150+(13.9*this.state.puntoDX1),76-(6.9*this.state.puntoDY1),punto,0,Math.PI*2,true);
          ctx.stroke();
          this.setState({linea1:true});
          l1=true;
          if(this.state.puntoOX1 == this.state.puntoDX1){
            m1=1;
          }else{
          m1=(this.state.puntoDY1-this.state.puntoOY1)/(this.state.puntoDX1-this.state.puntoOX1);
          }
          this.setState({X1Max:X1Max, X1Min:X1Min, m1:m1, Y1Max,Y1Min})
        
      }else{//linea verde
        if(this.state.puntoOX2 == this.state.puntoDX2){
          this.setState({err:<p className='bg-danger white-text'>Los valores de X en la ecuación 2 deben ser diferentes</p>})
        }
          this.setState({err:<></>})
          if(this.state.puntoOX2>=this.state.puntoDX2){
            X2Max=this.state.puntoOX2;
            X2Min=this.state.puntoDX2;
          }else{
            X2Min=this.state.puntoOX2;
            X2Max=this.state.puntoDX2;
          }
          if(this.state.puntoOY2>=this.state.puntoDY2){
            Y2Max=this.state.puntoOY2;
            Y2Min=this.state.puntoDY2;
          }else{
            Y2Min=this.state.puntoOY2;
            Y2Max=this.state.puntoDY2;
          }
          ctx.beginPath();
          ctx.strokeStyle= "green"
          ctx.arc(150+(13.9*this.state.puntoOX2),76-(6.9*this.state.puntoOY2),punto,0,Math.PI*2,true);
          ctx.arc(150+(13.9*this.state.puntoDX2),76-(6.9*this.state.puntoDY2),punto,0,Math.PI*2,true);
          ctx.stroke();
          this.setState({linea2:true});
          l2=true;
          if(this.state.puntoOX2 == this.state.puntoDX2){
            m2=1
          }else{
            m2=(this.state.puntoDY2-this.state.puntoOY2)/(this.state.puntoDX2-this.state.puntoOX2);
          }
          console.log(m2)
          this.setState({X2Max:X2Max, X2Min:X2Min, m2:m2, Y2Max,Y2Min})
        
      }
      if(l1&&l2){
        let AX = (this.state.puntoDY2-this.state.puntoDY1+(this.state.puntoDX1*m1)-(this.state.puntoDX2*m2))/(m1-m2);
        let AY = this.state.puntoDY1-(this.state.puntoDX1*m1)+(m1*AX);
        if(X1Max>=AX && X2Max>=AX && X1Min<=AX && X2Min<=AX && Y1Max>=AY && Y2Max>=AY && Y1Min<=AY && Y2Min<=AY){
          if(AX==this.state.AnswerX&&this.state.AnswerY==AY){
            this.setState({err:<p className='bg-success'>¡Felicidades, la respuesta ({AX},{AY}) es correcta!</p>})
          }else{
            this.setState({err:<p className='bg-warning'>El punto ({AX},{AY}) es incorrecto, vuelve a intentarlo con otros valores.</p>})
          }
      }else{
        if(m1==m2){
          this.setState({err:<p className='bg-warning'>Las lineas son paralelas o se sobreponen</p>})
        }else{
        this.setState({err:<p className='bg-warning'>Las líneas no se tocan, no es posible saber la respuesta.</p>})
        }
      }
    }
      
    }

    limpia=()=>{
      const can = this.canvasRef;
      var ctx = can.current.getContext("2d");
      ctx.clearRect(0,0,439,441);
      this.setState({linea1:false,linea2:false, err:<></>})
      
    }

    render() {
    return (
      <div className='body' id="body">
        <br/>
        <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='row'>
            <h2>Ecuación 1: {this.state.X1}X {this.state.Sign1} {this.state.Y1}Y = {this.state.Const1}</h2>
              <div className='card redu'>
                <div className='card-body'>
                  <form>
                    <div className='form-group'>
                      <label>X Origen</label> <label className='XdL'>Y Origen</label><br/>
                      <select name="XOec1" onChange={this.changeXO_ec1}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                     
                      <select name="XDec1" className="XdS" onChange={this.changeYO_ec1}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <br/><hr/>
                      </div>
                      <div className='form-group'>
                      <label>X Destino</label> <label className='XdL'>Y Destino</label><br/>
                      <select name="YOec1" onChange={this.changeXD_ec1}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                     
                      <select name="YDec1" className="XdS" onChange={this.changeYD_ec1}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <br/><br/>  
                      </div>
                      <button className="btn" onClick={event=>this.dibuja(event,0)}>Dibujar (x,y)</button>
                  </form>
                </div>
              </div>
          
            <div>
            <h2>Ecuación 2: {this.state.X2}X {this.state.Sign2} {this.state.Y2}Y = {this.state.Const2}</h2>          
            <div className='card redu'>
              <div className='card-body'>
              <form>
                    <div className='form-group'>
                      <label>X Origen</label> <label className='XdL'>Y Origen</label><br/>
                      <select name="XOec2" onChange={this.changeXO_ec2}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                     
                      <select name="XDec2" className="XdS" onChange={this.changeYO_ec2}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <br/><hr/>
                      </div>
                      <div className='form-group'>
                      <label>X Destino</label> <label className='XdL'>Y Destino</label><br/>
                      <select name="YOec2" onChange={this.changeXD_ec2}>
                      <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                     
                      <select name="YDec2" className='XdS' onChange={this.changeYD_ec2}>
                        <option value="-10" selected>-10</option>
                        <option value="-9">-9</option>
                        <option value="-8">-8</option>
                        <option value="-7">-7</option>
                        <option value="-6">-6</option>
                        <option value="-5">-5</option>
                        <option value="-4">-4</option>
                        <option value="-3">-3</option>
                        <option value="-2">-2</option>
                        <option value="-1">-1</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <br/><br/>
                      </div>
                      <button className="btn" onClick={event=>this.dibuja(event,1)}>Dibujar (x,y)</button>
                  </form>
            </div>
          </div>
          </div>
          </div>
          </div>
          <div className='col-md-7'>
          <div id="canvas">
              <canvas ref={this.canvasRef}></canvas><br/>
              <div className='btn btn-orange' onClick={event => this.limpia()}>Limpiar</div>
              <br/><br/>
              {this.state.err}
              </div>
          </div>
        </div>
        <div className='text'>
          Nota: Limpia la gráfica cuando quieras volver a dibujar una línea de la
          misma ecuación.
        </div>
          
          </div>
      </div>
    )
  }
}

/*
import React, { Component } from 'react'
import "./styles/solve.css"
import "./styles/Index2.css"
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
        this.limpia=this.limpia.bind(this)
        
    }
    
    componentDidMount(){
        
        ExcercisesServices.getExerciseById(sessionStorage.getItem("idE")).then(res =>{
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
      let punto = 1;
      const ctx = this.canvasRef.current.getContext("2d");
      
      if(line){//si se dibuja (x2,y2)
        if(this.state.punto2.x!=''){//si ya se definio punto inicial se dibuja
          ctx.beginPath();
          ctx.strokeStyle= "green"
          ctx.arc(150+(13.9*x),76-(6.9*y),punto,0,Math.PI*2,true);
          ctx.moveTo(150+(13.9*this.state.punto2.x),76-(6.9*this.state.punto2.y));//150,76 es el origen
          //la linea de arriba representa el punto inicial
          ctx.lineTo(150+(13.9*x),76-(6.9*y));//vertical +-14 horizontal +-7 por punto
          //la linea de arriba representa el punto final
          ctx.stroke();
          this.setState({punto2:{x,y}})
        }else{//si no hay punto de inicio se inicia
          ctx.beginPath();
          ctx.strokeStyle="green";
          this.setState({punto2:{x,y}})
          ctx.arc(150+(13.9*x),76-(6.9*y),punto,0,Math.PI*2,true);
          ctx.stroke();
        }
      }

      else{//si se dibuja(x,y)
        if(this.state.punto1.x!=''){//si ya se definio punto inicial se dibuja
          ctx.beginPath();
          ctx.strokeStyle= "blue"
          ctx.arc(150+(13.9*x),76-(6.9*y),punto,0,Math.PI*2,true);
          ctx.moveTo(150+(13.9*this.state.punto1.x),76-(6.9*this.state.punto1.y));//150,76 es el origen
          //la linea de arriba representa el punto inicial
          ctx.lineTo(150+(13.9*x),76-(6.9*y));//vertical +-14 horizontal +-7 por punto
          //la linea de arriba representa el punto final
          ctx.stroke();
          this.setState({punto1:{x,y}})
        }else{//si no hay punto de inicio se inicia
          ctx.beginPath();
          ctx.strokeStyle="blue"
          ctx.arc(150+(13.9*x),76-(6.9*y),punto,0,Math.PI*2,true);
          ctx.stroke();
          this.setState({punto1:{x,y}})

        }
      }
    }

    limpia=()=>{
      const can = this.canvasRef;
      var ctx = can.current.getContext("2d");
    ctx.clearRect(0,0,439,441);
      this.setState({punto1:{x:'',y:''},punto2:{x:'',y:''}})
      
    }

    render() {
    return (
      <div className='body' id="body">
        <br/>
        <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h2>Ecuación 1: {this.state.X1}X {this.state.Sign1} {this.state.Y1}Y = {this.state.Const1}</h2>
              <div className='card'>
                <div className='card-body'>
                  <div className='card-title'>Los valores de entrada corresponden a la ecuación 1, son valores
                  númericos que representan los puntos (x,y) donde "X" representa la horizontal y "Y" la vertical.
                  Al ingresar 2 pares de valores se dibujará una linea que conectará los puntos que correspondán a
                  los valoresde entrada, la línea de está ecuación será de color azul
                  </div>
                  <form>
                    <div className='form-group'>
                      <label>X Ecuación 1</label><br/>
                      <input type="text" className='form control' onChange={this.changeX}/><br/>
                      <label>Y Ecuación 1</label><br/>
                      <input type="text" className='form control' onChange={this.changeY}/><br/><br/>
                      <div className='form-group'>
                <button className='btn' onClick={event => this.dibuja(event,this.state.AuxX,this.state.AuxY,0)}>Dibujar (x,y)</button>
                </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
            <h2>Ecuación 2: {this.state.X2}X {this.state.Sign2} {this.state.Y2}Y = {this.state.Const2}</h2>          
            <div className='card'>
              <div className='card-body'>
              <form>
                <div className='form-group'>
                
                </div>
                
                <div className='form-group'>
                <div className='card-title'>Los valores de entrada corresponden a la ecuación 2, son valores
                  númericos que representan los puntos (x,y) donde "X" representa la horizontal y "Y" la vertical.
                  Al ingresar 2 pares de valores se dibujará una linea que conectará los puntos que correspondán a
                  los valoresde entrada, la línea de está ecuación será de color verde
                  </div>
                  <label>X Ecuación 2</label><br/>
                <input type="text" className='form control' onChange={this.changeX2}/><br/>
                <label>Y Ecuación 2</label><br/>
                <input type="text" className='form control' onChange={this.changeY2}/>
                </div><br/>
                <div className='form-group'>
                <button className='btn btn-success' onClick={event => this.dibuja(event,this.state.AuxX2,this.state.AuxY2,1)}>Dibujar (x,y)</button>
                </div>
            </form>
            </div>
          </div>
          </div>
          </div>
          <div id="canvas">
              <canvas ref={this.canvasRef}></canvas><br/>
              <div className='btn btn-orange' onClick={event => this.limpia()}>Limpiar</div>
          </div>
          
          </div>
      </div>
    )
  }
}
*/