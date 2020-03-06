import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";


const Footer = ({ classes,currentUser }) => {
  return (
    
      <Toolbar className={classes.footer}>
          <div className={classes.words} variant="headline" color="secondary" noWrap>
            Developed and maintained by <a className={classes.link} href="http://njabulombuli.co.za" target="_blank">Njabulo Mbuli</a>
          </div>
        </Toolbar>
    
  )
}

const styles = theme => ({
    footer:{
        textAlign:"center",
        margin:"2em"
    },
    words:{
        textAlign:"center",
        fontSize:"1.2em",
        fontWeight:"bold",
        width:"100%",
    },
    link:{
        color:"orange"
    }
  });
  
  export default withStyles(styles)(Footer);
  