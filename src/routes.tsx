import { createBrowserRouter } from "react-router-dom";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import Product from "./pages";
import ProductAdd from "./pages/add";
import ProductEdit from "./pages/edit";


export const router = createBrowserRouter([
    {  
         path: "/", 
        element: <LayoutWebsite />,
    },
    {
        path: "/products",
        element: <Product />,
    },
    {
        path: "/products/add",
        element: <ProductAdd />,
    },
    {
        path: "/products/:idProduct/edit",
        element: <ProductEdit />,
    },
]);
