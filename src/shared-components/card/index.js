import React from 'react';
import { CardStyle } from './card.style';


const placeholder = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180';
const Card = (props) => {
  const {
    report_type, report_message, has_attachment, image_url, report_date, seen, thumb_image_url,
  } = props;
  const imgSrc = image_url || placeholder;
  return (
    <CardStyle className="card">
      <img className="card-img" width="100%" src={imgSrc} alt="Card cap" />
      <div className="card-body">
        <h4 className="card-title">{report_type}</h4>
        <p className="card-text">
          {report_message.slice(0, 30)}
        </p>
      </div>
      <button type="button" className="card-btn xs-12 sm-off-0">
          View
      </button>
    </CardStyle>
  );
};

export default Card;
