import React, { Component } from 'react'
import RegLog from "../videos/RegLog.mp4"
import ActBorrar from "../videos/ActBorrar.mp4"
import Simulador from "../videos/SImulador.mp4"

import NUevo from "../videos/NUevo.mp4"
const videos = require.context('../images', true);

export default class Reproductor extends Component {
  render() {
    return (
      <div className='body' id="createE">
        <h2>Reproductor</h2><br/>
        <div className='center'>
            <video src={
            sessionStorage.getItem("video")!=null?
              videos("./Video_"+sessionStorage.getItem("video")+".mp4")
            :
            sessionStorage.getItem("videoEj")==0?
            RegLog
            :
              sessionStorage.getItem("videoEj")==1?
                NUevo
              :
                sessionStorage.getItem("videoEj")==2?
                ActBorrar
                :
                Simulador      
          } id="video" controls></video>
        </div>
      </div>
    )
  }
}
