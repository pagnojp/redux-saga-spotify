export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCESS: 'playlists/GET_SUCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistSucess: (data) => ({
    type: Types.GET_SUCESS,
    payload: { data },
  }),
};
