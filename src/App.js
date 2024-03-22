import './App.css';
import Welcome from './Componets/Welcome'
import HeadingDisplay from './Componets/imageTraverse';
import ImageSlider from './Componets/ImagesSliding';
import CheckboxesGroup from './Componets/Checkboxs';
import ImageGallery from './Componets/NatureImages';

import 'core-js/stable';
import 'regenerator-runtime/runtime';



function App() {




  return (
    <div>
    <h3>Photo-Sharing-App</h3>
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
          


    </div>
  );
}

export default App;
