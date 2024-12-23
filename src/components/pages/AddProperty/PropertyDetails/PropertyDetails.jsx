import PropTypes from "prop-types";
import Input from "../../../common/Input";
const PropertyDetails = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Property Details</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("units")}
          label={"Number of Units"}
          placeholder="Market value of the property"
          required
        />
        <div className="py-2">
          <span className="font-medium text-sm text-primary mb-2 block">Unit Types</span>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                {...register("unitTypes.1BHK")}
                id="1BHK"
                value="1BHK"
              />
              <label className="text-sm" htmlFor="1BHK">1BHK</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                {...register("unitTypes.2BHK")}
                id="2BHK"
                value="2BHK"
              />
              <label className="text-sm" htmlFor="2BHK">2BHK</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                {...register("unitTypes.studio")}
                id="Studio"
                value="Studio"
              />
              <label className="text-sm" htmlFor="Studio">Studio</label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                {...register("unitTypes.officeSpace")}
                id="Office Space"
                value="Office Space"
              />
              <label className="text-sm" htmlFor="Office Space">Office Space</label>
            </div>
          </div>
        </div>
        <Input
          {...register("floorArea")}
          label={"Floor Area"}
          placeholder="Add a unit selector (e.g., sqft, sqm)"
        />
        <Input
          {...register("constructionYear")}
          label={"Construction Year"}
          placeholder="Year Picker"
          type="date"
        />
      </div>
    </div>
  );
};

PropertyDetails.propTypes = {
  register: PropTypes.func,
};

export default PropertyDetails;
