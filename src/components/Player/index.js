import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  Container, Current, Progress, Controls, Volume, Time, ProgressSlider,
} from './styles';
import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const propTypes = {
  player: PropTypes.shape({
    currentSong: PropTypes.shape({
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      file: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
};

const Player = ({ player }) => (
  <Container>
    { !!player.currentSong && (
      <Sound
        url={player.currentSong.file}
        playStatus={player.status}
      />
    ) }
    <Current>
      { !!player.currentSong && (
        <>
          <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
          <div>
            <span>{player.currentSong.title}</span>
            <small>{player.currentSong.author}</small>
          </div>
        </>
      ) }

    </Current>
    <Progress>
      <Controls>
        <button type="button">
          <img src={ShuffleIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={BackwardIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={PlayIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={PauseIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={ForwardIcon} alt="Shuffle" />
        </button>
        <button type="button">
          <img src={RepeatIcon} alt="Shuffle" />
        </button>
      </Controls>
      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: '#404040', borderRadius: 10 }}
            trackStyle={{ background: '#1ed760' }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>4:31</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="Volume" />
      <Slider
        railStyle={{ background: '#404040', borderRadius: 10 }}
        trackStyle={{ background: '#fff' }}
        // handleStyle={{ display: 'none' }}
        // value={75}
        min={0}
        max={100}
        defaultValue={75}
      />
    </Volume>
  </Container>
);

const mapStateToProps = (state) => ({
  player: state.player,
});

Player.propTypes = propTypes;

export default connect(mapStateToProps)(Player);
