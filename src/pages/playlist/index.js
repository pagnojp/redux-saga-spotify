import React from 'react';
import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

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
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Title</th>
        <th>Artist</th>
        <th>Album</th>
        <th><img src={ClockIcon} alt="Dration" /></th>
      </thead>
      <tbody>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td><img src={PlusIcon} alt="Add" /></td>
          <td>Pearl Jam</td>
          <td>Nirvana</td>
          <td>Foo Fighters</td>
          <td>4:22</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
