import './App.css';
import Hero from '../Hero/Hero';
import Slider from '../Slider/Slider';

import banff from '../../assets/banff_canada.jpg';
import barcelona from '../../assets/barcelona.jpg';
import cappadocia from '../../assets/cappadocia.jpg';
import Navbar from '../Navbar/Navbar';

const navbarLinks = [
  { url: '#', title: 'Home'},
  { url: '#', title: 'Trips'},
  { url: '#', title: 'Rewards'},
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={banff} />
      <Slider imageSrc={barcelona} title={"Be an explorer!"} subtitle={"Visit beautiful Barcelona!"} isFlipped={false} />
      <Slider imageSrc={cappadocia} title={"Memories for a lifetime!"} subtitle={"Your dream vacation is on a few clicks away."} isFlipped={true} />
    </div>
  );
}

export default App;
