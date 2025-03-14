import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Portfolio.css";



export const Portfolio = () => {

const styles = {
    div: {
        backgroundColor:"#f2f2f2"
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px"
    },
    card: {
        width: "18rem",
        backgroundColor:"white",
        border:"none",
        borderRadius:"0"
    },
    unique:{
        backgroundColor:"#4B000F"
    }

    };
return (
    <>
<div style={styles.div}>
<h1 style={{textAlign:"left",color:"#000", padding:"10px",marginBottom:"0"}}>Portfolio</h1>
<div style={styles.container}>
      <Card style={styles.card} className="specific">
        <Card.Body>
          <Card.Title>HTML5</Card.Title>
          <Card.Text> Styles web pages with responsive designs, animations, and visual effects..</Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card} className="unique">
        <Card.Body>
          <Card.Title>Css3</Card.Title>
          <Card.Text> responsive design, animations, and modern frameworks like Bootstrap.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}  className="specific">
        <Card.Body>
          <Card.Title>javaScript</Card.Title>
          <Card.Text> A programming language for interactive web development with modern features.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card}  >
        <Card.Body>
          <Card.Title>Git & Version Control</Card.Title>
          <Card.Text>A system for managing code changes, collaboration, and tracking modifications..</Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card} className="specific">
        <Card.Body>
          <Card.Title>SQL & PostgreSQL</Card.Title>
          <Card.Text> Database management using powerful queries and structured relationships.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={styles.card} >
        <Card.Body>
          <Card.Title> (ES6+)</Card.Title>
          <Card.Text>Some quick example text to build on the card title.</Card.Text>
        </Card.Body>
      </Card>
    </div>

</div>

    </>

);
};

