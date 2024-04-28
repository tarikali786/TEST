import Carousel from "../../../../../components/Carousel/Carousel";
import { selectprogramData } from "../../../../program/programSlice";
import { useSelector } from "react-redux";

const ReferralProgram = () => {
  const programData = useSelector(selectprogramData);
  const renderRankCard = (level) => (
    <div className="carousel-card" key={level.level_Name}>
      <h2>Level {level.level_Name}</h2>
      <div className="table-profit" id="table-profit">
        <table className="table active">
          <thead>
            <tr>
              <th>Level {level.level_Name}</th>
              <th className="text-center">Credit Percentage</th>
              <th className="text-end">Profit Direct Referrals Required</th>
            </tr>
          </thead>
          <tbody>
            {level.data.map((item) => {
              const keysToCheck = [
                "creditPercentage",
                "directReferralsRequired",
              ];
              if (keysToCheck.every((key) => key in item)) {
                const {
                  creditPercentage,
                  directReferralsRequired,
                  level: itemLevel,
                } = item;
                return (
                  <tr key={`${itemLevel}`}>
                    <td>{`${level.level_Name + itemLevel}`}</td>
                    <td className="text-center">
                      {creditPercentage.$numberDecimal}
                    </td>
                    <td className="text-end">{directReferralsRequired}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
  return (
    <>
      <section>
        <h2 className="text-red text-center">Rank Program</h2>
        <p className="mt-3 text-center">
          Our referral program has five levels from A to E each offering
          different credit percentages. Your referral level corresponds to your
          investment level, and as you increase your investment, you'll also
          advance to higher referral levels.
        </p>
        <div className="carousel-box">
          <Carousel
            items={Object.values(programData)}
            renderCard={renderRankCard}
            cardName="referralProgram"
          />
        </div>
      </section>
    </>
  );
};

export default ReferralProgram;
