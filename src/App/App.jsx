import ScrollNavigator from './ScrollNavigator.jsx'
import Navbar from './Navbar.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <ScrollNavigator className="flex flex-col min-h-screen text-white font-inter">
      <Header className="fixed top-8 ml-5" />
      <Body />
      <Footer />
    </ScrollNavigator>
  )
}

export default App
