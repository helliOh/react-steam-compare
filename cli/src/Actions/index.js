import * as types from './ActionTypes';

export const scrollNeedUpdate = () => ({
    type : types.SCROLL_NEED_UPDATE
});

export const updateScroll = (flag) => ({
    type : types.UPDATE_SCROLL
});
