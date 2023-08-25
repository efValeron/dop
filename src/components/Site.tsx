import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./../components/pages/PageOne";
import {PageTwo} from "./..//components/pages/PageTwo";
import {PageThree} from "./../components/pages/PageThree";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./../components/pages/Error404";
import {S} from './../_stylesSC'
import {Page} from "./../components/pages/Page";
import {dataState} from "./../data/dataState";


export const Site = () => {
    return (<></>
    );
};
//
// const NavWrapper = styled.div`
//   margin-left: 10px;
//   font-size: 20px;
//
//   & > a {
//     text-decoration: none;
//     color: #1e3786;
//   }
//
//   & > a.active {
//     text-decoration: none;
//     color: #03eaff;
//   }
//
//   & > a:hover {
//     color: steelblue; /* Цвет ссылки */
//   }
// `
