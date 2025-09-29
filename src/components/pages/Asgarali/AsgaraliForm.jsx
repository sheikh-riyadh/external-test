import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import SubmitButton from "../../common/SubmitButton";
import { useCreateAsgaralitestMutation } from "../../../store/services/asgaraliApi/asgaraliApi";
import AsFormBody from "./AsFormBody";

const AsgaraliForm = ({ setIsModalOpen }) => {
  const [createAsgaraliTest, { isLoading }] = useCreateAsgaralitestMutation();
  const { register, handleSubmit } = useForm();

  const handleCreateAsgaraliTest = async (data) => {
    const result = await createAsgaraliTest(data);
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully 😀", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error("Something went wrong 😥");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreateAsgaraliTest)}
        className="flex flex-col gap-5"
      >
        <AsFormBody register={register} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};
AsgaraliForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};
export default AsgaraliForm;
