import "./styles.css";
import SearchFuncationlities from "./Components/SearchFunctionalities";
import ShowDataFromApi from "./Components/ShowDataFromApi";
export default function App() {
  return (
    <div className="App">
      <SearchFuncationlities />;
      <hr />
      <ShowDataFromApi />
      <hr />
    </div>
  );
}
