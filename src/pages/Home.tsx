import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { MiniCard } from '../components/MiniCard';
import { TitleDescription } from '../components/TitleDescription';

import styles from './home.module.scss';

export function Home() {
  return (
    <main>
      <section className={styles.sectionHeader}>
        <Header />
      </section>
      <section className={styles.sectionSearch}>
        <div className={styles.searchContainer}>
          <TitleDescription
            title="Tudo para facilitar o seu dia a dia"
            description="O que você precisa está aqui. Peça e receba onde estiver."
          />
          <form className={styles.addressSearchForm}>
            <div className={styles.addressSearch}>
              <img
                src="assets/images/marker.svg"
                alt=""
                className={styles.markerSearch}
              />
              <input
                className={styles.addressSearchInput}
                placeholder="Endereço de entrega e número"
              />
            </div>
            <Button title="Buscar" />
          </form>
        </div>
      </section>
      <section className={styles.sectionCategories}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesMain}>
            <Card
              title="Restaurante"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/restaurant.png"
              buttonTitle="Ver opções"
              bgColor="#ea1d2c"
              buttonColor="#c2121f"
            />
            <Card
              title="Mercado"
              src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/market.png"
              buttonTitle="Buscar lojas"
              bgColor="#b6d048"
              buttonColor="#9eb53e"
            />
          </div>
        </div>
        <div className={styles.sectionMiniCategories}>
          <MiniCard
            title="Bebidas"
            src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/drinks.png"
            color="#f6d553"
          />
          <MiniCard
            title="Farmácia"
            src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/pharmacy.png"
            color="#F9879C"
          />
          <MiniCard
            title="Express"
            src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/express.png"
            color="#ea1d2c"
          />
          <MiniCard
            title="Pet shop"
            src="https://static-images.ifood.com.br/image/upload/f_auto/webapp/landingV2/petshop.png"
            color="#8C60C5"
          />
        </div>
      </section>
    </main>
  );
}
