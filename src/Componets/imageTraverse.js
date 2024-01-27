import React,{Component} from 'react'

class HeadingDisplay extends Component{

    
    data=['https://i.pinimg.com/474x/0b/1f/f5/0b1ff518bdb8c527d94a636bd48a6923.jpg','https://shorturl.at/crswE','https://shorturl.at/bnMP4','https://shorturl.at/cvCI3']
    
    
    
    render()
    {
        return(
            
            <div>
                {this.data.map((source,index)=>
                
                   
    <img src={source} alt="image are stil loading ..." style={{height:"250px" ,width:"250px" ,margin:'10px'}}  ></img> 

    
                   
                   
          
                )}
               
            </div>
        )
    }
}
export default HeadingDisplay
