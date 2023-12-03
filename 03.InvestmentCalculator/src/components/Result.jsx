import { formatter, calculateInvestmentResults } from "../util/investment";

export default function Result({ userInputs }) {
  const annualData = calculateInvestmentResults(userInputs);
  let totalInterest = 0;
  let totalInvestCap = userInputs.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <td>Year</td>
          <td>Investment Value</td>
          <td>Interest</td>
          <td>Total Interest</td>
          <td>Invested Capital</td>
        </tr>
      </thead>
      <tbody>
        {annualData.map((obj) => {
          totalInterest = totalInterest + obj.interest;
          totalInvestCap = totalInvestCap + obj.annualInvestment;
          return (
            <tr key={obj.year}>
              <td>{obj.year}</td>
              <td>{formatter.format(obj.valueEndOfYear)}</td>
              <td>{formatter.format(obj.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestCap)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
