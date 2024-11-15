import PropTypes from "prop-types";
import "../assets/styles/progressbar.css";

export default function ProgressBar({ budgetUsageRate }) {
  let barColor;

  if (budgetUsageRate <= 30) {
    barColor = "blue";
  } else if (budgetUsageRate <= 60) {
    barColor = "green";
  } else if (budgetUsageRate <= 85) {
    barColor = "yellow";
  } else {
    barColor = "red";
  }

  return (
    <div className="progress_bar_wrapper">
      <div className="progress_bar_container">
        <div
          className={`progress_bar ${barColor}`}
          style={{ width: `${budgetUsageRate}%` }}
          aria-label={`Progress: ${budgetUsageRate}%`}
        />
      </div>
      <span className="progress_bar_percentage">{budgetUsageRate}%</span>
    </div>
  );
}

ProgressBar.propTypes = {
  budgetUsageRate: PropTypes.number.isRequired,
};
