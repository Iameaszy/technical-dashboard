import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import moment from 'moment';
import { ListStyle } from './list.style';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const List = (props) => {
  const {
    uid, subject, message, from,
    date, onStarChecked, onMessageChecked, id, checked,
    important, onMessageClicked, getMessage,
  } = props;
  const myDate = moment(date || []);
  return (
    <ListStyle
      dataMsgID={uid}
      onClick={(e) => {
        console.dir(e.target);
        switch (e.target.tagName) {
          case 'INPUT': onMessageChecked(id); break;
          case 'svg': onStarChecked(id); break;
          case 'DIV':
          case 'LI': onMessageClicked(id); break;
        }
        e.stopPropagation();
      }}
    >
      <p
        className="mobile-li"
        onClick={(e) => {
          e.stopPropagation();
          getMessage(id);
        }}
      />
      <div className="controls">
        <div className="group">
          <input
            checked={checked}
            className="message-select"
            id=""
            type="checkbox"
            value="clicked"
          />

          <FaRegStar
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
            <span className="day">{myDate.date()}</span>
            <span className="month">{months[myDate.month()]}</span>
            {
              myDate.year() !== (new Date()).getFullYear()
              && <span className="year">{myDate.year()}</span>
            }

          </div>
        </div>
      </div>
    </ListStyle>
  );
};
