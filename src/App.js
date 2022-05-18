import React, { useState } from "react";
import './css/App.css';

import YoutubeContainer from "./components/YoutubeContainer";
import InteractiveColumn from "./components/InteractiveColumn";
import { FaWindowMaximize, FaWindowMinimize } from "react-icons/fa";

import styled from 'styled-components';

const Grid = styled.div`
  padding: 20px;
`

const Row = styled.div`
    display: flex;
`

const Col = styled.div`
    flex: ${(props) => props.size}
`

const ScreenButton = styled.div`
    padding: 10px 20px;
    color: white;
`

function App() {
  const [youtubeVidId, setYoutubeVideoId] = useState('Q2G53LuEUaU')
  const [isOnFullscreen, setFullScreen] = useState(false)

  const onButtonPress = (e) => {
    setYoutubeVideoId(e)
  }

  const toggleFullSceen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    }
  }

  return (
    <div className="App">
      <ScreenButton onClick={() => toggleFullSceen()}>
        {isOnFullscreen ? <FaWindowMinimize /> : <FaWindowMaximize />}
      </ScreenButton>
      <Grid>
        <Row>
          <Col size={20} style={{ padding: 20, backgroundColor: '#8ea9c4' }}>
            <YoutubeContainer embedId={youtubeVidId} />
          </Col>
          <Col size={4} style={{ display: 'flex', alignItems: 'end' }}>
            <InteractiveColumn onButtonPress={onButtonPress} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
