import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdatePropertyMutation } from "../store/services/propertyApi/propertyApi";
import { useLocation, useNavigate } from "react-router";
import GeneralInfo from "../components/pages/AddProperty/GeneralInfo/GeneralInfo";
import PropertyDetails from "../components/pages/AddProperty/PropertyDetails/PropertyDetails";
import Ownership from "../components/pages/AddProperty/Ownership/Ownership";
import FinancialInfo from "../components/pages/AddProperty/FinancialInfo/FinancialInfo";
import OccupancyDetails from "../components/pages/AddProperty/OccupancyDetails/OccupancyDetails";
import MaintenanceInfo from "../components/pages/AddProperty/MaintenanceInfo/MaintenanceInfo";
import Amenities from "../components/pages/AddProperty/Amenities/Amenities";
import PropertyImages from "../components/pages/AddProperty/PropertyImages/PropertyImages";
import AdditionalInfo from "../components/pages/AddProperty/AdditionalInfo/AdditionalInfo";
import SubmitButton from "../components/common/SubmitButton";
import toast from "react-hot-toast";
import { smoothScroll } from "../utils/smoothScroll";

const UpdateProperty = () => {

  smoothScroll();


  /* Property image state */
  const [propertyImages, setPropertyImages] = useState([]);

  /* React hook form */
  const { register, handleSubmit, watch, setValue } = useForm({});
  const [handleUpdateProperty, { isLoading }] = useUpdatePropertyMutation();

  const location = useLocation();
  const updateData = location?.state?.payload;
  const navigate = useNavigate();

  /* Here we update the propery */
  const handleUpdate = async (data) => {
    if (!propertyImages?.length) {
      toast.error("Property image required", { id: "image_error" });
      return;
    }

    const updatePropertyData = {
      ...data,
      propertyImages,
    };

    try {
      const res = await handleUpdateProperty({
        _id: updateData?._id,
        data: updatePropertyData,
      });

      if (res?.data?.acknowledged) {
        toast.success("Property updated successfully", { id: "success" });
        navigate("/view-properties");
      }
    } catch (error) {
      toast.error("Something went wrong", { id: error });
    }
  };

  useEffect(() => {
    for (const key in updateData) {
      if (Object.prototype.hasOwnProperty.call(updateData, key)) {
        if (key === "_id") {
          continue;
        } else {
          setValue(key, updateData[key]);
        }
      }
    }
    setPropertyImages(updateData?.propertyImages);
  }, [updateData, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="flex flex-col gap-5">
          <GeneralInfo register={register} watch={watch} />
          <PropertyDetails register={register} />
          <Ownership register={register} />
          <FinancialInfo register={register} />
          <OccupancyDetails register={register} />
          <MaintenanceInfo register={register} />
          <Amenities register={register} />
          <PropertyImages
            propertyImages={propertyImages}
            setPropertyImages={setPropertyImages}
          />
          <AdditionalInfo register={register} />
          <div className="flex flex-col items-end justify-end">
            <SubmitButton isLoading={isLoading} className={"w-40"}>
              Update
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProperty;
