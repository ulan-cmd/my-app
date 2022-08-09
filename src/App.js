import React from "react";
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";

const App = () => {
    return(
       <div className="w3-content" style={ {maxWidth:"1400px"} }>
           <Header/>
           <div className="w3-row">
               <BlogEntries/>
           </div>
       </div>
    )
}

export default App;