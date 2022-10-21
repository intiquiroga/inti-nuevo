import logo from './logo.svg';
import './App.css';
import "./componentes/navBar/navBar";
import "./componentes/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <navBar></navBar>
       <itemListContainer></itemListContainer>
       <Routes>
       <Route path="/" element={<ItemListContainer/>}/>
       <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
       <Route path='/item/:id' element={<ItemListContainer/>}/>
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
