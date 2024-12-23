import PropTypes from "prop-types";
import { FaMapMarkerAlt } from "react-icons/fa";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useDeletePropertyMutation } from "../../../store/services/propertyApi/propertyApi";
import DeleteModal from "../../modals/DeleteModal";

const PropertyCard = ({ property }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const [deleteProperty, { isLoading }] = useDeletePropertyMutation();

  const navigate = useNavigate();

  const handleEdit = (items) => {
    if (items) {
      navigate("/update-property", {
        state: {
          payload: { ...items },
        },
      });
    }
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-card p-3 rounded-md border border-border-primary flex flex-col gap-y-2 text-primary">
      <div className="w-full h-52">
        <img
          className="w-full h-full rounded-md"
          src={property?.propertyImages?.[0]}
          alt="property_image"
        />
      </div>
      <div className="flex items-center justify-between gap-5">
        <span className="capitalize text-lg" title={property?.propertyName}>
          {property?.propertyName?.length > 15
            ? `${property?.propertyName?.slice(0, 15)}...`
            : property?.propertyName}
        </span>
        <span className="text-blue-600 font-medium">
          {numberWithCommas(property?.estimatedValue)} TK
        </span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          <span>{property?.state}</span>
          <span>{property?.country}</span>
        </div>
        <div className="flex items-center gap-3 text-primary font-semibold">
          <span onClick={() => handleEdit(property)} className="cursor-pointer">
            Edit
          </span>
          <span
            onClick={() => handleDelete(property?._id)}
            className="cursor-pointer"
          >
            Delete
          </span>
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          deleteId={deleteId}
          handleDeleteFunction={deleteProperty}
          isLoading={isLoading}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          key={"delete_modal"}
        />
      )}
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.object,
};
export default PropertyCard;
