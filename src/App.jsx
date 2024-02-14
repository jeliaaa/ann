import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';
import './app.scss'
import Login from './pages/login/Login';
import Time from './pages/time/Time';
import Gallery from './pages/gallery/Gallery';
import Story from './pages/story/Story';
import Message from './pages/message/Message';
function App() {
  return (
    <div className='app'>
      <header><Link to={'/'} style={{textDecoration:'none'}}><h1>Anuki</h1></Link></header>
      <div className='routes'>
        <Routes>
          <Route index path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/time' element={<Time />} />
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/story' element={<Story />}/>
          <Route path='/message' element={<Message />}/>
        </Routes>
      </div>
      <footer>ახლა ამას რო ვაკეთებ ჩემ გოგოს სიცხე აქვს, ანუკი მიყვარხარ ძალიან, გახსოვდეს ყოველთვის. ეს მაიმუნობაც მაგის ნიშანი იქნება სულ. :*</footer>
    </div>
  );
}

export default App;
