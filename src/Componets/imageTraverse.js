import React,{Component} from 'react'

class HeadingDisplay extends Component{

    
    data=['https://shorturl.at/mtv12','https://shorturl.at/crswE','https://shorturl.at/bnMP4','https://shorturl.at/cvCI3']
    
    
    
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