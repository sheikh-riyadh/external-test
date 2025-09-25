import Input from "../../common/Input";
import SubmitButton from "../../common/SubmitButton";

const PopularForm = () => {
  const classes = "";
  return (
    <div>
      <form className="flex flex-col gap-5">
        <Input placeholder="Patient Name" className={classes} />
        <Input placeholder="Invoice Number" className={classes} />
        <Input placeholder="UHID" className={classes} />
        <Input placeholder="Test Name" className={classes} />
        <Input type="date" className={classes} title="Sending date" />
        <Input type="date" className={classes} title="Delivery date" />
        <SubmitButton>Save</SubmitButton>
      </form>
    </div>
  );
};

export default PopularForm;
