import Header from "./Header";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Tom_Ford from "../assets/images/Tom Ford Black Orchid.jpg"
import Hugo_Scent from '../assets/images/Hugo Boss The Scent.jpg'
import Daisy from '../assets/images/Marc Jacobs Daisy.jpg'
import Chanel_5 from "../assets/images/Chanel N°5.jpg";
import Prada_Candy from "../assets/images/Prada Candy.jpg"
import YSL from '../assets/images/Yves Saint Laurent Libre.jpg'
import Versace from '../assets/images/Versace Bright Crystal.jpg'
import Gioia from '../assets/images/Giorgio Armani Acqua di Gioia.jpg'
import Gio from '../assets/images/Giorgio Armani Acqua di Giò.jpg'
import Dior from '../assets/images/Dior J_adore.jpg'
import D_G from '../assets/images/Dolce and Gabbana Light Blue.jpg'
import Bloom from '../assets/images/Gucci Bloom.jpg'

const Perfumes = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center mb-6 mt-3 text-[#f6f6f6] font-Exo text-3xl lg:text-4xl">
          Perfumes
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          <ProductCard
            product={{
              name: "Tom Ford Black Orchid",
              image: Tom_Ford,
              price: 24.99,
            }}
          />

          <ProductCard
            product={{
              name: "Hugo Boss The Scent",
              image: Hugo_Scent,
              price: 19.99,
            }}
          />

          <ProductCard
            product={{
              name: "Marc Jacobs Daisy",
              image: Daisy,
              price: 20.79,
            }}
          />

          <ProductCard
            product={{
              name: "Yves Saint Laurent Libre",
              image: YSL,
              price: 150.99,
            }}
          />

          <ProductCard
            product={{
              name: "Chanel N°5",
              image: Chanel_5,
              price: 34.99,
            }}
          />

          <ProductCard
            product={{
              name: "Prada Candy",
              image: Prada_Candy,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Versace Bright Crystal",
              image: Versace,
              price: 41.99,
            }}
          />

          <ProductCard
            product={{
              name: "Giorgio Armani Acqua di Gioia",
              image: Gioia,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Dior J'adore",
              image: Dior,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Dolce and Gabbana Light Blue",
              image: D_G,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Gucci Bloom",
              image: Bloom,
              price: 21.99,
            }}
          />

          <ProductCard
            product={{
              name: "Giorgio Armani Acqua di Giò",
              image: Gio,
              price: 55.99,
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Perfumes;
