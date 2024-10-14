import React,{ useState ,useEffect} from 'react'
import LanguagePromptModal from './components/LanguagePromptModal/LanguagePromtModal.jsx'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import './i18n'



function App() {
  const [showLanguagePrompt, setShowLanguagePrompt] = useState(false);


  useEffect(() => {
    setShowLanguagePrompt(true);
  }, []);

  const handleCloseModal = () => {
    setShowLanguagePrompt(false);
  };
  return (
    <>
    <div className="flex flex-col min-h-screen">
    {showLanguagePrompt && <LanguagePromptModal onClose={handleCloseModal} />}
        <Header />
        <div className="flex-grow mt-0">
          <Outlet/>
        </div>
        <Footer />
    </div>
    </>
  )
}

export default App
