
import './Skills.css';
export default function Skills (){


    return(
        <>
        
        <div className="skills p-5">

        <h1><b>Skills</b></h1>
      
        <div className='row ' style={{backgroundColor:'white'}}>
                  
                  <span className='col-2 ' style={{backgroundColor:' rgb(104, 100, 100)'}}></span>
                  <span className='col-1 ' style={{backgroundColor:'grey'}}>React</span>
                  
                  <div className='col-7 ' style={{backgroundColor:'gainsboro',height:'24px',width:'30%'}}></div>
        </div>
        
        <br/>

         <div className='row ' style={{backgroundColor:'white'}}>

                 <span className='col-2 ' style={{backgroundColor:' rgb(104, 100, 100)'}}></span>
                 <span className='col-1 ' style={{backgroundColor:'grey'}}>LinQ</span>
                 <div className='col-7 ' style={{backgroundColor:'gainsboro',height:'24px',width:'70%'}}></div>
        </div>
        
        <br/>

        <div className='row ' style={{backgroundColor:'white'}} >

                 <span className='col-2 ' style={{backgroundColor:' rgb(104, 100, 100)'}}></span>
                 <span className='col-1 ' style={{backgroundColor:'grey'}}>Angular</span>
                 <div className='col-7 ' style={{backgroundColor:'gainsboro',height:'24px',width:'50%'}}></div>
        </div>


        </div>

        </>
    )
}