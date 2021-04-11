import React from 'react'
import CardList from './CardList'

const UserList = ({listOfUser, setListOfUser}) => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => setListOfUser(json))
    return (
        <div>
            <ul>
{listOfUser.map(el => <li>
    <CardList user={el} />
</li>)

}

            </ul>
        
        </div>
    )
}

export default UserList
