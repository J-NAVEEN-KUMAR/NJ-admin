import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router >
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/users">
            <UserList/>
          </Route>
          <Route exact path="/users/:userId">
            <User/>
          </Route>
          <Route exact path="/newuser">
            <NewUser/>
          </Route>
          <Route exact path="/products">
            <ProductList/>
          </Route>
          <Route exact path="/products/:productId">
            <Product/>
          </Route>
          <Route exact path="/newproduct">
            <NewProduct/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
