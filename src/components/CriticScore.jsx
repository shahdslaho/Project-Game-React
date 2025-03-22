import PropTypes from 'prop-types';

const CriticScore = ({ score }) => {
    let color = score > 75 ? "orange" : score > 60 ? "yellow" : "";
    return (
        <span className={`bg-${color}-600 text-${color}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${color} dark:text-${color}-300`}>
            {score}
        </span>
    );
};

CriticScore.propTypes = {
    score: PropTypes.number.isRequired
};

export default CriticScore;
