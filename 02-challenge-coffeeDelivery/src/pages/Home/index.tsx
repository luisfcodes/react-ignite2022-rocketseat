import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HomeContainer } from "./styles";

import Banner from '../../assets/Banner.png';
import { Item } from "./components/Item";
import { CoffeeCard } from "./components/CoffeeCard";
import { useEffect } from "react";

export function Home() {
  // useEffect(() => {
  //   fetch('http://localhost:3030/coffeeList')
  //     .then(data => data.json())
  //     .then(result => console.log(result))
  // }, [])

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
              <Item text="Compra simples e segura">
                <ShoppingCart weight="fill" size={16} />
              </Item>

              <Item text="Embalagem mantém o café intacto">
                <Package weight="fill" size={16} />
              </Item>
            </div>

            <div>
              <Item text="Entrega rápida e rastreada">
                <Timer weight="fill" size={16} />
              </Item>

              <Item text="O café chega fresquinho até você">
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
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ul>
      </section>
    </HomeContainer>
  )
}