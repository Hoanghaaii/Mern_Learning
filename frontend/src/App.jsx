import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "./components/Navbar"
import { useProductStore } from "./store/product"
import ProductPage from "./pages/ProductPage"
import PageNotFound from "./pages/PageNotFound"


function App() {
  
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100","gray.900")}>
      <Navbar />
      
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/create" element = {<CreatePage/>} />
        <Route path="/homeproduct" element = {<ProductPage/>} />
        <Route path="*" element={<PageNotFound />} /> {/* Add this line */}      </Routes>
    </Box> 
  );
}

export default App
