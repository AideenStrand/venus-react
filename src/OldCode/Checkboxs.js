import React from "react";
import ItemData from "./ItemData";
import Todoitem from "./Todoitem";


class Checkboxs extends React.Component {

    constructor() {
        super ();
        this.state = {
            todos: ItemData,
            count: 0
        }
        this.handelChnage = this.handelChnage.bind (this)
    }

    handelChnage(id) {
        const completeStyle = {
            color: "red"
        }
        this.setState (prevState => {
            const updateTo = prevState.todos.map (todo => {
                if (todo.id === id) {
                    todo.complete = !todo.complete
                }
                return todo
            })
            return {
                todos: updateTo
            }
        })
    }

    render() {
        /*const componentJson = ItemData.filter(p=>p.price > "200 000")
    .map(pro => <ProductMapper id={pro.id} productmap={pro}/>)*/
        const item = this.state.todos.map (item => <Todoitem id={item.id} item={item}
                                                             handelChnage={this.handelChnage}/>);
        return (
            <div>
                <div>
                    {item}

                </div>
                <div>
                    <p> style={this.handelChnage}</p>
                    <button onClick={this.handelChnage}>{this.state.count}</button>
                </div>
            </div>
        )
    }
}

export default Checkboxs
