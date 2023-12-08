import './App.css';
import Welcome from './Componets/Welcome'
import HeadingDisplay from './Componets/imageTraverse';
import ImageSlider from './Componets/ImagesSliding';
import CheckboxesGroup from './Componets/Checkboxs';
import ImageGallery from './Componets/NatureImages';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import AudioPlayer from './Componets/AudioPlayer';



function App() {




  return (
    <div>
      <ImageSlider />
      <br />
      <Welcome />
      <br />
      <HeadingDisplay/>
      <br />
      <CheckboxesGroup />
      <br />
      <ImageGallery />
      <br/>
          <AudioPlayer/>


    </div>
  );
}

export default App;
