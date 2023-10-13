import React from "react";

const Member = () => {
    const members = ["田中", "佐藤", "高橋", "伊藤" ,"小泉"];

    members.map((menber)=>{
        return console.log(menber);
    });

    const userList = members.map((user)=>{
        return <li key={user}>{user}</li>
    });

    return (
        <ul>{userList}</ul>
    );
}

export default Member;
