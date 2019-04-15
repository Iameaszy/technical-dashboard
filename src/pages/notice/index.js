import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import Icon from 'react-fa';
import ReactQuill from 'react-quill';
import { validator } from '../../helpers/utils';
import { NoticeStyle } from './notice.style';
import * as noticeActionCreators from '../../redux/action-creators/notice';
import noticeActions from '../../redux/actions/notice';
import 'react-quill/dist/quill.snow.css'; // ES6
import toggleActions from '../../redux/actions/toggle';


export class NoticePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      form: {
        message: { value: '', valid: false },
      },
      toSubmit: {},
    };
    this.onDrop = this.onDrop.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleQuilChange = this.handleQuilChange.bind(this);
    this.closeMobileNav = this.closeMobileNav.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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


  closeMobileNav() {
    const { closeMobileNavigation } = this.props;
    closeMobileNavigation();
  }

  componentWillMount() {
    this.closeMobileNav();
  }

  onDrop(files) {
    this.setState({ files });
  }

  handleFileUpload() {
    const { files } = this.state;
    this.props.uploadImages(files);
  }


  onCancel() {
    this.setState({
      files: [],
    });
  }

  onSubmit() {
    const { auth, uploadText } = this.props;
    const { toSubmit } = this.state;
    debugger;
    if (auth.isAuthenticated) {
      uploadText(toSubmit.message);
    } else {
      this.props.history.push('/signin');
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props.type !== nextProps.type && nextProps.type === noticeActions.UPLOAD_IMAGE_SUCCESSFUL) {
      this.setState({ files: [] });
    }
    if (this.props.type !== nextProps.type && nextProps.type === noticeActions.UPLOAD_IMAGE_SUCCESSFUL) {
      this.setState(p => ({
        toSubmit: { ...p.toSubmit, message: '' },
        form: {
          ...p.form,
          message: { value: '', valid: false },
        },
      }));
    }
  }

  render() {
    const { files, form } = this.state;
    const { type } = this.props;
    const { message } = form;
    const formKeys = Object.keys(form);
    const validCount = formKeys.filter(k => form[k].valid === true).length;
    const allFieldsAreValid = validCount === formKeys.length;
    return (
      <NoticeStyle>
        <div className="xs-12 md-8 dropzone-wrapper">
          <h3 className="title">Notice Board</h3>
          <section className="file-upload-container">
            <Dropzone
              onDrop={this.onDrop}
              onFileDialogCancel={this.onCancel}
              accept="image/*"
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <h3 className="text-info">Drop Information On The Notice Board</h3>
                </div>
              )}
            </Dropzone>
          </section>
          <aside className="files-wrapper">
            <h4>Files</h4>
            <ul list-style-type="none">
              {files.map(file => (
                <li key={file.name}>
                  {file.name}
                  {' '}
                    -
                  {' '}
                  {file.size}
                  {' '}
                    bytes
                </li>
              ))}
            </ul>
            {type === noticeActions.UPLOAD_IMAGE_REQUEST ? (
              <button
                onClick={() => {
                  this.handleFileUpload();
                }}
                className="upload-btn"
                disabled={!(files.length > 0)}
                type="button"
              >
                <Icon name="spinner" spin />
              </button>

            ) : (
              <React.Fragment>
                <button
                  onClick={() => {
                    this.handleFileUpload();
                  }}
                  className="upload-btn"
                  disabled={!(files.length > 0)}
                  type="button"
                >
                  upload
                </button>
                {
                  type === noticeActions.UPLOAD_IMAGE_SUCCESSFUL
                  && <p className="success-alert">Text uploaded Successfully!</p>
                }
              </React.Fragment>
            )}

          </aside>
        </div>
        <div className="clearfix" />
        <div className="xs-12 md-8 text-wrapper">
          <h3 className="title">Notice Message</h3>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              this.onSubmit();
            }}
          >
            <div className="form-group xs-12">
              <ReactQuill
                value={message.value}
                onChange={this.handleQuilChange}
              />
            </div>
            <div className="form-group xs-12 btn-group">
              {type === noticeActions.UPLOAD_TEXT_REQUEST ? (
                <button
                  type="submit"
                  className="send-btn btn"
                  disabled={allFieldsAreValid !== true}
                >
                  <Icon name="spinner" spin />
                </button>
              ) : (
                <React.Fragment>
                  <button
                    type="submit"
                    className="send-btn btn"
                    disabled={allFieldsAreValid !== true}
                  >
                    Send
                  </button>
                  {
                  type === noticeActions.UPLOAD_TEXT_SUCCESSFUL
                  && <p className="success-alert">Text uploaded Successfully!</p>
                }
                </React.Fragment>
              )}
            </div>
          </form>
        </div>
        <div className="clearfix" />
      </NoticeStyle>
    );
  }
}

const mapPropsToStates = states => ({
  type: states.notice.type,
  message: states.notice.message,
  auth: states.auth,
});
const mapDispatchToStates = dispatch => ({
  uploadImages: images => dispatch(noticeActionCreators.uploadImages(images)),
  uploadText: text => dispatch(noticeActionCreators.uploadText(text)),
  closeMobileNavigation: () => {
    dispatch({ type: toggleActions.TOGGLE, nav: false });
  },
});

export default connect(mapPropsToStates, mapDispatchToStates)(NoticePage);
