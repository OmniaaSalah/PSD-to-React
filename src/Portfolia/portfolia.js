
export default function Portfolia (){


    return(
        <>
           <div className="row pt-5">
                <div className="col-3 offset-1 "  style={{width:'15%',height:'150px',backgroundColor:'grey',display: "flex", justifyContent: "center",alignItems: "center"}}>
                      <b>Desktop App</b>
                </div>
                <div className="col-3 offset-2" style={{width:'15%',height:'150px',backgroundColor:' rgb(104, 100, 100)' ,display: "flex", justifyContent: "center",alignItems: "center"}}>
                     <b>E-Commerce</b>
                </div>
                <div className="col-3 offset-2 "  style={{width:'15%',height:'150px',backgroundColor:'grey',display: "flex", justifyContent: "center",alignItems: "center"}}>
                      <b>UML Design</b>
                </div>
           </div>

           <div className="row pt-5">
                <div className="col-3 offset-1 "  style={{width:'15%',height:'150px',backgroundColor:' rgb(104, 100, 100)',display: "flex", justifyContent: "center",alignItems: "center"}}>
                     <b>ITI System</b>
                </div>
                <div className="col-3 offset-2" style={{width:'15%',height:'150px',backgroundColor:'grey',display: "flex", justifyContent: "center",alignItems: "center"}}>
                     <b>ERD Design</b>
                </div>
                <div className="col-3 offset-2 "  style={{width:'15%',height:'150px',backgroundColor:' rgb(104, 100, 100)',display: "flex", justifyContent: "center",alignItems: "center"}}>
                     <b>WPF App</b>
                </div>
           </div>
        </>
    )
}