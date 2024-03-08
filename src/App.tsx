import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Rotas from './routes'
import { store } from './store'

import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCSS />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
