import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { CardStyle } from './card.style';

const placeholder = 'https://via.placeholder.com/300?text=No+Image';

const Card = (props) => {
  const { report_type, ...rest } = props;
  const imgSrc = rest.image_url;
  return (
    <CardStyle className="card">
      <div className="text-img-wrapper">
        <div className="img-wrapper">
          <span className="report-type">{report_type}</span>
          {imgSrc
          && <img className="card-img" width="100%" src={imgSrc} alt="Card cap" />
          }
        </div>
      </div>
      <p className="card-text">
        {rest.report_message.slice(0, 20)}
      </p>
      <p className="card-status">{JSON.parse(rest.seen) ? <FaEye color="#257525" size={28} /> : <FaEye color="rgba(0,0,0,0.5)" size={28} />}</p>
      <Link to={`/card?id=${rest.id}`} className="card-btn xs-12 sm-off-0"> View </Link>
    </CardStyle>
  );
};

export default Card;
