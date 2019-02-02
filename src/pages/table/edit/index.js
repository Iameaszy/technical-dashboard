import React from 'react';
import { EditStyle } from './edit.style';

export default props => (
  <EditStyle>
    <form>
      <div className="form-group">
        <label htmlFor="id">Id</label>
        <input id="id" type="text" value={props.data.id} />
      </div>
    </form>
  </EditStyle>
);
