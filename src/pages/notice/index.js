import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import { NoticeStyle } from './notice.style';


export class NoticePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
    this.onDrop = this.onDrop.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onDrop(files) {
    this.setState({ files });
  }

  onCancel() {
    this.setState({
      files: [],
    });
  }

  render() {
    const { files } = this.state;
    return (
      <NoticeStyle>
        <h3 className="title">Notice Board</h3>
        <div className="xs-12 md-6 dropzone-wrapper">
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
            <button className="upload-btn" disabled={!(files.length > 0)} type="button">upload</button>
          </aside>
        </div>
        <div className="clearfix" />
      </NoticeStyle>
    );
  }
}

const mapPropsToStates = states => ({});
const mapDispatchToStates = dispatch => ({});

export default connect(mapPropsToStates, mapDispatchToStates)(NoticePage);
