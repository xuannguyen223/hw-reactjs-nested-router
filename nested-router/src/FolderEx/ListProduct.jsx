import { Button, Checkbox, Table } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const ListProduct = () => {
  return (
    <>
      {/* BTN ADD PRODUCT */}
      <NavLink
        to={"/product-management/create-product"}
        className="m-3 bg-orange-500 rounded-md p-3 text-white inline-block"
      >
        Add New Product
      </NavLink>
      {/* BLOCK SEARCH  */}
      <form className="pb-4 dark:bg-gray-900 flex m-3 items-center">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
        <Button type="submit" color="warning" className="ml-3 mt-[1px]">
          Search
        </Button>
      </form>
      {/* BLOCK TABLE */}
      <div className="overflow-x-auto mb-5">
        <Table hoverable>
          <Table.Head className="text-center">
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Ut pariatur Dolorem
              </Table.Cell>
              <Table.Cell>
                <img
                  src="https://cataas.com/cat?width=500&height=300"
                  alt=""
                  width={150}
                  className="mx-auto rounded-md"
                />
              </Table.Cell>
              <Table.Cell>1000000</Table.Cell>
              <Table.Cell>A</Table.Cell>
              <Table.Cell>
                <NavLink
                  to={"/product-management/update-product"}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
                <NavLink className="font-medium text-red-500 dark:text-blue-500 hover:underline ml-2">
                  | Delete
                </NavLink>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Perferendis elit qu
              </Table.Cell>
              <Table.Cell>
                <img
                  src="https://cataas.com/cat?width=500&height=300"
                  alt=""
                  width={150}
                  className="mx-auto rounded-md"
                />
              </Table.Cell>
              <Table.Cell>900000</Table.Cell>
              <Table.Cell>B</Table.Cell>
              <Table.Cell>
                <NavLink
                  to={"/product-management/update-product"}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
                <NavLink className="font-medium text-red-500 dark:text-blue-500 hover:underline ml-2">
                  | Delete
                </NavLink>
              </Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center">
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Possimus vero quis
              </Table.Cell>
              <Table.Cell>
                <img
                  src="https://cataas.com/cat?width=500&height=300"
                  alt=""
                  width={150}
                  className="mx-auto rounded-md"
                />
              </Table.Cell>
              <Table.Cell>800000</Table.Cell>
              <Table.Cell>C</Table.Cell>
              <Table.Cell>
                <NavLink
                  to={"/product-management/update-product"}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </NavLink>
                <NavLink className="font-medium text-red-500 dark:text-blue-500 hover:underline ml-2">
                  | Delete
                </NavLink>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default ListProduct;
