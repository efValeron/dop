import React from 'react';
import {MoneyType} from "./App";

type CurrentBankomatPropsType = {
  money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

  return (
    <div style={{width: "400px", height: "200px", margin: "20px", backgroundColor: props.money.banknotes === "Dollars" ? "green" : "cyan"}}>
      <div>{props.money.banknotes}</div>
      <div>{props.money.value}</div>
    </div>
  );
};
