import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateMedinovatestMutation } from "../../../store/services/medinovaApi/medinovaApi";
import SubmitButton from "../../common/SubmitButton";
import MeFormBody from "./MeFormBody";
import PropTypes from "prop-types";

const MedinovaForm = ({ setIsModalOpen }) => {
  const [createMedinovaTest, { isLoading }] = useCreateMedinovatestMutation();
  const { register, handleSubmit } = useForm();

  const handleCreateMedinova = async (data) => {
    const result = await createMedinovaTest(data);
    if (result?.data?.acknowledged) {
      toast.success("Test added successfully", { id: "success" });
      setIsModalOpen(false);
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreateMedinova)}
        className="flex flex-col gap-5"
      >
        <MeFormBody register={register} />
        <SubmitButton isLoading={isLoading}>Save</SubmitButton>
      </form>
    </div>
  );
};

MedinovaForm.propTypes = {
  setIsModalOpen: PropTypes.func,
};
export default MedinovaForm;
