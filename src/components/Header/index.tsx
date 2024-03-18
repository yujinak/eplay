import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  HeaderBar,
  Links,
  Item,
  CartButton,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
          {items.length} <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
