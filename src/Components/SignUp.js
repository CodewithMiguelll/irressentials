import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom";

const SignUp = () => {
    return (
      <div>
        <Link to="/">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="text-[#f6f6f6] text-2xl ml-10 mt-9"
          />
        </Link>
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="max-w-xs lg:max-w-xl mx-auto my-auto mt-28"
        >
          <form>
            <fieldset>
              <h2 className="text-[#f6f6f6] mb-3 text-2xl text-center">
                Sign Up For Irressentials
              </h2>
              <label htmlFor="first-name" className="block mb-1 text-[#f6f6f6]">
                First Name:
              </label>
              <input
                className="w-full p-2 mb-5 rounded-md border border-[#fffafa]"
                id="first-name"
                name="first-name"
                type="text"
                placeholder="John"
                required
              />

              <label htmlFor="last-name" className="block mb-1 text-[#f6f6f6]">
                Last Name:
              </label>
              <input
                className="w-full p-2 mb-5 rounded-md border border-[#fffafa]"
                id="last-name"
                name="last-name"
                type="text"
                placeholder="Doe"
                required
              />

              <label htmlFor="email" className="block mb-1 text-[#f6f6f6]">
                Email:
              </label>
              <input
                className="w-full p-2 mb-5 rounded-md border border-[#fffafa]"
                id="email"
                name="email"
                type="email"
                placeholder="example123@gmail.com"
                required
              />

              <label htmlFor="password" className="block mb-1 text-[#f6f6f6]">
                Password:
              </label>
              <input
                className="w-full p-2 mb-5 rounded-md border border-[#fffafa]"
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
              />

              <Link to="/home">
                <button
                  className="text-[#f6f6f6] block m-auto cursor-pointer rounded-full bg-[#3f1491] py-3 px-5 transition-all hover:-translate-y-2 active:translate-y-1 hover:bg-[#f6f6f6] hover:text-[#aa8be2]"
                  type="submit"
                >
                  Submit
                </button>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
}
 
export default SignUp;