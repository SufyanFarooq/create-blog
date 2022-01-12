import NavBar from "./components/NavBar";
import {Box} from '@material-ui/core'
import Home from './components/home/Home'
import DetailView from "./components/detail/DetailView";
import CreateView from "./components/detail/CreateView";
import UpdateView from "./components/detail/UpdateView";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
     <NavBar/>
     <Box style={{marginTop:64}}>
     <Switch>
     <Route exact path='/' component={Home}></Route> 
     <Route exact path="/detail/:id" component={DetailView} ></Route> 
     <Route path="/create" component={CreateView}/>
     <Route path="/update/:id" component={UpdateView}/>
     </Switch>
     </Box>
    </BrowserRouter>
  );
}

export default App;
