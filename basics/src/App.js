import Home from './Home';
import Contact from './Contact';
import About from './About';
import Greeting from './Greeting';
function App() {
  return (
    <div>
    <h1>hello from ReactJS</h1>
    <Greeting name = {'Akash'}/>
    <Greeting name = {'Ayush'}/>
   {/* <Home name = {'Pooja'} age = {21}/>
   <About />
   <Contact /> */}
    </div>
  );
}

export default App;
