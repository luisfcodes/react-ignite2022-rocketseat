import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import coffeeImg from '../../assets/coffees/traditional_express.png'
import { CardContainer } from './styles'

export function CoffeeCard(){
  return (
    <CardContainer>
      <img src={coffeeImg} alt="" />

      <span className='type'>Tradicional</span>

      <span className='name'>Expresso Tradicional</span>

      <span className='description'>O tradicional café feito com água quente e grãos moídos</span>

      <div className='footer'>
        <div>
          <span className='currency'>R$ </span><span className='price'>9,90</span>
        </div>

        <div className='footer-buy'>
          <div>
            <button><Minus weight='bold' size={14}/></button>
            <span>1</span>
            <button><Plus weight='bold'size={14}/></button>
          </div>

          <button className='button-buy'>
            <ShoppingCart weight='fill' size={22}/>
          </button>
        </div>
      </div>
    </CardContainer>
  )
}
