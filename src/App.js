import Topbar from "./component/topbar/Topbar";
import Sidebar from "./component/sidebar/Sidebar";
import "./app.css";
import Home from "./Pages/Home";
import { BrowserRouter as  Router, Routes, Route} from "react-router-dom";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
import NewUser from "./Pages/newUser/NewUser";
import Product from "./Pages/productList/Product";
import Prooduct from "./Pages/product/Prooduct";
import NewProduct from "./Pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/users" element={<UserList/>}/>

          <Route path="/user/:userId" element={<User/>}/>

          <Route path="/newUser" element={<NewUser/>}/>
          
          <Route path="/products" element={<Product/>}/>

          <Route path="/product/:productId" element={<Prooduct/>}/>

          <Route path="/newProduct" element={<NewProduct/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
