import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import { CardContainer } from './styles'

interface CoffeeCardProps {
  imgUrl: string
  name: string
  attributes: string[]
  description: string
}

export function CoffeeCard({ name, attributes, description, imgUrl }: CoffeeCardProps){
  return (
    <CardContainer>
      <img src={`src/assets/coffees/${imgUrl}`} alt="" />

      <div className='type'>
        {attributes.map(attribute => (
          <span key={attribute}>{attribute}</span>
        ))}
      </div>

      <span className='name'>{name}</span>

      <span className='description'>{description}</span>

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
