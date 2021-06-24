import './App.css';
import './assets/css/style.css'
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
         <Route path="/" exact >
            <Home />
         </Route>
         <Route path="/post" exact >
            <Post />
         </Route>
         <Route path="/about" exact >
            <About />
         </Route>
      </Switch>
    </>
  );
}

export default App;
