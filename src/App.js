import './App.css';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import UploadComennt from './UploadComment';
import ImageUpload from './ImageUpload';
import Chat from './Chat';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/UploadImg" element={<ImageUpload/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/comment" element={<UploadComennt/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
