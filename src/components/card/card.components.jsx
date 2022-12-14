import { Component } from "react";

import './card.styles.css'

class Card extends Component {
    render() {
        const {id, name, email} = this.props.monster;
        return (
          <div className="card-container" key={id}>
            <img
              src={`https://robohash.org/${id}?set=set6&size180x180`}
              alt={`monster${name}`}
            />
            <h2>{name}</h2>
            <h2>{email}</h2>
          </div>
        );
    }

}

export default Card;