import PropTypes from "prop-types";
import Input from "../../../common/Input";

const Occupancy = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Occupancy Details</span>
      <div>
        <Input
          {...register("occupancyStatus")}
          label="Occupancy Status"
          defaultValue={"N/A"}
          disabled
        />
      </div>
    </div>
  );
};

Occupancy.propTypes = {
  register: PropTypes,
};

export default Occupancy;
