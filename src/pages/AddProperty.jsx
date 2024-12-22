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

const AddProperty = () => {
  const { register, handleSubmit, watch } = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <GeneralInfo register={register} watch={watch} />
          <PropertyDetails register={register} />
          <Ownership register={register} />
          <FinancialInfo register={register} />
          <OccupancyDetails register={register} />
          <MaintenanceInfo register={register} />
          <Amenities register={register} />
          <AdditionalInfo register={register} />
          <div className="flex flex-col items-end justify-end">
            <SubmitButton className={"w-40"}>save</SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProperty;
