import "./App.css";
import Search from "./component/Search/Search";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container w-max ">
      {/* <h1 className="w-1/4 justify-center ">Greeting</h1>{" "} */}
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
