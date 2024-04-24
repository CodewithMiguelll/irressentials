import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const LogIn = () => {
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          className="text-[#f6f6f6] transition-all lg:hover:-translate-x-2 lg:hover:text-[#aa8be2] text-2xl ml-7 mt-7"
        />
      </Link>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-xs lg:max-w-xl mx-auto my-auto mt-20"
      >
        <form>
          <fieldset>
            <h2 className="text-[#f6f6f6] mb-3 text-2xl text-center">
              Log In To Your Account
            </h2>
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

            <label
              htmlFor="confirm-password"
              className="block mb-1 text-[#f6f6f6]"
            >
              Confirm Password:
            </label>
            <input
              className="w-full p-2 mb-5 rounded-md border border-[#fffafa]"
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <div className="flex flex-row  gap-8">
              <p className="text-[#f6f6f6] italic flex-1 mb-4">
                Forgot Password?
              </p>
              <p className="font-bold transition-all hover:text-[#aa8be2] text-[#f6f6f6] mb-4">
                <Link to="/sign-up">Sign Up</Link>
              </p>
            </div>

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
};

export default LogIn;
