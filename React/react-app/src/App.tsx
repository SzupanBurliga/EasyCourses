
import React from 'react';
import ListGroup from "./components/ListGroup";
function App(){
    let items = ["New York", "Budzow","Skawica","Makow Podhalanski","Zakopane"];
    const handleSelectItem = (item: string) => {
        console.log(item);

    }
    return (


        <div><ListGroup items ={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
    );
}
export default App;