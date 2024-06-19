import {useState} from "react";

function UserSearch() {
    const [keyword, setKeyword] = useState("");

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default UserSearch;