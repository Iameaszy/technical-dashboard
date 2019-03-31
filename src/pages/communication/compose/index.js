import React from 'react';
import Icon from 'react-fa';
import { withRouter } from 'react-router-dom';
import { ComposeStyle } from './compose.style';
import { validator } from '../../../helpers/utils';
import messageAction from '../../../redux/actions/message';

export class ComposeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        to: { value: '', valid: false },
        subject: { value: '', valid: true },
        message: { value: '', valid: false },
      },
      toSubmit: {},
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    const { name, value, type } = e.target;
    this.setState(p => ({
      toSubmit: { ...p.toSubmit, [name]: value },
      form: {
        ...p.form,
        [name]: {
          value,
          valid: validator(value, type),
        },
      },
    }));
  }

  onSubmit() {
    const { auth, sendMessage } = this.props;
    const { toSubmit } = this.state;
    const newObj = { ...toSubmit, uid: auth.data.uid, from: auth.data.email };

    if (auth.isAuthenticated) {
      sendMessage(newObj);
    } else {
      this.props.history.push('/signin');
    }
  }

  handleQuilChange(value) {
    this.setState(p => ({
      toSubmit: { ...p.toSubmit, message: value },
      form: {
        ...p.form,
        message: { value, valid: validator(value, 'quill') },
      },
    }));
  }


  render() {
    const { close, message: messageProps } = this.props;
    const { form } = this.state;
    const { to, subject, message } = form;
    const formKeys = Object.keys(form);
    const validCount = formKeys.filter(k => form[k].valid === true).length;
    const allFieldsAreValid = validCount === formKeys.length;
    return (
      <ComposeStyle className="xs-8 sm-6">
        <header className="header">
          <p className="title">New Message</p>
          <div className="compose-controls">
            <span onClick={() => close()} className="close">X</span>
          </div>
        </header>
        <main className="main">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <div className="form-group xs-12 form-to">
              <input
                value={to.value}
                onChange={(e) => {
                  this.onInputChange(e);
                }}
                className="form-control xs-12"
                type="text"
                name="to"
                id="to"
                placeholder="Recipeint"
                aria-describedby="helpId"
              />
              <small id="helpId" className="text-muted">To</small>
            </div>
            <div className="form-group form-subject xs-12">
              <input value={subject.value} type="text" onChange={this.onInputChange} name="subject" id="subject" className="form-control xs-12" placeholder="Subject" aria-describedby="helpId" />
              <small id="helpId" className="text-muted">To</small>
            </div>
            <div className="form-group xs-12">
              <textarea onChange={(e) => { this.onInputChange(e); }} name="message" value={message.value} id="message" className="textarea" rows="5" placeholder="Compose Message" />
            </div>
            <div className="clearfix" />
            <div className="form-group btn-group xs-12">
              {(messageProps.type === messageAction.SEND_MESSAGE_REQUEST) ? (
                <button
                  type="submit"
                  className="send-btn"
                  disabled={allFieldsAreValid !== true}
                >
                  <Icon name="spinner" spin />
                </button>
              ) : (
                <button
                  type="submit"
                  className="send-btn"
                  disabled={allFieldsAreValid !== true}
                >
                    Send
                </button>
              )}
              {(messageProps.type === messageAction.SEND_MESSAGE_REQUEST) ? (
                <button
                  type="button"
                  className="save-btn"
                  disabled={allFieldsAreValid !== true}
                >
                  <Icon name="spinner" spin />
                </button>
              ) : (
                <button
                  type="button"
                  className="save-btn"
                  disabled={allFieldsAreValid !== true}
                >
                    Save
                </button>
              )}
            </div>

          </form>
        </main>
      </ComposeStyle>
    );
  }
}

export default withRouter(ComposeComponent);
