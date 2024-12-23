import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import PropertyCard from "../components/pages/ViewProperties/PropertyCard";
import ViewPropertiesSkeleton from "../components/skeleton/ViewProperties/ViewPropertiesSkeleton";
import { useGetPropertiesQuery } from "../store/services/propertyApi/propertyApi";
import no_data from "../assets/not-found.svg";
import Select from "../components/common/Select";
import { useSearchDelay } from "../hooks/useSearchDelay";

const ViewProperties = () => {
  const [status, setStatus] = useState();
  const { handleChange, searchValue } = useSearchDelay();
  const query = new URLSearchParams({
    status: status ?? "",
    search: searchValue,
  }).toString();

  const { data, isLoading } = useGetPropertiesQuery(query);

  return (
    <>
      {!isLoading ? (
        <div className="flex flex-col gap-10">
          <div className="grid xl:grid-cols-2">
            <span className="font-bold text-xl text-primary">
              All Properties
            </span>
            <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">{`Filter:`}</span>
                <Select
                  onChange={(event) => setStatus(event.target.value)}
                  className="bg-white w-30"
                  options={[
                    "Residential",
                    "Commercial",
                    "Industrial",
                    "Mixed-Use",
                    "Apartment",
                    "House",
                  ]}
                />
              </div>
              <Input
                onChange={handleChange}
                placeholder="Search..."
                className="bg-white w-full"
              />
              <Button className="w-36 hidden md:block">Find property</Button>
            </div>
          </div>
          <div>
            {data?.length ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {data?.map((property) => (
                  <PropertyCard key={property?._id} property={property} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-5 items-center justify-center mt-20">
                <img className="w-72" src={no_data} alt="no_data" />
                <span className="text-primary font-bold text-xl">
                  No Data found
                </span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <ViewPropertiesSkeleton />
      )}
    </>
  );
};

export default ViewProperties;
