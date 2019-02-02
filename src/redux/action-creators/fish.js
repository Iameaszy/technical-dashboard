import axios from 'axios';
import endpoints from '../../endpoints';
import fishes from '../actions/fish';
import { extractMessage } from '../../helpers/utils';

export const fetchFishes = () => (dispatch) => {
  dispatch({
    type: fishes.GET_FISHES_REQUEST,
  });
  axios({
    url: endpoints.GET_FISHES,
    method: 'GET',
    data: {
      relevant: true,
      recent: true,
    },
  })
    .then(({ data }) => {
      dispatch({
        type: fishes.GET_FISHES_SUCCESSFUL,
        fishes: data,
      });
    })
    .catch((res) => {
      dispatch({
        type: fishes.GET_FISHES_FAILED,
        message: extractMessage(res),
      });
    });
};


export const fetchFish = id => (dispatch) => {
  dispatch({
    type: fishes.GET_FISH_REQUEST,
  });
  axios({
    url: `${endpoints.GET_FISHES}/${id}`,
    method: 'GET',
    data: {
      relevant: true,
      recent: true,
    },
  })
    .then(({ data }) => {
      dispatch({
        type: fishes.GET_FISH_SUCCESSFUL,
        fishes: data,
      });
    })
    .catch((res) => {
      dispatch({
        type: fishes.GET_FISH_FAILED,
        message: extractMessage(res),
      });
    });
};


export const addFish = obj => (dispatch) => {
  dispatch({
    type: fishes.ADD_FISH_REQUEST,
  });
  axios({
    url: `${endpoints.GET_FISHES}`,
    method: 'POST',
    data: JSON.stringify(obj),
  })
    .then(({ data }) => {
      dispatch({
        type: fishes.ADD_FISH_SUCCESSFUL,
        fishes: data.fishes,
      });
    })
    .catch((res) => {
      dispatch({
        type: fishes.ADD_FISH_FAILED,
        message: extractMessage(res),
      });
    });
};
