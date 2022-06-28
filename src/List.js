import React, { Fragment } from 'react';

const List = (props) => {
  return (
    <Fragment>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default List;
