
import './App.css';
import Typography from '@mui/material/Typography';
//matriel UI component
import Container from '@mui/material/Container';
//Icon
import CloudIcon from '@mui/icons-material/Cloud';
//translition
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        {/*  container content  */}
        <div style={{height:"100vh",flexDirection:"column",color:"white" ,display:"flex" ,justifyContent:"center" ,alignItems:"center"}}>
        {/*  CARD   */}
             <div dir='rtl' style={{background:"#3c5b7188"
             ,color:"white" ,padding:"10px" 
              ,borderRadius:"15px",
              width:"100%",
              boxShadow:"0px 11px 1px rgba(0,0,0,0.05)"}}>
               {/*  conetent   */}
              <div>
                 {/*  city And Time   */}
                 <div style={{display:"flex",alignItems:"end" ,justifyContent:"start"
                   ,direction:"rtl"}}>
                     <Typography variant="h2" style={{margin:"20px"}}>
                    الدار البيضاء
                     </Typography>
                     <Typography variant="h5" style={{margin:"20px"}}>
                   يوم الأربعاء
                     </Typography>
                 </div>
                    {/*  city And Time   */}
                    <hr></hr>
                    {/*  dgree And description  */}
                      {/* container of  dgree And description  */}
                    <div style={{display:"flex" ,justifyContent:"space-around"}}>
                    <div>
                       {/*  Temp  */}
                       <div>
                          <Typography variant="h1" style={{textAlign:"right"}}>
                          38
                            </Typography>
                              {/* todo :image Temp  */}
                               {/* todo :image Temp  */}

                       </div>
                        {/*  Temp  */}
                           <Typography variant="h6" style={{textAlign:"center"}}>
                           browen clouds
                            </Typography>
                             {/*  min and max  */}
                             <div style={{textAlign:"center" ,display:"flex" ,justifyContent:"space-between",alignItems:"center"}}>
                              <h5> 38 : صغير</h5>
                               <h5> |</h5>
                               <h5> 38 :كبيرة</h5>
                             </div>
                        
                      
                    </div>
                    {/*  dgree And description  */}

                    <CloudIcon style={{fontSize:"200px" ,color:"white"}}></CloudIcon>
                    
                    </div>
                     {/* container of  dgree And description  */}

              </div>
              {/*  conetent   */}
             </div>
         {/* FIN CARD   */}
             {/* Translition container   */}
             <div
             dir='rtl'  style={{display:"flex" ,justifyContent:"end",width:"100%"}}>
              <Button variant="text">English</Button>
             </div>
               {/* Translition container   */}
            </div>
         {/*  container content  */}
      
      </Container>
   
    </div>
  );
}

export default App;
