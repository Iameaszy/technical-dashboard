import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEllipsisV } from 'react-icons/fa';
import { CardStyle } from './card.style';

const Card = (props) => {
  const { report_type: reportType, ...rest } = props;
  const imgSrc = rest.image_url;

  return (
    <CardStyle className="card">
      <div className="text-img-wrapper">
        <div className="img-wrapper">
          <span className="report-type">{reportType}</span>
          {imgSrc
          && <img className="card-img" width="100%" src={imgSrc} alt="Card cap" />
          }
        </div>
      </div>
      <div className="card-text">
        <p>
          {rest.report_message.slice(0, 20)}
        </p>
        <div className="dots" onClick={() => rest.toggleControls(rest.id)}>
          <p><FaEllipsisV /></p>
          <div style={{ display: `${rest.control ? 'block' : 'none'}` }} className="control">
            <div className="delete" onClick={() => rest.deleteReport(rest.id)}>Delete</div>
          </div>
        </div>
      </div>

      <p className="card-status">{JSON.parse(rest.seen) ? <FaEye color="#257525" size={28} /> : <FaEye color="rgba(0,0,0,0.5)" size={28} />}</p>
      <Link to={`/card?id=${rest.id}`} className="card-btn xs-12 sm-off-0"> View </Link>
    </CardStyle>
  );
};

export default Card;
