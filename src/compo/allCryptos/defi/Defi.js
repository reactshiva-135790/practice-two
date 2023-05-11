import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import ReactTableOne from "../../reactTableOne/ReactTableOne";

const Genres = ({ values }) => {
    return (
        <>
            {values.map((genre, idx) => {
                return (
                    <span key={idx} className="badge">
                        {genre}
                    </span>
                );
            })}
        </>
    );
};

function Defi() {
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

                <ReactTableOne columns={columns} data={data} />

            </div>

        </div>
    );
}

export default Defi;