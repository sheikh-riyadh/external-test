import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../../common/SubmitButton";
import Select from "../../common/Select";
import Input from "../../common/Input";
import PropTypes from "prop-types";
import { useUpdatePopulartestMutation } from "../../../store/services/popularApi/popularApi";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import Modal from "../../modals/Modal";

const UpdatePopular = ({ item }) => {
  const { register, setValue, handleSubmit } = useForm();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const classes = "";

  const [updatePopular, { isLoading }] = useUpdatePopulartestMutation();

  const handleUpdatePopular = async (data) => {
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
            onSubmit={handleSubmit(handleUpdatePopular)}
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
            <Input
              {...register("uhid")}
              placeholder="UHID"
              className={classes}
            />
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
            <SubmitButton isLoading={isLoading}>Update</SubmitButton>
          </form>
        </Modal>
      )}
    </>
  );
};

UpdatePopular.propTypes = {
  item: PropTypes.object,
};

export default UpdatePopular;
