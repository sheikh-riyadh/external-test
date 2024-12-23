import PropTypes from "prop-types";
import Input from "../../../common/Input";
const Financial = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Financial Information</span>
      <div>
        <Input
          {...register("estimatedValue")}
          label={"Estimated Value"}
          placeholder="Market value of the property"
          defaultValue={"N/A"}
          disabled
        />
      </div>
      <div>
        <div className="border border-border-primary p-5 mt-5 rounded-md grid lg:grid-cols-2 gap-5">
          <Input
            {...register("lenderName")}
            label={"Lender name"}
            placeholder="Lender name"
            disabled
            defaultValue={"N/A"}
          />
          <Input
            {...register("outstandingAmount")}
            label={"Outstanding amount"}
            placeholder="Outstanding amount"
            disabled
            defaultValue={"N/A"}
          />
          <Input
            {...register("monthlyPayment")}
            label={"Monthly payment amount"}
            placeholder="Monthly payment amount"
            disabled
            defaultValue={"N/A"}
          />
          <Input
            {...register("rentalIncome")}
            label={"Rental Income Potential"}
            placeholder="Average monthly rent if fully occupied."
            disabled
            defaultValue={"N/A"}
          />
        </div>
      </div>
    </div>
  );
};

Financial.propTypes = {
  register: PropTypes.func,
};
export default Financial;
