import React,{Component} from 'react'

class HeadingDisplay extends Component{
    
    data=['https://i.redd.it/kriti-sanon-hot-v0-4aijraqzvndb1.jpg?width=1170&format=pjpg&auto=webp&s=d067d3dbe32dadf69348e28a9321def13ca17e0f','https://shorturl.at/crswE','https://shorturl.at/bnMP4','https://shorturl.at/cvCI3']
    
    
    
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
