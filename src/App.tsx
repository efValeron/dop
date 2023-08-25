import React from 'react';
import {Navigate, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import './App.css';
import styles from "./components/Site.module.css";
import {S} from "./_stylesSC";
import {Page} from "./components/pages/Page";
import {dataState} from "./data/dataState";
import {Error404} from "./components/pages/Error404";


function App() {
  return (
    <div>
      <div>
        <div className={styles.header}><h1>HEADER</h1></div>
        <div className={styles.body}>
          <div className={styles.nav}>

            <S.NavWrapper><NavLink to={'/page/0'} >PageOne</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={'/page/1'} >PageTwo</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={'/page/2'} >PageThree</NavLink></S.NavWrapper>
            <S.NavWrapper><NavLink to={'/p'} >PR</NavLink></S.NavWrapper>
            {/*<div><NavLink to={'/page1'} className={({isActive})=>isActive?styles.active : styles.navLink }>PageOne</NavLink></div>*/}
            <div><a href="/page1">Without routes</a></div>
          </div>
          <div className={styles.content}>
            <Routes>
              <Route path={'/'} element={<Navigate to={'/page1'}/>}/>
              <Route path={'/page/:id'} element={<Page pages={dataState.pages} />}/>

              {/*<Route path={'/page/:id'} element={<Page/>}/>*/}
              {/*<Route path={'/page/:id'} element={<Page/>}/>*/}

              <Route path={'/page/*'} element={<Error404/>}/>
            </Routes>

          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
