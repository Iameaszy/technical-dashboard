import React from 'react';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { ComposeStyle } from './compose.style';
import { validator } from '../../../helpers/utils';
import 'react-quill/dist/quill.snow.css'; // ES6
import Icon from 'react-fa';
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
    this.handleQuilChange = this.handleQuilChange.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
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

  handleQuilChange(value) {
    this.setState(p => ({
      toSubmit: { ...p.toSubmit, message: value },
      form: {
        ...p.form,
        message: { value, valid: validator(value, 'input') },
      },
    }));
  }


  render() {
    const { close } = this.props;
    const { form } = this.state;
    const { to, subject, message } = form;
    const formKeys = Object.keys(form);
    const validCount = formKeys.filter(k => form[k].valid === true).length;
    const allFieldsAreValid = validCount === formKeys.length;

    return (
      <ComposeStyle className="xs-5">
        <header className="header">
          <p className="title">New Message</p>
          <div className="compose-controls">
            <span onClick={() => close()} className="close">X</span>
          </div>
        </header>
        <main className="main">
          <form className="form">
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
              <ReactQuill
                value={message.value}
                onChange={this.handleQuilChange}
              />
            </div>


            <button
              type="submit"
              disabled={allFieldsAreValid !== true}
              className="send-btn"
            >
                Send
            </button>
          </form>
        </main>
      </ComposeStyle>
    );
  }
}

const mapStateToProps = states => ({
  type: states.message.type,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ComposeComponent);
