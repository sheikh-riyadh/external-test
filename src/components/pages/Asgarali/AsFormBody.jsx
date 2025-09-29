import Input from "../../common/Input";
import Select from "../../common/Select";
import PropTypes from "prop-types";

const AsFormBody = ({ register }) => {
  const classes = "";
  return (
    <>
      <Input
        {...register("ptName")}
        required
        placeholder="Name"
        className={classes}
      />
      <Input
        {...register("invoice")}
        maxlength="9"
        required
        placeholder="Invoice"
        className={classes}
      />
      <Input
        {...register("test")}
        required
        placeholder="Test Name"
        className={classes}
      />
      <Input {...register("hvn")} placeholder="HCN" className={classes} />
      <Input {...register("mr")} placeholder="MR" className={classes} />
      <div className="grid grid-cols-2 gap-5">
        <Input
          {...register("sendingDate")}
          required
          type="date"
          className={classes}
          title="Sending date"
        />
        <Input
          {...register("time")}
          required
          type="time"
          className={classes}
          title="time"
        />
      </div>
      <Select
        {...register("status")}
        defaultValue="default"
        options={["default", "printed", "cancelled"]}
      />
    </>
  );
};
AsFormBody.propTypes = {
  register: PropTypes.func,
};
export default AsFormBody;
