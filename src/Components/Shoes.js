import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Adidas from '../assets/images/Adidas Supernova Stride.jpg';
import Timberland from '../assets/images/Timberland 6-inch Premium Waterproof Boot.jpg';
import Converse from '../assets/images/Converse Chuck Taylor.jpg';
import Air_Max from '../assets/images/Nike Air Max 270.jpg';
import Dr_Martens from "../assets/images/Dr. Martens 1460 Smooth Leather Boot.jpg";
import Kenmoor from '../assets/images/Florsheim Imperial Kenmoor.jpg';
import New_Balance from "../assets/images/New Balance 990v5 Grey.jpg";
import Nike_AJ1 from "../assets/images/Nike Air Jordan 1 Retro High (Black and White).jpg";
import Puma from '../assets/images/PUMA Suede Classic.jpg';
import Reebok from '../assets/images/Reebok Classic Leather.jpg';
import Vans from '../assets/images/Vans Old Skool.jpg';
import Johnston from '../assets/images/Johnston & Murphy Melton.jpg'

const Shoes = () => {
    return (
      <div>
        <Header />
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center mb-6 mt-3 text-[#f6f6f6] font-Exo text-3xl lg:text-4xl">
            Shoes
          </h1>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            <ProductCard
              product={{
                name: "Adidas Supernova Stride",
                image: Adidas,
                price: 50.99,
              }}
            />

            <ProductCard
              product={{
                name: "Timberland 6-inch Premium Waterproof Boot",
                image: Timberland,
                price: 47.89,
              }}
            />

            <ProductCard
              product={{
                name: "Converse Chuck Taylor",
                image: Converse,
                price: 55.58,
              }}
            />

            <ProductCard
              product={{
                name: "Nike Air Max 270",
                image: Air_Max,
                price: 100.99,
              }}
            />

            <ProductCard
              product={{
                name: "Dr. Martens 1460 Smooth Leather Boot",
                image: Dr_Martens,
                price: 69.99,
              }}
            />

            <ProductCard
              product={{
                name: "Prada Florsheim Imperial Kenmoor",
                image: Kenmoor,
                price: 100.54,
              }}
            />

            <ProductCard
              product={{
                name: "New Balance 990v5 Grey",
                image: New_Balance,
                price: 77.99,
              }}
            />

            <ProductCard
              product={{
                name: "Nike Air Jordan 1 Retro High (Black and White)",
                image: Nike_AJ1,
                price: 63.49,
              }}
            />

            <ProductCard
              product={{
                name: "PUMA Suede Classic",
                image: Puma,
                price: 95.99,
              }}
            />

            <ProductCard
              product={{
                name: "Reebok Classic Leather",
                image: Reebok,
                price: 55,
              }}
            />

            <ProductCard
              product={{
                name: "Gucci Bloom",
                image: Vans,
                price: 35.99,
              }}
            />

            <ProductCard
              product={{
                name: "Johnston & Murphy Melton",
                image: Johnston,
                price: 55.99,
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}
 
export default Shoes;