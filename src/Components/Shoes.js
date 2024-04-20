import Footer from "./Footer";
import Header from "./Header";
import ProductCard from "./ProductCard";
import shoes from "../data/shoes"

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
            {shoes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
}
 
export default Shoes;