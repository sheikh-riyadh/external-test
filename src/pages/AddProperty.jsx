import { useForm } from "react-hook-form";
import GeneralInfo from "../components/pages/AddProperty/GeneralInfo/GeneralInfo";
import PropertyDetails from "../components/pages/AddProperty/PropertyDetails/PropertyDetails";
import Ownership from "../components/pages/AddProperty/Ownership/Ownership";
import FinancialInfo from "../components/pages/AddProperty/FinancialInfo/FinancialInfo";
import OccupancyDetails from "../components/pages/AddProperty/OccupancyDetails/OccupancyDetails";
import MaintenanceInfo from "../components/pages/AddProperty/MaintenanceInfo/MaintenanceInfo";
import Amenities from "../components/pages/AddProperty/Amenities/Amenities";
import AdditionalInfo from "../components/pages/AddProperty/AdditionalInfo/AdditionalInfo";
import SubmitButton from "../components/common/SubmitButton";
import PropertyImages from "../components/pages/AddProperty/PropertyImages/PropertyImages";
import { useState } from "react";
import toast from "react-hot-toast";
import { useCreatePropertyMutation } from "../store/services/propertyApi/propertyApi";

const AddProperty = () => {
  /* React hook form */
  const { register, handleSubmit, watch, reset } = useForm();
  /* Property image state */
  const [propertyImages, setPropertyImages] = useState([]);

  const [handleCreateProperty, { isLoading }] = useCreatePropertyMutation();

  /* Here we create property */
  const handleAddProperty = async (data) => {
    if (!propertyImages?.length) {
      toast.error("Property image required", { id: "image_error" });
      return;
    }

    const propertyData = {
      ...data,
      propertyImages,
    };

    try {
      const res = await handleCreateProperty(propertyData);
      if (res?.data?.acknowledged && res?.data?.insertedId) {
        toast.success("Property created successfully", { id: "success" });
        reset();
        setPropertyImages([]);
      }
    } catch (error) {
      toast.error("Something went wrong", { id: error });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleAddProperty)}>
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
              save
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
