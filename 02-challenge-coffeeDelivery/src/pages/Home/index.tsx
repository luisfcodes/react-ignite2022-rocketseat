import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HomeContainer } from "./styles";

import Banner from '../../assets/Banner.png';
import { Item } from "./components/Item";
import { CoffeeCard } from "./components/CoffeeCard";
import { useEffect, useState } from "react";

// "tags": [
//   "Tradicional"
// ],
// "title": "Expresso Tradicional",
// "subtitle": "O tradicional café feito com água quente e grãos moídos",
// "price": 9.90,
// "image": "Express.png"

export interface CoffeeList {
  tags: string[]
  title: string
  subtitle: string
  price: string
  image: string
}

export function Home() {
  const [coffeeList, setCoffeeList] = useState<CoffeeList[]>([])

  useEffect(() => {
    fetch('http://localhost:3030/coffeeList')
      .then(data => data.json())
      .then(result => setCoffeeList(result))
  }, [])

  return (
    <HomeContainer>
      <section className="intro">
        <div className="content">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span className="subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
          </div>

          <div className="content-items">
            <div>
              <Item text="Compra simples e segura" backgroundColor="yellow-dark">
                <ShoppingCart weight="fill" size={16} />
              </Item>

              <Item text="Embalagem mantém o café intacto" backgroundColor="base-text">
                <Package weight="fill" size={16} />
              </Item>
            </div>

            <div>
              <Item text="Entrega rápida e rastreada" backgroundColor="yellow">
                <Timer weight="fill" size={16} />
              </Item>

              <Item text="O café chega fresquinho até você" backgroundColor="purple">
                <Coffee weight="fill" size={16} />
              </Item>
            </div>
          </div>
        </div>

        <img src={Banner} alt="Copo de café, com sementes em volta e com fundo amarelo" />
      </section>

      <section className="coffee-list">
        <h2>Nossos cafés</h2>

        <ul>
          {coffeeList.map(coffee => (
            <CoffeeCard
              key={coffee.title}
              title={coffee.title}
              subtitle={coffee.subtitle}
              tags={coffee.tags}
              price={coffee.price}
              image={coffee.image}
            />
          ))}
        </ul>
      </section>
    </HomeContainer>
  )
}