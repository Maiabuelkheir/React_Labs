import React from "react";

export const About = () => {
   const styles = {
       container: {
           backgroundColor: "#f2f2f2",
           display: "flex",
           flexDirection:"column",
           alignItems: "center", 
           justifyContent:"center",
           padding: "50px",
           height:"600px"
       },
      
      
       button: {
        backgroundColor:"#4B000F"
       }
   };
   return (
       <div style={styles.container}>
        <h1>About me</h1>
           
               <p>I'm a front-end developer passionate about transforming ideas into interactive web experiences. I love designing smooth, fast, and user-friendly websites, focusing on the little details that make a difference. Throughout my journey, I've worked on e-commerce platforms, database management systems, and web applications, always striving to create innovative solutions that enhance user engagement.</p>
               <a href="MaiAbuElkheir_CV.pdf" download="MyCV.pdf">
               <button style={styles.button}>Download MyCV</button>
               </a>

             
           
       </div>
   );
};
