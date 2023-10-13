import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <>
            <h1>Page1</h1>
            <Link to={"/page2"}>Page2へ遷移</Link>
        </>
    )
}

export default Page1;
