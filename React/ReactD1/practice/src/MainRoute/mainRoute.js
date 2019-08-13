import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/about";
import Contact from "../pages/contactme";
import Article from "../pages/article";

import HeaderArt from "../components/headerArticle";
import Category from "../pages/kategori";

const MainRoutes = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Article} />
        <Route path="/:source_name" component={Category} />
      </Switch>
    </Router>
  );
};

export default MainRoutes;

// function Nav() {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/article" component={Article} />
//       </Switch>
//     </Router>
//   );
// }

// export default Nav;
