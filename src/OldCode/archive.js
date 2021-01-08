import ItemData from "./ItemData";
import Todoitem from "./Todoitem";
import State from "./State";
import React from "react";


class Archive extends React.Component{
constructor() {
    super ();
    this.state = {
        isLoggin : true,
        todos: ItemData,
        count:0
    }
    this.eventHandler = this.eventHandler.bind(this)
}

eventHandler(){
    this.setState(prevState => {
        return {
            count : prevState.count + 1
        }
    })
}


render() {
    /*const componentJson = ItemData.filter(p=>p.price > "200 000")
        .map(pro => <ProductMapper id={pro.id} productmap={pro}/>)*/

    const itemdata = this.state.todos.map(it => <Todoitem it={it}/>)
    let wordsDisplay
    if(this.state.isLoggin === false){
        wordsDisplay = "in"
    }
    else{
        wordsDisplay = "out"
    }

    return (
        <div>
            <div>
                <p>you are currently {wordsDisplay}</p>
            </div>
            <div>
                <State />
            </div>
            <div>
                {itemdata}
            </div>
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.eventHandler}>change</button>
            </div>

        </div>

    );
}
}

export default App;


import React from "react";

class Todoitem extends React.Component{

    constructor() {
        super ();
        this.state = {count : 1};
        this.test = this.test.bind(this)
    }

    test(){
        this.setState({count: 2})
    }

    render() {
        return(
            <div>
                <input type={"checkbox"}  />
                <p>{this.props.it.name}</p>
                <button onClick={this.test}>{this.state.count}</button>
            </div>
        )
    }
}

export default Todoitem

