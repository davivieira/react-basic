import React from 'react';
import { Card } from '../card/card.component';
import "./card-list.styles.css";

export const CardList = ({ users, searchTerm }) => {
  return (
    <div className="card-list">
      {users && users
        .filter(user => user.name.toLowerCase().includes(searchTerm))
        .map(user => (
          <Card key={user.id} user={user} />
        ))}
    </div>
  );
}