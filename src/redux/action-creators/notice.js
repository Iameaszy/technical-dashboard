import randomString from 'random-string';
import { storage } from 'firebase/app';
import noticeActions from '../actions/notice';
import { storageRef, noticeRef } from '../../config/firebase';

export const uploadImage = img => async (dispatch) => {
  dispatch({
    type: noticeActions.UPLOAD_IMAGE_SUCCESSFUL,
  });
  const uploadTask = storageRef.child(`images/${randomString({ length: 10 }) + img.name}`).put(img);

  uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`Upload is ${progress}% done`);
    switch (snapshot.state) {
      case storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, (error) => {
    // Handle unsuccessful uploads
    dispatch({
      type: noticeActions.UPLOAD_IMAGE_FAILED,
      message: `image ${img.name} failed to upload`,
    });
  }, () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      noticeRef.push({ imageUrl: downloadURL });
      dispatch({
        type: noticeActions.UPLOAD_IMAGE_SUCCESSFUL,
        messsage: `image uploaded. File available at ${downloadURL}`,
      });
    });
  });
};


export const uploadImages = imageFiles => async (dispatch) => {
  dispatch({
    type: noticeActions.UPLOAD_IMAGE_REQUEST,
  });

  Promise.all(imageFiles.map(img => storageRef.child(`images/${randomString({ length: 10 }) + img.name}`).put(img).then(uploadTask => uploadTask.ref.getDownloadURL().then(downloadUrl => noticeRef.push({ type: 'image', image_url: downloadUrl }))))).then(() => {
    dispatch({
      type: noticeActions.UPLOAD_IMAGE_SUCCESSFUL,
      message: 'images uploaded successfully',
    });
  }).catch((err) => {
    dispatch({
      type: noticeActions.UPLOAD_IMAGE_FAILED,
      message: err.message,
    });
  });
};


export const uploadText = text => async (dispatch) => {
  dispatch({
    type: noticeActions.UPLOAD_TEXT_REQUEST,
  });

  noticeRef.push({ type: 'text', text }).then(() => {
    dispatch({
      type: noticeActions.UPLOAD_TEXT_SUCCESSFUL,
      message: 'Text Uploaded Successfully',
    });
  }).catch((err) => {
    dispatch({
      type: noticeActions.UPLOAD_TEXT_FAILED,
      message: err.message,
    });
  });
};
