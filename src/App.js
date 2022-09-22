import styled from 'styled-components'
import BackgroundImage from './components/BackgroundImage';
import Forecast from './components/Forecast';
import LocalWeather from './components/LocalWeather';
import OtherCities from './components/OtherCities';
import { useState } from 'react';


const Wrapper = styled(BackgroundImage)`  //基于background image
  //background-color: red;
  min-height: 100vh;
  min-width: 100vw;             //fully background
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Container = styled.div`
  overflow: auto;
  background-color: white;
  
  margin: 60x;
  background: #fff;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
`;

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 36px 0;
`
const VerticalDivider = styled.div`
  width: 3px;
  background-color: rgba(0,0,0,0.1);
`

const App = () => {
  const [cityId, setCityId] = useState('2158177')

  return(
  <Wrapper src="https://wallpaperaccess.com/full/2629319.png">
    <Container>
      <LocalWeather cityId={cityId}/>
      <Layout>
        <OtherCities  currentCityId={cityId} setCityId={setCityId}/>
        <VerticalDivider/>
        <Forecast cityId={cityId}/>
      </Layout>
    </Container>
  </Wrapper>
  )
}

export default App;