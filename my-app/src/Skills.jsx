import React from "react";
import Stack from 'react-bootstrap/Stack';
import ProgressBar from "react-bootstrap/ProgressBar";

const Skills=()=>{
    const styles={
        div:{
            backgroundColor:"black",
            color:"white"
        }
    }
    return(
      
<>
<div style={styles.div}>
<h1 style={{paddingTop:"50px"}}>Skills</h1>
<p>My Skills:
Proficient in HTML5, CSS3, JavaScript (ES6+),
 Bootstrap, and jQuery, ensuring responsive and 
 interactive web experiences. Skilled in Python, C++, 
 SQL, and PostgreSQL, with strong database management
and backend capabilities. Experienced in Git, Bash Scripting, 
and performance optimization, enabling efficient version control and automation. 
</p>


<div style={{  textAlign:"left",margin:"30px auto", backgroundColor: "#000", color: "white", padding: "10px",width:"500px",height:"400px", borderRadius:"10px" }}>
      <Stack gap={3}>
        <div>
          <span>HTML5</span>
          <ProgressBar  now={90} variant="dark"  />
        </div>
        <div>
          <span>CSS3</span>
          <ProgressBar now={85} variant="danger" />
        </div>
        <div>
          <span>JavaScript (ES6+)</span>
          <ProgressBar now={80} variant="light" />
        </div>
        <div>
          <span>Bootstrap</span>
          <ProgressBar now={75} variant="success" />
        </div>
        <div>
          <span>Python</span>
          <ProgressBar now={70} variant="info" />
        </div>
        <div>
          <span>React.js</span>
          <ProgressBar now={10} variant="secondary" />
        </div>
      </Stack>
    </div>
    <h1 >...</h1>
  </div>
  </>
    )
}

export default Skills