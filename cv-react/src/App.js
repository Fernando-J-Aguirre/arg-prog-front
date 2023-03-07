import './App.css';
import NavBar from "./components/NavBar";
import PersonalInfo from './components/PersonalInfo';
import Sections from './components/Sections';
import Footer from './components/Footer';
import { UserContextProvider } from './context/UserContext';

function App() {

  return (
    <>
      <UserContextProvider>
        <NavBar />
        <PersonalInfo />
        <Sections />
        <Footer />
      </UserContextProvider>
    </>
  )
}

export default App;
