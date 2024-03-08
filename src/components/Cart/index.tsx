import Button from '../Button'

import starWars from '../../assets/starwars.png'

import {
  CartContainer,
  Prices,
  Overlay,
  Sidebar,
  Quantity,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button" />
          </div>
        </CartItem>
        <CartItem>
          <img src={starWars} alt="" />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 150,00</span>
            <button type="button" />
          </div>
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>em até 6x sem juros</span>
      </Prices>
      <Button title="clique aqui para continuar a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
