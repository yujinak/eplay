import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/logo.svg'
import cartIcon from '../../assets/carrinho.svg'

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
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.Item>
                <Link
                  to="/categories"
                  title="Clique aqui para acessar a página de categorias"
                >
                  Categorias
                </Link>
              </S.Item>
              <S.Item>
                <HashLink
                  title="Clique aqui para acessar a seção de Em Breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.Item>
              <S.Item>
                <HashLink
                  title="Clique aqui para acessar a seção de Promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.Item>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {items.length} <span> - produto(s)</span>
          <img src={cartIcon} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.Item>
            <Link
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
          </S.Item>
          <S.Item>
            <HashLink
              title="Clique aqui para acessar a seção de Em Breve"
              to="/#coming-soon"
              onClick={() => setIsMenuOpen(false)}
            >
              Em breve
            </HashLink>
          </S.Item>
          <S.Item>
            <HashLink
              title="Clique aqui para acessar a seção de Promoções"
              to="/#on-sale"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </HashLink>
          </S.Item>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
