import React from 'react';
import './Profile.css'

const Profile = ({listOfUser, match}) => {
    console.log('Mehdi', listOfUser)
    const user = listOfUser.find(el => el.id == match.params.id)
    console.log('user', user)
    return (
        <div>

<div className="card-container">
	
	
	<h3>Company: {user.company.name}</h3>
	<h6>City: {user.address.city}</h6>
    <h6>Website: {user.website}</h6>
    <h6>Phone: {user.phone}</h6>
	<p>{user.company.catchPhrase}</p>
	<div className="buttons">
		<button className="primary">
			Message
		</button>
		<button className="primary ghost">
			Following
		</button>
	</div>
	
</div>
           
               
        
        </div>
    )
}

export default Profile
