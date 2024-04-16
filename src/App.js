import Header from "./Components/Header";
import Main from "./Components/Main";
import LogIn from "./Components/LogIn"
import SignUp from './Components/SignUp'
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wines from "./Components/Wines";
import Perfumes from './Components/Perfumes'
import Shoes from './Components/Shoes'
import Cart from './Components/CartList'
import CategoriesPage from "./Components/Categories";

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/log-in" component={LogIn}/>
            <Route path="/sign-up" component={SignUp} />
            <Route path= "/wines" component={Wines}/>
            <Route path="/perfumes" component={Perfumes}/>
            <Route path="/shoes" component={Shoes}/>*
            <Route path="/cart" component={Cart}/>
            <Route path="/categories" component={CategoriesPage}/>
            <Route path="/" render={() => (
              <>
                <Header />
                <Main />
              </>
            )} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}; 



export default App;
