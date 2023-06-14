import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddnewUser from './screens/AddnewUser';
import bootstrap from  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewUserslist from './screens/newUserlist';
function App() {
  return (
     <div className="App">
    
      <BrowserRouter> 
      <Routes >
      <Route path= ''  element ={<AddnewUser/>}  />
      <Route path= '/user'  element ={<NewUserslist/>}  />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
