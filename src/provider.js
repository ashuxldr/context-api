import { React, useState } from "react";

import PackageContext from "./context";

const Provider = (props) => {
    const [league, setLeague] = useState({
        mname: "PMPL",
        agent: "Ldrago",
        status: "not successful"
    })
}
return (
    <PackageContext.Provider value={{
        date: league
    }}>
        {props.children}
    </PackageContext.Provider>)