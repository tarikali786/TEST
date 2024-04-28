import React from "react";
import Carousel from "../../../../../components/Carousel/Carousel";

const RankProgram = () => {
  const salesData = [
    {
      Rank_Name: "1",
      Rewards: "$300-500",
      monthly_sales_required: "$10K-15K",
      Direct_Referrals_Required: "25",
      Weekly_Zoom_Meetings_Required: "5",
    },
    {
      Rank_Name: "2",
      Rewards: "$750-1500",
      monthly_sales_required: "$30K-50K",
      Direct_Referrals_Required: "25",
      Weekly_Zoom_Meetings_Required: "5",
    },
    {
      Rank_Name: "3",
      Rewards: "$2000-2500",
      monthly_sales_required: "$75K-100K",
      Direct_Referrals_Required: "50",
      Weekly_Zoom_Meetings_Required: "4",
    },
    {
      Rank_Name: "4",
      Rewards: "$3000-7500",
      monthly_sales_required: "$150K-300K",
      Direct_Referrals_Required: "50",
      Weekly_Zoom_Meetings_Required: "4",
    },
    {
      Rank_Name: "5",
      Rewards: "$10,000-20,000",
      monthly_sales_required: "$500K-1M",
      Direct_Referrals_Required: "100",
      Weekly_Zoom_Meetings_Required: "3",
    },
  ];
  const renderRankCard = (item) => (
    <div className="carousel-card" key={item.Rank_Name}>
      <h2>Level {item.Rank_Name.charAt(0)}</h2>
      <div className="table-profit" id="table-profit">
        <table className="table active">
          <thead>
            <tr>
              <th>Rank Names</th>
              <th>Rewards</th>
              <th>Monthly Sales Required</th>
              <th>Direct Referrals Required</th>
              <th>Weekly Zoom Meetings Required</th>
            </tr>
          </thead>
          <tbody>
            <tr key={item.Rank_Name}>
              <td>Leader {item.Rank_Name}</td>
              <td>{item.Rewards}</td>
              <td>{item.monthly_sales_required}</td>
              <td>{item.Direct_Referrals_Required}</td>
              <td>{item.Weekly_Zoom_Meetings_Required}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
  return (
    <>
      <section>
        <h2 className="text-red text-center">Investment Program</h2>
        <p className="mt-3 text-center">
          Our rank rewards program has five prestigious rank positions from
          (Leader 1 to Leader 5). Earn rewards ranging from $300 to $20,000 by
          achieving your monthly sales of $10,000 to $1M.
        </p>
        <div className="carousel-box">
          <Carousel items={salesData} renderCard={renderRankCard} />
        </div>
      </section>
    </>
  );
};

export default RankProgram;
