import React from 'react';
import { CardStyle } from './card.style';

const Card = (props) => {
  console.log(props);
  return (
    <CardStyle className="card">
      <img top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
      <div className="card-body">
        <h4 className="card-title">{props.report_type}</h4>
        <p className="card-text">
          {props.report_message}
        </p>
      </div>
    </CardStyle>
  );
};

export default Card;
