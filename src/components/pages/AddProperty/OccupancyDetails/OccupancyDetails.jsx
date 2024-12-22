import PropTypes from "prop-types";
import Select from "../../../common/Select";
const OccupancyDetails = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Occupancy Details</span>
      <div>
        <Select
          {...register("occupancyStatus")}
          label="Occupancy Status"
          options={["Vacant", "Partially Occupied", "Fully Occupied"]}
          defaultValue="Vacant"
          required
        />
      </div>
    </div>
  );
};

OccupancyDetails.propTypes = {
  register: PropTypes.func,
};

export default OccupancyDetails;
