import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const propTypes = {
  getPlaylistDetailsRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { match: { params: { id } } } = this.props;
    const { getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(id);
  }

  render() {
    return (
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
  }
}

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistDetailsActions, dispatch);

Playlist.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
