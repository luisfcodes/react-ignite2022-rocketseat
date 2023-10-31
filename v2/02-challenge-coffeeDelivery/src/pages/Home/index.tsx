import { HomeContent, HomeHeader } from "../styles/Home/styles";

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import bannerImg from '../../assets/banner.png';

export function Home(){
  return (
    <>
      <HomeHeader>
        <div className="content">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </div>

          <div className="benefits">
            <div className="benefits-cart">
              <div>
                <ShoppingCart weight="fill" size={16} />
              </div>
              <span>Compra simples e segura</span>
            </div>

            <div className="benefits-box">
              <div>
                <Package weight="fill" size={16} />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className="benefits-time">
              <div>
                <Timer weight="fill" size={16} />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className="benefits-coffee">
              <div>
                <Coffee weight="fill" size={16} />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        <img src={bannerImg} alt="" />
      </HomeHeader>

      <HomeContent>

      </HomeContent>
    </>
  )
}
