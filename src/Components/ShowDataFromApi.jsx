import React, { useEffect, useState } from "react";
export default function APiData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(data);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((e) => setData(e));
  }, []);

  return (
    <div>
      <h1>Show Data from API</h1>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />

      {data
        .filter((ele) => {
          if (search === "") {
            return ele;
          } else {
            return ele.name.toLowerCase().includes(search.toLowerCase());
          }
        })

        .map((e, i) => (
          <div key={i}>
            <b>Email :{e.email}</b>
            <p>Name : {e.name}</p>
          </div>
        ))}
    </div>
  );
}
