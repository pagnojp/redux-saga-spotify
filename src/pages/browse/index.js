import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container, Title, List, Playlist,
} from './styles';


const propTypes = {
  getPlaylistRequest: PropTypes.func.isRequired,
  playlists: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      description: PropTypes.string,
    })),
  }).isRequired,
};

class Browse extends Component {
  componentDidMount() {
    const { getPlaylistRequest } = this.props;
    getPlaylistRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>Browse</Title>
        <List>
          { playlists.data.map((playlist) => (
            <Playlist key={playlist.id} to={`playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>
                {playlist.description}
              </p>
            </Playlist>
          )) }


        </List>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PlaylistsActions, dispatch);

Browse.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
