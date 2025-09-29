import { FaTrash } from "react-icons/fa6";
import DeleteModal from "../../modals/DeleteModal";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDeleteAsgaralitestMutation } from "../../../store/services/asgaraliApi/asgaraliApi";

const DeleteAsgarali = ({ deleteId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteAsgarAliTest, { isLoading }] = useDeleteAsgaralitestMutation();
  return (
    <>
      <span
        className="text-danger cursor-pointer border border-danger text-center p-2 rounded-full bg-rose-500 duration-300"
        title="Delete"
        onClick={() => setIsModalOpen((prev) => !prev)}
      >
        <FaTrash className="text-white" />
      </span>

      {isModalOpen && (
        <DeleteModal
          deleteId={deleteId}
          handleDeleteFunction={deleteAsgarAliTest}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          key={"delete"}
        />
      )}
    </>
  );
};
DeleteAsgarali.propTypes = {
  deleteId: PropTypes.string,
};
export default DeleteAsgarali;
