import Input from "../../../common/Input";
import PropTypes from "prop-types";
import Select from "../../../common/Select";
import { business } from "../../../../data/country";
import { useEffect, useState } from "react";
import TextArea from "../../../common/TextArea";

const GeneralInfo = ({ register, watch }) => {
  const [cities, setCities] = useState([]);
  const name = watch("state") ?? "Dhaka";
  useEffect(() => {
    if (name) {
      const selectedDivision = business.countryData.find(
        (division) => division.name === name
      );
      setCities([...selectedDivision.districts]);
    }
  }, [name]);

  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">General Information</span>
      <div className="grid lg:grid-cols-2 gap-5">
        <Input
          {...register("propertyName")}
          label={"Property name"}
          required
          placeholder="Enter property name"
        />
        <Select
          {...register("propertyType")}
          label="Property type"
          options={[
            "Residential",
            "Commercial",
            "Industrial",
            "Mixed-Use",
            "Apartment",
            "House",
          ]}
          defaultValue="Commercial"
          required
        />
        <Select
          {...register("status")}
          label="Status"
          options={["Rented", "Available"]}
          defaultValue="Available"
          required
        />
        <Select
          {...register("country")}
          label="Country"
          options={["Bangladesh"]}
          defaultValue="Bangladesh"
          required
        />
        <Select
          {...register("state")}
          label="State"
          options={business.countryData.map((state) => state?.name)}
          defaultValue="Dhaka"
          required
        />
        <Select
          {...register("city")}
          label="City"
          options={cities?.map((city) => city)}
          defaultValue="Faridpur"
          required
        />
        <Input
          {...register("zipcode")}
          label={"Zipcode"}
          required
          placeholder="Enter zipcode"
        />
      </div>
      <TextArea
        {...register("description")}
        label="Description"
        className="h-24"
        placeholder="Description of the property (e.g., features, neighborhood)"
        required
      />
    </div>
  );
};

GeneralInfo.propTypes = {
  register: PropTypes.func,
  watch: PropTypes.func,
};

export default GeneralInfo;
