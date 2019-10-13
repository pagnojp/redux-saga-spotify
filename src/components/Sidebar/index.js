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
              <Link to="/">Radio</Link>
            </li>
          </Nav>
          <Nav>
            <li><span>Your Library</span></li>
            <li>
              <Link to="/">Your Daily Mix</Link>
            </li>
            <li>
              <Link to="/">Recent Played</Link>
            </li>
            <li>
              <Link to="/">Musics</Link>
            </li>
            <li>
              <Link to="/">Albums</Link>
            </li>
            <li>
              <Link to="/">Artists</Link>
            </li>
            <li>
              <Link to="/">Stations</Link>
            </li>
            <li>
              <Link to="/">Local Files</Link>
            </li>
            <li>
              <Link to="/">Videos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>Playlists</span>
              { playlists.loading && <Loading /> }
            </li>
            { playlists.data.map((playlist) => (
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
