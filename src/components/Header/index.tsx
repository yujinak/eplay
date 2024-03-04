import { Link } from 'react-router-dom'

import { HeaderBar, Links, Item, LinkCart } from './styles'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <Item>
            <Link to="/categories">Categorias</Link>
          </Item>
          <Item>
            <a href="">Novidades</a>{' '}
          </Item>
          <Item>
            <a href="">Promoções</a>
          </Item>
        </Links>
      </nav>
    </div>
    <LinkCart href="">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho de compras" />
    </LinkCart>
  </HeaderBar>
)

export default Header
