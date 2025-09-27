import { useForm } from "react-hook-form";
import { useGetInvoice } from "../../../hooks/useGetInvoice";
import Input from "../../common/Input";
import Select from "../../common/Select";
import SubmitButton from "../../common/SubmitButton";
import { useCreateIbnsinatestMutation } from "../../../store/services/ibnsinaApi/ibnsinaApi";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const IbnForm = ({setIsModalOpen}) => {
  const invoiceNumber = useGetInvoice();
  const { register, handleSubmit } = useForm();
  const [createTest, { isLoading }] = useCreateIbnsinatestMutation();

  const handleCreateIbnsinatest = async (data) => {
    const details = {
      ...data,
      invoice: invoiceNumber + data?.invoice,
    };

    const result = await createTest(details);
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsModalOpen(false)
    } else {
      toast.error("Something went wrong");
    }
  };

  const classes = "";
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreateIbnsinatest)}
        className="flex flex-col gap-5"
      >
        <Input
          {...register("ptName")}
          required
          placeholder="Patient Name"
          className={classes}
        />
        <Input
          {...register("invoice")}
          maxLength="4"
          required
          placeholder="Invoice Number"
          className={classes}
        />
        <Input
          {...register("test")}
          required
          placeholder="Test Name"
          className={classes}
        />
        <Input
          {...register("sendingDate")}
          required
          type="date"
          className={classes}
          title="Sending date"
        />
        <Select
          {...register("status")}
          selected="default"
          options={["default", "printed", "cancelled"]}
        />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

IbnForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default IbnForm;
