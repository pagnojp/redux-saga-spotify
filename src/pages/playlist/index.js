import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import { Container, Header, SongList } from './styles';

import Loading from '../../components/Loading';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getPlaylistDetailsRequest: PropTypes.func.isRequired,
  playlistDetails: PropTypes.shape({
    data: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      songs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        album: PropTypes.string,
      })),
    }),
    loading: PropTypes.bool,
  }).isRequired,
};

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevPros) {
    const { match: { params: { id } } } = this.props;
    if (prevPros.match.params.id !== id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { match: { params: { id } }, getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(id);
  }

  renderDetails = () => {
    const { playlistDetails: { data } } = this.props;
    return (
      <Container>
        <Header>
          <img src={data.thumbnail} alt={data.title} />
          <div>
            <span>Playlist</span>
            <h1>{data.title}</h1>
            { !!data.songs && (
            <p>
              {data.songs.length}
              &nbsp; musics
            </p>
            ) }
            <button type="button">Play</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th> </th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th><img src={ClockIcon} alt="Dration" /></th>
            </tr>
          </thead>
          <tbody>
            { !data.songs ? (
              <tr><td colSpan={5}> This playlist is empty</td></tr>
            ) : (data.songs.map((song) => (
              <tr key={song.id}>
                <td><img src={PlusIcon} alt="Add" /></td>
                <td>{song.title}</td>
                <td>{song.author}</td>
                <td>{song.album}</td>
                <td>4:20</td>
              </tr>
            ))
            ) }
          </tbody>
        </SongList>
      </Container>
    );
  }

  render() {
    const { playlistDetails } = this.props;
    return playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistDetailsActions, dispatch);

Playlist.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
