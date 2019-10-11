import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';
import AddPlaylistIcon from '../../assets/images/add_playlist.svg';
import Loading from '../Loading';

const propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })),
    loading: PropTypes.bool,
  }).isRequired,
};

class Sidebar extends Component {
  componentDidMount() {
    const { getPlaylistRequest } = this.props;
    getPlaylistRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Browse</Link>
            </li>
            <li>
              <a href="/">Radio</a>
            </li>
          </Nav>
          <Nav>
            <li><span>Your Library</span></li>
            <li>
              <a href="/">Your Daily Mix</a>
            </li>
            <li>
              <a href="/">Recent Played</a>
            </li>
            <li>
              <a href="/">Musics</a>
            </li>
            <li>
              <a href="/">Albums</a>
            </li>
            <li>
              <a href="/">Artists</a>
            </li>
            <li>
              <a href="/">Stations</a>
            </li>
            <li>
              <a href="/">Local Files</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlists</span>
              { playlists.loading && <Loading /> }
            </li>
            {playlists.data.map((playlist) => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Add Playlist" />
          New Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

Sidebar.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
