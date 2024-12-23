import toast from "react-hot-toast";
import { useUploadImageMutation } from "../../../../store/services/imageUpload/imageUploadApi";
import { ImSpinner9 } from "react-icons/im";
import { FaTrash, FaUpload } from "react-icons/fa";
import Input from "../../../common/Input";
import PropTypes from "prop-types";

const Location = ({ locationImage, setLocationImage }) => {
  const [uploadImage, { isLoading }] = useUploadImageMutation();

  /* Here we upload image */
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await uploadImage(formData).unwrap();
      if (response?.data?.display_url) {
        setLocationImage(response.data?.display_url);
      } else {
        toast.error("Something went wrong 😓", { id: "upload_error" });
      }
    } catch (error) {
      toast.error("Something went wrong 😓", { id: error });
    }
  };

  /* Remove image which is user want */
  const handleRemoveLocationImage = () => {
    setLocationImage("");
  };

  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Location image</span>
      <div>
        <div className={"h-44 w-full"}>
          <label
            htmlFor="location"
            className="rounded-full inline-block my-1 w-full"
          >
            <div
              className={`h-44 w-full border-2 border-border-primary border-dotted rounded-md relative flex flex-col items-center justify-center cursor-pointer overflow-hidden ${
                isLoading && "cursor-wait"
              }`}
            >
              {isLoading ? (
                <div className="absolute h-full w-full rounded bg-background flex items-center justify-center">
                  <ImSpinner9 className="animate-spin text-primary text-4xl" />
                </div>
              ) : (
                <p className="flex flex-col gap-1 items-center justify-center font-medium text-accent w-full h-full bg-background">
                  <FaUpload />
                  <span>Click to upload location</span>
                </p>
              )}
            </div>
          </label>

          <Input
            onChange={(event) => handleImageUpload(event)}
            className="hidden"
            id="location"
            type="file"
            accept="image/*"
            disabled={isLoading}
          />
        </div>
      </div>
      <div>
        {locationImage && (
          <div className="w-full h-[250px] relative border border-border-primary rounded-md overflow-hidden">
            <img
              className="h-full w-full"
              src={locationImage}
              alt="location_image"
            />

            <div
              onClick={handleRemoveLocationImage}
              className="w-6 h-6 bg-rose-600 flex flex-col items-center justify-center rounded-full absolute top-2 right-2 cursor-pointer text-white"
            >
              <FaTrash />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Location.propTypes = {
  locationImage: PropTypes.string,
  setLocationImage: PropTypes.func,
};

export default Location;
