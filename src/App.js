import './App.css';
import Child from './Components/Child';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  var imageAl = "https://pbs.twimg.com/media/F44dtJ9XkAA027z.jpg:large"
  var name = "Bacola"
  var description = "Bradley Barcola, né le 2 septembre 2002 à Lyon, est un footballeur français, qui évolue au poste d'ailier gauche au Paris Saint-Germain."
  return (
    <div>
       <Child imageAl={imageAl} name={name} description={description}/>
    </div>
  );
}

export default App;
