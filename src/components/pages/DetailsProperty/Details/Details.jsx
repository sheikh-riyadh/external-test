import PropTypes from "prop-types";
import Input from "../../../common/Input";
const Details = ({ register, data }) => {
  const types = Object.values(data);

  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Property Details</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("units")}
          label={"Number of Units"}
          placeholder="Market value of the property"
          disabled
          defaultValue={"N/A"}
        />
        <div className="py-2">
          <span className="font-medium text-sm text-primary mb-2 block">
            Unit Types
          </span>
          <div className="grid grid-cols-2 gap-2">
            {types?.map((type, index) => (
              <span key={index}>{type}</span>
            ))}
          </div>
        </div>
        <Input
          {...register("floorArea")}
          label={"Floor Area"}
          placeholder="Add a unit selector (e.g., sqft, sqm)"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("constructionYear")}
          label={"Construction Year"}
          placeholder="Year Picker"
          type="date"
          disabled
          defaultValue={"N/A"}
        />
      </div>
    </div>
  );
};

Details.propTypes = {
  register: PropTypes.func,
  data: PropTypes.object,
};
export default Details;
