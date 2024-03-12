import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { HeaderBar, Links, Item, CartButton } from './styles'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
              <a href="">Novidades</a>
            </Item>
            <Item>
              <a href="">Promoções</a>
            </Item>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {items.length} - produto(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
