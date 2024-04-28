import React from "react";
import "./Counter.css";
import { Navbar } from "../../components/Auth/Navbar/Navbar";
import SideBar from "../../Common/components/SideBar/SideBar";

export function Counter() {
  return (
    <>
      <Navbar />
      <div className="mt-44">
        <div className="row">
          <div className=" d-none d-md-block col-md-3 col-lg-2">
            <SideBar />
          </div>
          <div className="col-12 col-md-9 col-lg-10">
            <div className="main-content" style={{ overflowX: "hidden" }}>
              <h1 className="page-title">Rank</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
