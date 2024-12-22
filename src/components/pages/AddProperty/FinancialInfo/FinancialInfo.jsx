import PropTypes from "prop-types";
import Input from "../../../common/Input";
const FinancialInfo = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Financial Information</span>
      <div>
        <Input
          {...register("estimatedValue")}
          label={"Estimated Value"}
          required
          placeholder="Market value of the property"
        />
      </div>
      <div>
        <div>
          <span className="font-medium text-sm">
            {`Mortgage Details (if applicable)`}{" "}
          </span>
        </div>

        <div className="border border-border-primary p-5 mt-5 rounded-md grid lg:grid-cols-2 gap-5">
          <Input
            {...register("lenderName")}
            label={"Lender name"}
            placeholder="Lender name"
          />
          <Input
            {...register("outstandingAmount")}
            label={"Outstanding amount"}
            placeholder="Outstanding amount"
          />
          <Input
            {...register("monthlyPayment")}
            label={"Monthly payment amount"}
            placeholder="Monthly payment amount"
          />
          <Input
            {...register("monthlyPayment")}
            label={"Rental Income Potential"}
            placeholder="Average monthly rent if fully occupied."
          />
        </div>
      </div>
    </div>
  );
};

FinancialInfo.propTypes = {
  register: PropTypes.func,
};

export default FinancialInfo;
