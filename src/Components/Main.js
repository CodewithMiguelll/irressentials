import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NikeSneakers from '../assets/images/Nike Sneaker Black.jpg'
import Sneaker1 from '../assets/images/pexels-broxx-asia-11292946.jpg'
import Sneaker2 from '../assets/images/pexels-ray-piedra-1461048.jpg'
import Sneaker3 from '../assets/images/pexels-ray-piedra-1464625.jpg'
import Sneaker4 from '../assets/images/pexels-ray-piedra-1456740.jpg'
import Perfume1 from '../assets/images/pexels-aleksandr-slobodianyk-989962.jpg'
import Perfume2 from '../assets/images/pexels-beautinow-niche-perfume-15007556.jpg'
import Perfume3 from '../assets/images/pexels-valeria-boltneva-1961791.jpg'
import Perfume4 from '../assets/images/pexels-valeria-boltneva-965993.jpg'
import FormalShoe from '../assets/images/pexels-rujwal-pradhan-10259873.jpg' 
import Customer1 from '../assets/images/pexels-italo-melo-2379004.jpg'
import Customer2 from '../assets/images/pexels-nicholas-swatz-2770600.jpg'
import Customer3 from '../assets/images/pexels-nathan-cowley-1300402.jpg'
import Customer4 from '../assets/images/pexels-chloe-1043474.jpg'
import Customer5 from '../assets/images/pexels-christina-morillo-1181686.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faHandshake, faHeart, faLightbulb, faStar } from '@fortawesome/free-regular-svg-icons';
import ReviewCard from './Reviews';
import Footer from './Footer'
import { Link } from 'react-router-dom/cjs/react-router-dom';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ProductCard = ({ product }) =>{
  return (
    <div className="w-60 mx-auto bg-[#aa8be2] shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={product.image}
        alt={product.name}
        loading='lazy'
      />
      <div className="p-4">
        <h2 className="text-[#f6f6f6] text-lg font-semibold">{product.name}</h2>
        <p className="mt-2 text-[#f6f6f6]">${product.price}</p>
        <div className="mt-4 flex gap-6 justify-between">
          <button className="px-4 py-2 bg-[#3f1491] text-white rounded-md transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2]">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-[#3f1491] text-white rounded-md transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2]">
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = () => {

  return (
    <main>
      <div
        className="text-center p-8 max-w-3xl my-0 mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="font-Cardo text-white text-3xl lg:text-5xl mb-4">
          Irressentials
        </h1>
        <p className="text-white font-Abeezee lg:text-lg" id="Tagline">
          Your Daily Essentials, Crafted with Precision and Passion to Redefine
          Your Personal Style and Elevate Your Daily Experience.
        </p>
        <Link to="/categories">
        <button className="border bg-[#3f1491] rounded-lg p-3 mt-4 text-white font-Abeezee text-xs transition-all hover:bg-[#f6f6f6] hover:text-[#aa8be2] hover:-translate-y-1 active:translate-y-1">
          Browse Our Categories
        </button>
        </Link>
        
      </div>

      {/*FEATURED PRODUCTS SECTION */}
      <section className="mt-12">
        <h2 className="text-3xl font-Exo text-[#f6f6f6] text-center">
          Featured Products
        </h2>
        <Carousel className="mt-10" responsive={responsive}>
          <div data-aos="fade-up" data-aos-duration="1500">
            <ProductCard
              product={{
                name: "Nike Premium Sneakers",
                image: NikeSneakers,
                price: 35.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1600">
            <ProductCard
              product={{
                name: "Nike Sneakers Black",
                image: Sneaker4,
                price: 25.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1700">
            <ProductCard
              product={{
                name: "Sleek Super Sneakers",
                image: Sneaker1,
                price: 24.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1700">
            <ProductCard
              product={{
                name: "Desodorante Calidad",
                image: Perfume4,
                price: 214.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1700">
            <ProductCard
              product={{
                name: "Aqua Allegoria Golden",
                image: Perfume3,
                price: 24.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1700">
            <ProductCard
              product={{
                name: "Black Stallion Perfume",
                image: Perfume2,
                price: 54.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1700">
            <ProductCard
              product={{
                name: "Lacoste Men's Perfume",
                image: Perfume1,
                price: 35.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1800">
            <ProductCard
              product={{
                name: "Fashionable Sneakers",
                image: Sneaker2,
                price: 14.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1900">
            <ProductCard
              product={{
                name: "Runner Sneakers",
                image: Sneaker3,
                price: 56.99,
              }}
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <ProductCard
              product={{
                name: "Men's Black Classic Shoe",
                image: FormalShoe,
                price: 45.99,
              }}
            />
          </div>
        </Carousel>
        ;
      </section>

      {/*SPECIAL OFFERS SECTION */}
      <section className="mt-12">
        <h2 className="text-3xl font-Exo text-[#f6f6f6] text-center">
          Special Offers
        </h2>
        <Carousel className="mt-10" responsive={responsive}>
          <div data-aos="zoom-in" data-aos-duration="500">
            <ProductCard
              product={{
                name: "Nike Premium Sneakers",
                image: NikeSneakers,
                price: 35.99,
              }}
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="600">
            <ProductCard
              product={{
                name: "Nike Sneakers Black",
                image: Sneaker4,
                price: 25.99,
              }}
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="700">
            <ProductCard
              product={{
                name: "Sleek Super Sneakers",
                image: Sneaker1,
                price: 24.99,
              }}
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="800">
            <ProductCard
              product={{
                name: "Fashionable Sneakers",
                image: Sneaker2,
                price: 14.99,
              }}
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="900">
            <ProductCard
              product={{
                name: "Runner Sneakers",
                image: Sneaker3,
                price: 14.99,
              }}
            />
          </div>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <ProductCard
              product={{
                name: "Men's Black Classic Shoe",
                image: FormalShoe,
                price: 45.99,
              }}
            />
          </div>
        </Carousel>
      </section>

      {/*ABOUT US SECTION */}
      <section className="py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="text-3xl font-extrabold font-Exo text-white sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 font-Abeezee text-lg text-[#f6f6f6]">
              Discover the perfect blend of sophistication and taste with our
              exquisite selection of wines. Step into style with our latest shoe
              collection, designed to elevate your every step. Stay fresh and
              confident all day long with our range of premium deodorants.
              Elevate your lifestyle with us today!
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-[#aa8be2] p-8 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h3 className="text-xl font-semibold text-[#f6f6f6] mb-4">
                <FontAwesomeIcon icon={faStar} /> Our Mission
              </h3>
              <p className="text-[#f6f6f6]">
                At Irressentials, our mission is to curate a selection of the
                finest perfumes, wines, and shoes, offering our customers a
                taste of sophistication and refinement. We strive to provide an
                exceptional shopping experience, where quality meets
                affordability, and customer satisfaction is our top priority
              </p>
            </div>
            <div
              className="bg-[#aa8be2] p-8 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              <h3 className="text-xl font-semibold text-[#f6f6f6] mb-4">
                <FontAwesomeIcon icon={faLightbulb} /> Our Vision
              </h3>
              <p className="text-[#f6f6f6]">
                Our vision is to redefine elegance and luxury, setting new
                standards in the world of fashion and lifestyle. We aim to
                inspire our customers to embrace their individuality and express
                themselves with confidence and style.
              </p>
            </div>
            <div
              className="bg-[#aa8be2] p-8 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-duration="1900"
            >
              <h3 className="text-xl font-semibold text-[#f6f6f6] mb-4">
                <FontAwesomeIcon icon={faHandshake} /> Our Values
              </h3>
              <ul className="text-[#f6f6f6]">
                <li className="list-disc">
                  Quality: We are comitted to offering only the highest quality
                  products, curated with care and attention to detail.
                </li>
                <li className="list-disc">
                  Integrity: We conduct our business with honesty, transparency,
                  and respect for our customers, partners, and the environment.{" "}
                </li>
                <li className="list-disc">
                  Innovation:We embrace innovation and continuously seek new and
                  creative ways to delight our customers and improve their
                  overall shopping experience.
                </li>
                <li className="list-disc">
                  Community: We believe in bulding a community oflike-mided
                  individuals who share our passion for fashion, beuty and
                  lifestyle.
                </li>
                <li className="list-disc">
                  Sustainability: We are committed to sustainability and strive
                  to minimize our enviromental impact through responsible
                  sourcing and packaging practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="mt-12">
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="font-Exo text-xl lg:text-3xl text-[#f6f6f6]">
            But Of Course, Don't Take Our Word For It...
          </h2>
          <p className="text-[#f6f6f6] text-lg">
            Here's what our customers say
          </p>
        </div>
        <Carousel className="mt-5" responsive={responsive}>
          <div data-aos="fade-down" data-aos-duration="1000">
            <ReviewCard
              review={{
                avatar: Customer1,
                name: "John Doe",
                date: "2023-02-09",
                content:
                  "I've never been more satisfied as I've been with Irressentials' winery and perfumes, they truly are life-savers ",
                rating: 4.5,
              }}
            />
          </div>

          <div data-aos="fade-down" data-aos-duration="1000">
            <ReviewCard
              review={{
                avatar: Customer2,
                name: "Timothy Grayson",
                date: "2022-05-02",
                content:
                  "Their services and support are truly extraordinary, the best, affordable wines from exquisite countries all around the world ",
                rating: 4.5,
              }}
            />
          </div>

          <div data-aos="fade-down" data-aos-duration="1000">
            <ReviewCard
              review={{
                avatar: Customer3,
                name: "Simon Pownall",
                date: "2023-02-28",
                content:
                  "Simply the best of the best. I can't emphasize it more when it comes to this store. The most excellent shoes in the business ",
                rating: 4.5,
              }}
            />
          </div>

          <div data-aos="fade-down" data-aos-duration="1000">
            <ReviewCard
              review={{
                avatar: Customer4,
                name: "Roberto Rivera",
                date: "2023-12-28",
                content:
                  "Outstanding services with excellent customer care. They provide the best collections of perfumes that are top-notch. ",
                rating: 4.5,
              }}
            />
          </div>

          <div data-aos="fade-down" data-aos-duration="1000">
            <ReviewCard
              review={{
                avatar: Customer5,
                name: "Mea Dallas",
                date: "2024-01-08",
                content:
                  "I can't get enough of the quality of their customer care and wines, they're simply excellent, a must try for any wine lover.",
                rating: 4.5,
              }}
            />
          </div>
        </Carousel>
      </section>

      {/*SERVICES BOOKING SECTION */}
      <section
        data-aos="fade-up"
        data-aos-duration="1500"
        className="mt-14 max-w-sm rounded-md lg:max-w-2xl  p-5 bg-[#aa8be2] m-auto"
      >
        <h2 className="font-Exo text-3xl text-[#f6f6f6] text-center">
          Book Us
        </h2>
        <form >
          <fieldset>
            <legend className="text-[#f6f6f6] mb-3">
              Fill in the required information to book a service
            </legend>
            <label htmlFor="name" className="block mb-[5px] text-[#f6f6f6]">
              Name:
            </label>
            <input
              className="w-full p-2 mb-3 rounded-md border border-[#fffafa]"
              id="name"
              name="name"
              type="text"
              required
              placeholder="Jessica Doe"
            />

            <label htmlFor="email" className="block mb-[5px] text-[#f6f6f6]">
              Email:
            </label>
            <input
              className="w-full p-2 mb-3 rounded-md border border-[#fffafa]"
              id="email"
              name="email"
              type="email"
              required
              placeholder="example123@gmail.com"
            />

            <label htmlFor="phone" className="block mb-[5px] text-[#f6f6f6]">
              Phone Number:
            </label>
            <input
              className="w-full p-2 mb-3 rounded-md border border-[#fffafa]"
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="899-777-1234"
            />

            <label htmlFor="date" className="block mb-[5px] text-[#f6f6f6]">
              Date of Service:
            </label>
            <input
              className="w-full p-2 mb-3 rounded-md border border-[#fffafa]"
              id="date"
              name="date"
              type="date"
              required
            />

            <label
              htmlFor="additional-information"
              className="block mb-[5px] text-[#f6f6f6]"
            >
              Additional Information:
            </label>
            <textarea
              className="w-full p-2 mb-3 rounded-md border border-[#fffafa]"
              id="additional-information"
              name="info"
            ></textarea>

            <button
              className="text-[#f6f6f6] block m-auto cursor-pointer rounded-full bg-[#3f1491] py-3 px-5 transition-all hover:-translate-y-2 active:translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2]"
              type="submit"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </section>
      <Footer />
    </main>
  );
};

export default Main;
