import React from 'react';
import {useParams} from "react-router-dom";
import {PagesType} from "../../data/dataState";
import {Error404} from "./Error404";

type Props = {
  data: PagesType[]
};
export const Page = (props: Props) => {
  const {data} = props
  const params = useParams()

  return (
    data[Number(params.id)]
      ? <div>
        <h1>
          {data[Number(params.id)].heading}</h1>
        <p>
          {data[Number(params.id)].about}</p>
      </div>
      : <Error404/>
  )
};