function Header()
{
    return(
        <div style={{display:"flex", justifyContent:"space-between" ,alignItems:"center",margin:"0px 20px",paddingTop:"30px"}}>
            <div className="logo">
                <h1 style={{fontFamily:"sans-serif"}}>PORSCHE</h1>
            </div>
            <div className="more">
                <ul style={{listStyle:"none" ,display:"flex",fontFamily:"sans-serif" ,fontSize:"16px"}}>
                    <a href="" style={{textDecoration:"none", color:"white"}}><li style={{paddingRight:"25px"}}>HOME</li></a>
                    <a href="" style={{textDecoration:"none", color:"white"}}><li style={{paddingRight:"25px"}}>ABOUT</li></a>
                    <a href="" style={{textDecoration:"none", color:"white"}}><li style={{paddingRight:"25px"}}>CONTACT</li></a>
                   <a href="" style={{textDecoration:"none", color:"white"}}><li>SERVICES</li></a>
                </ul>
            </div>
        </div>
    )
}
export default Header;