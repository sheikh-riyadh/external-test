import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { FaMapMarkerAlt} from "react-icons/fa";
import General from "../components/pages/DetailsProperty/General/General";
import Details from "../components/pages/DetailsProperty/Details/Details";
import OwnershipInfo from "../components/pages/DetailsProperty/OwnershipInfo/OwnershipInfo";
import Financial from "../components/pages/DetailsProperty/Financial/Financial";
import Occupancy from "../components/pages/DetailsProperty/Occupancy/Occupancy";
import Maintenance from "../components/pages/DetailsProperty/Maintenance/Maintenance";
import AmenitiesInfo from "../components/pages/DetailsProperty/AmenitiesInfo/AmenitiesInfo";
import Notes from "../components/pages/DetailsProperty/Notes/Notes";
import user from "../assets/pd-person.jpg"

const DetailsProperty = () => {
  /* React hook form */
  const { register, setValue } = useForm({});

  /* Get property data */
  const location = useLocation();
  const propertyData = location?.state?.payload;

  /* Set property data which is user added */
  useEffect(() => {
    for (const key in propertyData) {
      if (Object.prototype.hasOwnProperty.call(propertyData, key)) {
        if (key === "_id") {
          continue;
        } else {
          setValue(key, propertyData[key]);
        }
      }
    }
  }, [propertyData, setValue]);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-12 gap-5 p-5 bg-card rounded-md border border-border-primary">
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-5">
            <img
              className="w-full rounded-md"
              src={propertyData?.propertyImages?.[0]}
              alt="property-image"
            />
            {propertyData?.propertyImages?.length && (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {propertyData.propertyImages.slice(1).map((image) => (
                  <img
                    key={image}
                    className="w-full rounded-md h-24"
                    src={image}
                    alt="property-image"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 gap-5">
          <div className="bg-background rounded-md p-5 border border-border-primary">
            <div className="flex flex-col gap-2 items-center justify-center h-full text-primary">
              <div className="w-24 h-24 flex flex-col items-center justify-center border border-border-primary p-2 rounded-full">
                <img src={user} alt="user" className="w-24 h-24 rounded-full" />
              </div>
              <span>Amanda</span>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>Dhaka</span>
                <span>Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-md border border-border-primary">
            <div className="flex flex-col items-center justify-center h-full">
              <img className="h-full rounded-md" src={propertyData?.location} alt="location"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5">
          <General register={register} />
          <Details register={register} data={propertyData?.unitTypes} />
          <OwnershipInfo register={register} />
          <Financial register={register} />
          <Occupancy register={register} />
          <Maintenance register={register} />
          <AmenitiesInfo data={propertyData?.amenities} />
          <Notes register={register} />
        </div>
      </div>
    </div>
  );
};

export default DetailsProperty;
