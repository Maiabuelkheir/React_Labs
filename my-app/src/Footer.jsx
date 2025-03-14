import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Footer = () => {

   const styles={
        div:{
            background:"#4B000F",
            width:"100%",
            height:"100px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            gap:"4px",
            alignItems:"center"
        },
        color:{
            color:"#000"

        }
    }
return(
<>
    <div style={styles.div} >
    <a href="https://www.facebook.com/profile.php?id=100083589821752&locale=ar_AR" style={styles.color}><i className="bi bi-facebook"></i></a>
    <a href="https://www.linkedin.com/in/mai-yehia-abu-elkheir/"><i className="bi bi-linkedin" style={styles.color}></i></a>
    <a href="https://github.com/Maiabuelkheir"><i className="bi bi-github" style={styles.color}></i></a>
    <a href="https://www.instagram.com/maiabuelkheir27/" style={styles.color}><i className="bi bi-instagram"></i></a>

    </div>
    



  </>




)

}