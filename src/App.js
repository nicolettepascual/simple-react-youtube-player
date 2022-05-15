import './css/App.css';
import YoutubeContainer from "./components/YoutubeContainer";
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
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col size={20}>
            <YoutubeContainer embedId="Q2G53LuEUaU" />
          </Col>
          <Col size={4} style={{ border: '5px solid yellow' }}>Column</Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
