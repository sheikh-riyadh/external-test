import Input from "../../common/Input";
import Select from "../../common/Select";
import SubmitButton from "../../common/SubmitButton";


const MedinovaForm = () => {
  const classes = "";
  return (
    <div>
      <form className="flex flex-col gap-5">
        <Input placeholder="Patient Name" className={classes} />
        <Input placeholder="Invoice Number" className={classes} />
        <Input placeholder="UHID" className={classes} />
        <Input placeholder="Test Name" className={classes} />
        <Input type="date" className={classes} title="Sending date" />
        <Select options={['printed', 'cancelled']}/>
        <SubmitButton>Save</SubmitButton>
      </form>
    </div>
  );
};

export default MedinovaForm;
