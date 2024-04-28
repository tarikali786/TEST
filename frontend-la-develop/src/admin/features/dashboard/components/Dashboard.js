import React from "react";
import Main from "../../../components/Main/Main";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { analyticsAsync, selectAnalytics } from "../dashboardSlice";
const Card = ({ title, count }) => {
  return (
    <div className="col-xl-2 col-md-4 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {count}
              </div>
            </div>
            {/* <div className="col-auto">
              <i className={`fas ${icon} fa-2x text-gray-300`} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectAnalytics);
  useEffect(() => {
    dispatch(analyticsAsync());
  }, [dispatch]);
  console.log(data);
  return (
    <Main>
      <div className="d-sm-flex mt-4 align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        {/*  <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50" /> Generate Report
        </a> */}
      </div>
      <div className="row">
        <Card
          title="Registered User"
          count={data?.totalUsers}
          icon="fa-users"
        />
        <Card
          title="Total Fee Profit"
          count={data?.totalFeeProfit}
          icon="fa-dollar-sign"
        />
        <Card
          title="Total Investments"
          count={data?.totalInvestments}
          icon="fa-dollar-sign"
        />
        <Card
          title="Overall Deposts"
          count={data?.overallDeposts}
          icon="fa-comments"
        />
        <Card
          title="Overall Withdrawals"
          count={data?.overallWithdrawals}
          icon="fa-comments"
        />
        <Card
          title="Total Approved Deposits"
          count={data?.totalApprovedDeposits}
          icon="fa-comments"
        />
        <Card
          title="Total Approved Withdrawals"
          count={data?.totalApprovedWithdrawals}
          icon="fa-comments"
        />
        <Card
          title="Total Pending Deposits"
          count={data?.totalPendingDeposits}
          icon="fa-comments"
        />
        <Card
          title="Total Pending Withdrawals"
          count={data?.totalPendingWithdrawals}
          icon="fa-comments"
        />
        <Card
          title="Total Rejected Deposits"
          count={data?.totalRejectedDeposits}
          icon="fa-comments"
        />
      </div>
      {/*<div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Daily Overview
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <canvas id="myAreaChart" />
              </div>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Weekly Overview
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <canvas id="myAreaChart1" />
              </div>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                Monthly Overview
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-area">
                <canvas id="myAreaChart2" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">
                System Notifications{" "}
              </h6>
            </div>
            <div className="card-body">
              <div className="order system-notification">
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <i className="fas fa-user" />
                  </div>
                  <div className="col-md-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis, placeat!
                    </p>
                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Main>
  );
};

export default AdminDashboard;
