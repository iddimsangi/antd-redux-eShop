import "./App.css";
import { PageHeader } from "antd";
import ListsItems from "./components/Lists-items/ListsItems";
import ItemDetails from "./components/Item-details/ItemDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageHeader className="site-page-header" title="eShop" />
        <Routes>
          <Route path="/" element={<ListsItems />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
