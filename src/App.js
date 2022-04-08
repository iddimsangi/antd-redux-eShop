import "./App.css";
import { PageHeader } from "antd";
import ListsItems from "./components/Lists-items/ListsItems";
function App() {
  return (
    <div className="App">
      <PageHeader className="site-page-header" title="eShop" />
      <ListsItems />
    </div>
  );
}

export default App;
