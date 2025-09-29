import { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "../../modals/DeleteModal";
import { useDeleteMedinovatestMutation } from "../../../store/services/medinovaApi/medinovaApi";

const DeleteMedinova = ({ deleteId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteMedinovaTest, { isLoading }] = useDeleteMedinovatestMutation();
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
          handleDeleteFunction={deleteMedinovaTest}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          key={"delete"}
        />
      )}
    </>
  );
};

DeleteMedinova.propTypes = {
  deleteId: PropTypes.string,
};

export default DeleteMedinova;
