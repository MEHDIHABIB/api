import React from 'react';
import './Cardlist.css';
import {Link} from 'react-router-dom'

const CardList = ({user}) => {
    return (
        <div>
          
  
  
            <section className="wrapper">
  <div className="card" data-effect="zoom">
    <button className="card__save  js-save" type="button">
      <i className="fa  fa-bookmark"></i>
     </button>
     <figure  className="card__image">
      <img src="https://c1.staticflickr.com/4/3935/32253842574_d3d449ab86_c.jpg" alt="Short description" />
    </figure>
    <div className="card__header">
      
    </div>
    <div className="card__body">
      <h3 className="card__name">{user.name}</h3>
      <p className="card__job">{user.email}</p>
      <Link to={`/profile/${user.id}`}>
      <p className="card__bio"> More about me</p>
      </Link>
    </div>
    
  </div>
 
  
</section>
        </div>
    )
}

export default CardList
