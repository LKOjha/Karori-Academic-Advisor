import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import BackToTopButton from "./components/home/BackToTopButton";
import WhatsAppButton from "./components/home/WhatsAppButton";


export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
        <BackToTopButton /> 
      <WhatsAppButton/>

    </Layout>

  )
}