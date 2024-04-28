import Carousel from "../../../../../components/Carousel/Carousel";
import { selectprogramData } from "../../../../program/programSlice";
import { useSelector } from "react-redux";

const InvestmentProgram = () => {
  const programData = useSelector(selectprogramData);

  const renderInvestmentCard = (level) => (
    <div className="carousel-card">
      <h2>Level {level.level_Name}</h2>
      <div className="table-profit" id="table-profit">
        <table className="table active">
          <thead>
            <tr>
              <th>{level.level_Name}</th>
              <th className="text-center">Investment</th>
              <th className="text-end">Profit Percentage</th>
            </tr>
          </thead>
          <tbody>
            {level.data.map((item) => {
              const keysToCheck = [
                "investment",
                "profitPercentFrom",
                "profitPercentTo",
              ];
              if (keysToCheck.every((key) => key in item)) {
                const {
                  level: itemLevel,
                  investment,
                  profitPercentFrom,
                  profitPercentTo,
                } = item;

                return (
                  <tr key={itemLevel}>
                    <td>{level.level_Name+itemLevel}</td>
                    <td className="text-center">${investment}</td>
                    <td className="text-end">{`${profitPercentFrom}-${profitPercentTo}`}</td>
                  </tr>
                );
              } else {
                return null; // or another appropriate action
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
        <h2 className="text-red text-center">Investment Program</h2>
        <p className="mt-3 text-center">
          Offering 5 investment levels from A to E with varying profit
          percentages on each level. As you progress to higher investment
          levels, you can earn more substantial profits.
        </p>
        <div className="carousel-box">
          <Carousel
            items={Object.values(programData)}
            renderCard={renderInvestmentCard}
          />
        </div>
      </section>
    </>
  );
};

export default InvestmentProgram;
