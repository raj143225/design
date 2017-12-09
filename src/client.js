import {trackPageView} from "../core/src/utils/analytics";


export const reduxInitialState = [];
export const reduxReducers = [];
export const reduxMiddleware = [];
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();