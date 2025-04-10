import React, { Component } from 'react';
import '../css/videos.css';
import '../css/estilos.css';
import Navegacion from './Navegacion';

export default class Videos extends Component {
  render() {
    function Listadevideos() {
        const videos = [];
        for (let i = 1; i < 13; i++) {
            videos.push(
            <div key={i}>
                <video src={`/media/videos/video ${i}.mp4`} controls /><br/>
            </div>
        );
    }
    return videos
}
    return (
      <div>
        <h1>Claudia Vitraux</h1>
        <Navegacion />
        <main>
        <h1>Videos</h1>
        <Listadevideos />
        </main>
      </div>
    );
  }
}
