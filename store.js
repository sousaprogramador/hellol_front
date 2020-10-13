import { createStore, applyMiddleware } from "redux";

const INITIAL_STATE = {
  plans: [],
  activeCity: null,
  BuyPlanModal: false,
  activePlan: {}
};

export const Types = {
  SET_BUY_PLAN_MODAL: "SET_BUY_PLAN_MODAL",
  SET_ACTIVE_PLAN: "SET_ACTIVE_PLAN"
};

export const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {

    case Types.SET_BUY_PLAN_MODAL:
      return { ...state, BuyPlanModal: payload.data };

    case Types.SET_ACTIVE_PLAN: {
      const { data } = payload;
      return { ...state, activePlan: { ...data } };
    }

    default:
      return state;
  }
};

export const Creators = {

  setBuyPlanModal: data => ({
    payload: { data },
    type: Types.SET_BUY_PLAN_MODAL
  }),

  setActivePlan: data => ({
    payload: { data },
    type: Types.SET_ACTIVE_PLAN
  })
};

export function initializeStore(initialStore = INITIAL_STATE) {
  return createStore(reducer, initialStore, applyMiddleware());
}