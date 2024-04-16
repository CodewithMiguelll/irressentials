import ProductCard from "./ProductCard";
import Catena from "../assets/images/Catena Zapata Malbec Argentino (1).jpg";
import Caymus from "../assets/images/Caymus Vineyards Cabernet Sauvignon.jpg"
import Cartillion from "../assets/images/Château Du Cartillon.jpg"
import Margaux from "../assets/images/Château Margaux 2009.jpg";
import Rothschild from "../assets/images/Château Mouton Rothschild.jpg";
import Sauternes from "../assets/images/Château d'Yquem Sauternes.jpg";
import Pinot from "../assets/images/Cloudy Bay Pinot Noir.jpg"
import Blanc from '../assets/images/Cloudy Bay Sauvignon Blanc.jpg'
import Vintage from '../assets/images/Dom Pérignon Vintage Champagne.jpg'
import Domaine from '../assets/images/Domaine de la Romanée-Conti La Tâche.jpg'
import Grand_Cru from '../assets/images/Domaine de la Romanée-Conti Romanée-Conti Grand Cru.jpg'
import Header from "./Header";
import Footer from "./Footer";

const Wines = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center mb-6 mt-3 text-[#f6f6f6] font-Exo text-3xl lg:text-4xl">
          Wines
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <ProductCard
            product={{
              name: "Catena Zapata Malbec Argentino",
              image: Catena,
              price: 24.99,
            }}
          />

          <ProductCard
            product={{
              name: "Caymus Vineyards Cabernet Sauvignon",
              image: Caymus,
              price: 19.99,
            }}
          />

          <ProductCard
            product={{
              name: "Château Du Cartillon",
              image: Cartillion,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Château Margaux 2009",
              image: Margaux,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Château Mouton Rothschild",
              image: Rothschild,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Château d'Yquem Sauternes 2011",
              image: Sauternes,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Cloudy Bay Pinot Noir",
              image: Pinot,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Cloudy Bay Sauvignon Blanc",
              image: Blanc,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Domaine de la Romanée-Conti La Tâche",
              image: Domaine,
              price: 61.99,
            }}
          />

          <ProductCard
            product={{
              name: "Domaine de la Romanée-Conti Romanée-Conti Grand Cru",
              image: Grand_Cru,
              price: 55.99,
            }}
          />

          <ProductCard
            product={{
              name: "Dom Pérignon Vintage Champagne",
              image: Vintage,
              price: 62.99,
            }}
          />

          <ProductCard
            product={{
              name: "Domaine de la Romanée-Conti La Tâche",
              image: Domaine,
              price: 40.0,
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wines;
