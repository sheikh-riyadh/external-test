import { useForm } from "react-hook-form";
import { useCreatePopulartestMutation } from "../../../store/services/popularApi/popularApi";
import Input from "../../common/Input";
import Select from "../../common/Select";
import SubmitButton from "../../common/SubmitButton";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const PopularForm = ({ setIsModalOpen }) => {
  const [createPopularTest, { isLoading }] = useCreatePopulartestMutation();
  const { register, handleSubmit } = useForm();

  const handleCreatePopular = async (data) => {
    const result = await createPopularTest(data);
    console.log(result)
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  const classes = "";
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreatePopular)}
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
          maxlength="9"
          required
          placeholder="Invoice Number"
          className={classes}
        />
        <Input {...register("uhid")} placeholder="UHID" className={classes} />
        <Input
          {...register("test")}
          required
          placeholder="Test Name"
          className={classes}
        />
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
          selected="default"
          options={["default", "printed", "cancelled"]}
        />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

PopularForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};

export default PopularForm;
