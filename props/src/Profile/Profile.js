import React from 'react'
import PropTypes from 'prop-types';
import '../App.css'

const Profile = (props) => {
  return (
    <div> 
    <h1 style={{color:"green", TextDecoder:"underline",fontSize:"100px"}}>firstname:{props.firstname}</h1>
    <h1 style={{color:"green", textAlign:"center",fontSize:"50px"}}>lastname:{props.lastname}</h1>
    <h1 style={{color:"green",textDecorationColor:"ActiveBorder",fontSize:"75px"}}>profession:{props.profession}</h1>
    <button onClick={props.alertMe}>
      Click me!
      </button>
    
    </div>
  )
}

Profile.defaultProps = {
    firstname: "foulen",
    lastname:"Ben foulen ",
    profession:"web"
  }
const myPropTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    profession: PropTypes.string,
    
    // ... define your prop validations
  };

export default Profile