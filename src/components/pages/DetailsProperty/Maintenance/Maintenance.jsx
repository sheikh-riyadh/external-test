import PropTypes from "prop-types";
import Input from "../../../common/Input";

const Maintenance = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Maintenance Information</span>
      <div className=" grid lg:grid-cols-2 gap-5">
        <Input
          {...register("maintenanceContacts")}
          label={"Maintenance Contacts"}
          placeholder="Maintenance Contacts"
          defaultValue={"N/A"}
          disabled
        />
        <Input
          {...register("maintenanceSchedule")}
          label="Recurring Maintenance Schedule"
          defaultValue={"N/A"}
          disabled
        />
      </div>
    </div>
  );
};
Maintenance.propTypes = {
  register: PropTypes,
};

export default Maintenance;
