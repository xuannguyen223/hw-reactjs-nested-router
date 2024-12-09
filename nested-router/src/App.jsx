import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductLayoutComponent from "./FolderEx/ProductLayoutComponent";
import ListProduct from "./FolderEx/ListProduct";
import CreateProductComponent from "./FolderEx/CreateProductComponent";
import UpdateProductComponent from "./FolderEx/UpdateProductComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<ProductLayoutComponent />} />
            <Route
              path="/product-management"
              element={<ProductLayoutComponent />}
            >
              <Route index element={<ListProduct />} />
              <Route
                path="create-product"
                element={<CreateProductComponent />}
              />
              <Route
                path="update-product"
                element={<UpdateProductComponent />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
