import React, {} from 'react'
import PropTypes from "prop-types"

const Profile = (props) => {
  const HundleName=(FullName) =>{alert(`MyNameIs  ${props.FullName}`)}
    return (
    <div>
        <h2> Good morning , This is my profile</h2>
        <h3>
            {props.FullName}

        </h3>
        <h3>
            {props.Bio}
        </h3>
        <h3>
            {props.Profession}
        </h3>
        {props.children}
        <button onClick={HundleName}>FullName</button>
        <h3>
            {props.Age}
        </h3>
    </div>
  )
}

export default Profile
Profile.defaultProps={Bio:"student"}
Profile.propTypes={Age:PropTypes.number}