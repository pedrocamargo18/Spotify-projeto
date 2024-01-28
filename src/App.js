import './App.css';
import Header from './Componentes/Header/Header';
import Sidebar from './Componentes/Sidebar/Sidebar';
import Footer from './Componentes/Footer/Footer';
import Main from './Componentes/Main/Main';

function App() {
  return (
    <div>
      <Sidebar />
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;