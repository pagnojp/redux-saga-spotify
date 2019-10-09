import React from 'react';
import { Container, Header } from './styles';

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://i.scdn.co/image/55cc31d3efa495d05e034146331553db0a747cf5" alt="Playlist" />
      <div>
        <span>Playlist</span>
        <h1>Rock and Roll Hall of Fame</h1>
        <p>15 musics</p>
        <button type="button">Play</button>
      </div>
    </Header>
  </Container>
);

export default Playlist;
