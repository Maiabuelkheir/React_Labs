import React from "react";

export const Name = () => {
   const styles = {
       container: {
           backgroundColor: "black",
           display: "flex",
           alignItems: "center", 
           padding: "40px",
           color: "#fff",
           gap: "40px", 
           height:"500px"
       },
       img: {
           width: "450px",
           height: "450px",
       },
       textContainer: {
           display: "flex",
           flexDirection: "column", 
           alignItems: "center", 
           justifyContent: "center", 
           textAlign: "center",
           flex: 1, 
       },
       button: {
        marginTop:"50px",
        backgroundColor: "#f2f2f2",
        height:"50px"
       },
      
   };

   const image = "https://marketplace.canva.com/EAFf9pTh3kg/1/0/1131w/canva-black-and-white-simple-portfolio-cover-page-BRYRBdWQKVU.jpg";

   return (
       <div style={styles.container}>
           <img src={image} style={styles.img} alt="Portfolio Cover"/>
           <div style={styles.textContainer}>
               <h1>Mai Abu Elkheir</h1>
               <h3>Front-end Developer</h3>
               <button style={styles.button}>Contact me</button>
           </div>
       </div>
   );
};
