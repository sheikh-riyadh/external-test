import PropTypes from "prop-types";
import TextArea from "../../../common/TextArea";
const AdditionalInfo = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Notes or Additional Information</span>
      <div>
        <TextArea
          {...register("additionalInfo")}
          label="Additional Information"
          className="h-24"
          placeholder="Additional Information"
        />
      </div>
    </div>
  );
};

AdditionalInfo.propTypes = {
  register: PropTypes.func,
};

export default AdditionalInfo;
