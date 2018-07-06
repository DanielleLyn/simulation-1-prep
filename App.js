import React, { Component } from 'react';



class App extends Component {
    constructor(){
        super();
            this.state={
                key: value
            }
    }
}

    render() {

    const displayArray = this.state.array.map((element,index)=>{
        return  (
            <div key={index}>
                <h1>{element.property}</h1>
            </div>
        )
    })
        return (
         <div>
            {displayArray}
        </div>
        );
    }
}

export default App;


 