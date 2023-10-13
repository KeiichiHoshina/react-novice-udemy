import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <>
            <h1>Page2</h1>
            <Link to={"/"}>Page1へ遷移</Link>
        </>
    )
}

export default Page2;
