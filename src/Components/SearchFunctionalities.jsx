import { useState } from "react";

const SearchFunctionalities = () => {
  const [search, setSearch] = useState("");
  const arr = ["Bangalore", "Mumbai", "Delhi", "Jaipur"];
  return (
    <div className="Search">
      <h1>Implemented Search Functionalities...</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {arr
        .filter((el) => {
          if (search === "") {
            return "";
          } else {
            const res = el.toLowerCase().includes(search.toLowerCase());
            return res;
          }
        })
        .map((e, i) => {
          return <p key={i}>{e}</p>;
        })}
    </div>
  );
};

export default SearchFunctionalities;
