import PropTypes from "prop-types";
import Select from "../../../common/Select";
import Input from "../../../common/Input";
const MaintenanceInfo = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Maintenance Information</span>
      <div className=" grid lg:grid-cols-2 gap-5">
        <Input
          {...register("maintenanceContacts")}
          label={"Maintenance Contacts"}
          placeholder="Maintenance Contacts"
        />
        <Select
          {...register("maintenanceSchedule")}
          label="Recurring Maintenance Schedule"
          options={["Monthly", "Quarterly", "Bi-Annually", "Annually"]}
          defaultValue="Monthly"
        />
      </div>
    </div>
  );
};

MaintenanceInfo.propTypes = {
  register: PropTypes.func,
};

export default MaintenanceInfo;
