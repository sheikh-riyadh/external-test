import PropTypes from "prop-types";
import Input from "../../../common/Input";
import TextArea from "../../../common/TextArea";

const General = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">General Information</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("propertyName")}
          label={"Property name"}
          placeholder="Enter property name"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("propertyType")}
          label="Property type"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("status")}
          label="Status"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("country")}
          label="Country"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("state")}
          label="State"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("city")}
          label="City"
          disabled
          defaultValue={"N/A"}
        />
        <Input
          {...register("zipcode")}
          label={"Zipcode"}
          disabled
          defaultValue={"N/A"}
          placeholder="Enter zipcode"
        />
      </div>
      <TextArea
        {...register("description")}
        label="Description"
        className="h-24"
        placeholder="Description of the property (e.g., features, neighborhood)"
        disabled
        defaultValue={"N/A"}
      />
    </div>
  );
};

General.propTypes = {
  register: PropTypes.func,
};

export default General;
