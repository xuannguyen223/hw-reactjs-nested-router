import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import ListProduct from "./ListProduct";

const ProductLayoutComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Chuyển hướng tự động sang trang /product-management khi user vào trang này
    navigate("/product-management");
  }, []);

  return (
    <div className="flex ">
      <div className="dashboard p-3 w-1/4">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <NavLink
          to={"/product-management"}
          className={
            "block my-5 bg-orange-300 p-2 rounded-md text-white text-xl"
          }
        >
          Products
        </NavLink>
      </div>
      <div className="outlet bg-black/5 w-3/4 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayoutComponent;
