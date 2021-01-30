import React from 'react';
import './card.styles.css'

export const Card = ({ user }) => (
  <div className="card-container">
    <img alt="user" src={`https://robohash.org/${user.id}?set=set2`} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);