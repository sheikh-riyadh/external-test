import PropTypes from "prop-types";
import Input from "../../../common/Input";

const OwnershipInfo = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Ownership Details</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("ownerName")}
          label={"Owner Name"}
          disabled
          defaultValue={"N/A"}
          placeholder="Name of the property owner"
        />
        <Input
          {...register("ownerPhone")}
          label={"Phone Number"}
          disabled
          defaultValue={"N/A"}
          placeholder="Number of the property owner"
        />
        <Input
          {...register("ownerEmail")}
          label={"Email"}
          disabled
          defaultValue={"N/A"}
          placeholder="Email of the property owner"
          type="email"
        />
        <Input
          {...register("ownerType")}
          label="Owner Type"
          disabled
          defaultValue={"N/A"}
        />
      </div>
    </div>
  );
};

OwnershipInfo.propTypes = {
  register: PropTypes.func,
};

export default OwnershipInfo;
