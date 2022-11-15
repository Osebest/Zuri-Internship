import React from "react";
import {VscSettings} from 'react-icons/vsc'
import { secondGrid } from "../Homepage/CardConfig";
import Card from "../Homepage/Card";

export default function PlaceToStay() {
  return (
    <div className="container place">
      <div className="nav-scroller bg-body shadow-sm">
        <nav className="nav nav-underline" aria-label="Secondary navigation">
          <a className="nav-link active" aria-current="page" href="/">
            Restaurant
          </a>
          <a className="nav-link" href="/">
            Cottage
          </a>
          <a className="nav-link" href="/">
            Castle
          </a>
          <a className="nav-link" href="/">
            Fanta city
          </a>
          <a className="nav-link" href="/">
            Beach
          </a>
          <a className="nav-link" href="/">
            Cabins
          </a>
          <a className="nav-link" href="/">
            Off-Grid
          </a>
          <a className="nav-link" href="/">
            Farm
          </a>
          <a className="nav-link d-flex align-items-center loca" href="/">
            Location
            <VscSettings  className="mx-2"/>
          </a>
        </nav>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 my-4 mb-5">
          {secondGrid.map((el) => (
            <Card image={el.image} />
          ))}
        </div>
    </div>
  );
}
