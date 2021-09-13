import {
    INCREASE_COUNTER,
    DECREASE_COUNTER,
    RESET_COUNTER
  } from "./actionTypes"

  export const arttır = ()=>{
      return{
        type:INCREASE_COUNTER,
      }
  }
  export const eksilt = ()=>{
      return{
        type:DECREASE_COUNTER,
      }
  }
  export const reset = ()=>{
      return{
        type:RESET_COUNTER,
        payload:8
      }
  }