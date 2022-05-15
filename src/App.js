import React, { useState } from "react";
import './css/App.css';

import YoutubeContainer from "./components/YoutubeContainer";
import InteractiveColumn from "./components/InteractiveColumn";

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

function App() {
  const [youtubeVidId, setYoutubeVideoId] = useState('q_rxsPa_YCk')

  const onButtonPress = (e) => {
    console.log(e)
    setYoutubeVideoId(e)
  }

  return (
    <div className="App">
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
