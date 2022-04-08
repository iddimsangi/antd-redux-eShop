import "./App.css";
import { PageHeader } from "antd";
import ListsItems from "./components/Lists-items/ListsItems";
import ItemDetails from "./components/Item-details/ItemDetails";
function App() {
  return (
    <div className="App">
      <PageHeader className="site-page-header" title="eShop" />
      {/* <ListsItems /> */}
      <ItemDetails />
    </div>
  );
}

export default App;
