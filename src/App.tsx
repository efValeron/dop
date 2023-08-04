import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'
export type MoneyType = {
  banknotes: BanknotsType
  value: number
  number: string
}

let defaultMoney: MoneyType[] = [
  {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
  {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
  {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
  {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
  {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
  {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
  {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
  {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
  return filter === 'All' ? defaultMoney : filter === 'Dollars' ? money.filter(m => m.banknotes === "Dollars") : money.filter(m => m.banknotes === "RUBLS")
  //если пришел filter со значением 'All', то возвращаем все банкноты
  //return money.filter... ну да, придется фильтровать
}

function App() {
  const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
  const [filterValue, setFilterValue] = useState<BanknotsType>('All')

  // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
  // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)
  const filteredMoney = moneyFilter(money, filterValue)
  return (
    <div className="App">
      <Country
        data={filteredMoney}
        setFilterValue={setFilterValue}

      />
    </div>
  );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
