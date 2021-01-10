import './App.css'
import {IMAGES} from './images'
import ImageGrid from './src/components/ImageGrid/ImageGrid'

function App() {
  return (
    <div className="App">
      <ImageGrid data={IMAGES}/>
    </div>
  );
}

export default App;
