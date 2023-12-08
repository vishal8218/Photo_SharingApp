import React,{Component} from 'react'

class Welcome extends Component{

    constructor(props)
    {
        super(props);
         this.state={count:0};
    }
    incrementCout =() =>
    {
        this.setState(prevState =>{
            return{count:prevState.count+1}
        })

        
    }
    render()
    {
        const {count}=this.state;
        <br></br>
        return <button onClick={this.incrementCout}>Clicked {count} times</button>

        
    }
}

class Order extends Component{
    render()
    {
        return <h2>Vishal</h2>
    }
}
export default Welcome
