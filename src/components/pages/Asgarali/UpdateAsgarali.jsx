import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AsFormBody from "./AsFormBody";
import Modal from "../../modals/Modal";
import { FaEdit } from "react-icons/fa";
import SubmitButton from "../../common/SubmitButton";
import { useUpdateAsgaralitestMutation } from "../../../store/services/asgaraliApi/asgaraliApi";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

const UpdateAsgarali = ({ item }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [updatePopular, { isLoading }] = useUpdateAsgaralitestMutation();

  const handleUpdateAsgaraliTest = async (data) => {
    const query = {
      id: item?._id,
      data,
    };
    try {
      const result = await updatePopular(query);
      if (result?.data?.acknowledged) {
        toast.success("Update test successfully 😀", { id: "success" });
      }
    } catch (error) {
      toast.error("Something went wrong 😥", { id: error });
    }
  };

  useEffect(() => {
    for (const key in item) {
      if (Object.prototype.hasOwnProperty.call(item, key)) {
        if (key === "_id") {
          continue;
        } else {
          setValue(key, item[key]);
        }
      }
    }
  }, [setValue, item]);

  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-blue-600 duration-300"
        title="Delete"
        onClick={() => setIsFormOpen((prev) => !prev)}
      >
        <FaEdit className="text-white" />
      </span>
      {isFormOpen && (
        <Modal
          title={"Update"}
          className="w-[350px] xl:w-[500px]"
          onClose={setIsFormOpen}
          isOpen={isFormOpen}
        >
          <form
            onSubmit={handleSubmit(handleUpdateAsgaraliTest)}
            className="flex flex-col gap-5"
          >
            <AsFormBody register={register} />
            <SubmitButton isLoading={isLoading}>Update</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
};

UpdateAsgarali.propTypes = {
  item: PropTypes.object,
};

export default UpdateAsgarali;
