import SmallTable from "../../compo/smallTable/SmallTable"
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";


function Orderbook() {
  const columns = React.useMemo(() => [
    {
      Header: "General information",
      columns: [
        {
          Header: "Id",
          accessor: "id"
        }, {
          Header: "Name",
          accessor: "name"
        },  
      ]
    }, {
      Header: " Contact information",
      columns: [
        {
          Header: "Price",
          accessor: "price"
        }, {
          Header: "Amount",
          accessor: "amount"
        },  
      ]
    }
  ], []);

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://fakestoreapi.com/products");
      setData(result.data);
    })();
  }, []);


  if (data.length === 0)
    return (
      <div className="d-flex align-items-center">
        <strong>Loading...</strong>
      </div>
    );

  return (
    <div className="container">

      <div className="row">

        <SmallTable columns={columns} data={data} />

      </div>

    </div>
  );
}

export default Orderbook;