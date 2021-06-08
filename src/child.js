import { React, useState } from "react";

const Child = (props) => {
    return (<div>
        <h1>Child:{props.name}</h1>
        <GrandChild name={props.child} />
    </div>)
}

const GrandChild = (props) => (
    <div>
        <h1> GrandChild:{props.name} </h1>

    </div>);

const App = () => (
    <div>
        <h1>Parent: Mansoor Ali Khan Pataudi</h1>
        <Child name="Saif Ali Khan" child="Tamur Ali Khan" />
    </div>
)

export default App;