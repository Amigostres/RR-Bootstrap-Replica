import './App.css';
import TopBar from './components/TopBar';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import splashImage from './splash.webp'
import StoreListing from './components/StoreListing';

const Splash = styled.div`
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  display: block;
  background-size: contain;
  background-image: url(${splashImage});
  background-color: #deedd6;
  background-position: right;
  position: absolute;
  top: 40px;
  right: 0;
  z-index: -1;
`;


const StyledStoreListing = styled(StoreListing)`
  position: relative;
`

function App() {
  return (
    <>
      <TopBar />
      <StyledStoreListing />
      <Splash />
    </>
  );
}

export default App;
