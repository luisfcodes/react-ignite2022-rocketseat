import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { HomeContainer } from "./styles";

import Banner from '../../assets/Banner.png';
import { Item } from "./components/Item";
import { CoffeeCard } from "./components/CoffeeCard";
import { useContext} from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Home() {
  const { coffeeList } = useContext(CoffeeContext)

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
              amount={coffee.amount}
            />
          ))}
        </ul>
      </section>
    </HomeContainer>
  )
}