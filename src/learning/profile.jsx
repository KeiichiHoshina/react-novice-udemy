import React from "react";

const Profile = (props) => {
    const { name, age } = props;

    return (
        <dl>
            <dt>名前: {name}さん</dt>
            <dd>年齢: {age}歳</dd>
        </dl>
    );
}

export default Profile;
