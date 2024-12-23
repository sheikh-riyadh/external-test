import PropTypes from "prop-types";

const AmenitiesInfo = ({ data }) => {
  const types = Object.values(data);
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Amenities</span>
      <div className="py-2">
        <div className="grid lg:grid-cols-3 gap-2">
          {types?.map((type, index) => (
            <span key={index}>{type}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

AmenitiesInfo.propTypes = {
  data: PropTypes.object,
};

export default AmenitiesInfo;
