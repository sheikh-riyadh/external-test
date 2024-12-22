import PropTypes from "prop-types";
import Input from "../../../common/Input";
import Select from "../../../common/Select";
const Ownership = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Ownership Details</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("ownerName")}
          label={"Owner Name"}
          required
          placeholder="Name of the property owner"
        />
        <Input
          {...register("ownerPhone")}
          label={"Phone Number"}
          required
          placeholder="Number of the property owner"
        />
        <Input
          {...register("ownerEmail")}
          label={"Email"}
          required
          placeholder="Email of the property owner"
          type="email"
        />
        <Select
          {...register("ownerType")}
          label="Owner Type"
          options={["Single Owner", "Joint Ownership","Corporate-Owned"]}
          defaultValue="Single Owner"
          required
        />
      </div>
    </div>
  );
};

Ownership.propTypes = {
  register: PropTypes.func,
};

export default Ownership;
