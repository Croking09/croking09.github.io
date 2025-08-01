import SmartNavigator from './SmartNavigator.jsx'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <SmartNavigator className="flex flex-col min-h-screen text-white font-inter">
      <Header className="fixed top-8 ml-5 z-50" />
      <Body />
      <Footer />
    </SmartNavigator>
  )
}

export default App
