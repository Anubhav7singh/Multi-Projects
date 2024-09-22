import Accordian from "./components/Accordian";
// import "./App.css";
import Randomcolor from "./components/Randomcolor";
import Starrating from "./components/Starrating";
import Imageslider from "./components/imageslider/imageslider";
import Loadmoredata from "./components/LoadmoreData";
import Treeview from "./components/Treeview";
import { data } from "./components/Treeview";
import Qrcode from "./components/Qrcodegenerator";
import Bgchanger from "./components/bgchanger";
import Scrollindicator from "./components/Scrollindicator";
import Modaltest from "./components/Modalpopup/Modaltest";
import Tictactoe from "./components/TictacToe";
import Fetchdatas from "./components/Usefetch";
import Useoutsideclick from "./components/Useclickoutside";
import Usewindowresise from "./components/Usewindow";
import Weather from "./components/Weatherapi";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/shopingCartapp/Home";
import Cart from "./components/shopingCartapp/Cart";
// import Navbarr from "./components/shopingCartapp";
import Navbar from "./components/Foodrecipie";
import Home from "./components/Foodrecipie/Home";
import Favourites from "./components/Foodrecipie/Favourite";
import Details from "./components/Foodrecipie/Details";
import { Container, Flex, Box } from "@chakra-ui/react";
import Main from "./components/Expencetracker/Index";
// import Featurejsx from "./components/Flagcontext";
// import Featuresflags from "./components/Flagcontext/COntext";
function App() {
  return (
    <div className="min-h-screen p-6  text-gray-600 text-lg ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
    // <Container maxW={"Container.3xl"} height={"100vh"} p={"0"}>
    //   <Flex height={"full"}>
    //     <Box height={"full"} flex={"5"} w={["20%", "30%", "20%", "50%", "60%"]}>
    //       <Main></Main>
    //     </Box>
    //   </Flex>
    // </Container>
  );

  {
    /* <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes> */
  }

  {
    /* <Navbarr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes> */
  }

  {
    /* <div className="min-h-screen p-6  text-gray-600 text-lg ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div> */
  }
  {
    /* <Weather /> */
  }
  {
    /* <Usewindowresise /> */
  }
  {
    /* <Useoutsideclick /> */
  }
  {
    /* <Fetchdatas /> */
  }
  {
    /* <Featurejsx>
        <Featuresflags /  
      </Featurejsx> */
  }
  {
    /* <Tictactoe /> */
  }
  {
    /* Accordian component */
  }
  {
    /* <Accordian /> */
  }
  {
    /* Random color component */
  }
  {
    /* <Randomcolor /> */
  }
  {
    /* Star Rating */
  }
  {
    /* <Starrating noofstars={10} /> */
  }
  {
    /* <Imageslider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */
  }
  {
    /* <Loadmoredata /> */
  }
  {
    /* <Qrcode /> */
  }
  {
    /* <Bgchanger /> */
  }
  {
    /* <Scrollindicator url={"https://dummyjson.com/products?limit=100"} /> */
  }
  {
    /* <Modaltest /> */
  }
}

export default App;
