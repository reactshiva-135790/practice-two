import Reusable from "../../reUsable/Reusable"
import CustomButton from "../../customButton/CustomButton"
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "../../../compo/reactTable/Table";


function Future() {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Price',
                accessor: 'price'
            },
            {
                Header: '24h High',
                accessor: '24h high'
            },
            {
                Header: '24h Low',
                accessor: '24h low'
            },
            {
                Header: '24h Volume',
                accessor: '24h volume'
            },
        ],
        []
    );

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

                <Table columns={columns} data={data} />

                <div className="text-center mt-5 mb-5">

                    <Reusable />

                    <CustomButton name="Add Favorite" />

                </div>

            </div>

        </div>
    );
}

export default Future;