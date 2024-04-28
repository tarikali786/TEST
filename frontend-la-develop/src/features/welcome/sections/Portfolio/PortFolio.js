import React from "react";
import InvestmentProgram from "./components/InvestmentProgram";
import ReferralProgram from "./components/ReferralProgram";
import RankProgram from "./components/RankProgram";

const PrortFolio = () => {
  return (
    <section className="portfolio mb-5" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="portfolio-sec text-center">
              <InvestmentProgram />
              <ReferralProgram />
              <RankProgram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrortFolio;
