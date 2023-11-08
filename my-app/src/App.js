import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HOME from './pages/Home';
function App() {
  return (
    <BrowserRouter>
       <div >
       < Routes >
          <Route path='/' element={<HOME/>}/>
       </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
