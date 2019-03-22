import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { ListStyle } from './list.style';

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const List = (props) => {
  const {
    uid, subject, message, from,
    date, onStarChecked, onMessageChecked, id, checked,
    important,
  } = props;

  const myDate = new Date(date || null);
  return (
    <ListStyle dataMsgID={uid}>
      <div className="controls">
        <div className="group">
          <input
            checked={checked}
            onChange={() => {
              onMessageChecked(id);
            }}
            className="message-select"
            id=""
            type="checkbox"
            value="clicked"
          />

          <FaRegStar
            onClick={() => {
              onStarChecked(id);
            }}
            style={{ color: important ? 'black' : '#a2a1a1' }}
            className="star"
          />

          <div className="from">
            {from}
          </div>
        </div>
        <div className="preview">
          <span className="subject">
            {`${subject ? `${subject} -  ` : ''}`}
          </span>
          <div className="preview-text" dangerouslySetInnerHTML={{ __html: message }} />
          <div className="date">
            <span className="day">{myDate.getDay()}</span>
            <span className="month">{months[myDate.getMonth()]}</span>
            {
              myDate.getFullYear() !== (new Date()).getFullYear()
              && <span className="year">{myDate.getFullYear()}</span>
            }
          </div>
        </div>
      </div>
    </ListStyle>
  );
};
