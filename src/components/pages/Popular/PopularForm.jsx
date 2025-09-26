import { useGetInvoice } from "../../../hooks/useGetInvoice";
import Input from "../../common/Input";
import Select from "../../common/Select";
import SubmitButton from "../../common/SubmitButton";

const PopularForm = () => {
  const invoice = useGetInvoice()
  const classes = "";
  return (
    <div>
      <form className="flex flex-col gap-5">
        <Input required placeholder="Patient Name" className={classes} />
        <Input maxlength="4" required placeholder="Invoice Number" className={classes} />
        <Input placeholder="UHID" className={classes} />
        <Input required placeholder="Test Name" className={classes} />
        <Input required type="date" className={classes} title="Sending date" />
        <Select options={['default','printed', 'cancelled']}/>
        <SubmitButton>Save</SubmitButton>
      </form>
    </div>
  );
};

export default PopularForm;
