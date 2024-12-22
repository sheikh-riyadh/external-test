import PropTypes from "prop-types";
const Amenities = ({ register }) => {
  return (
    <div className="bg-card p-5 rounded-md text-primary flex flex-col gap-5 border border-border-primary">
      <span className="font-bold">Amenities</span>
      <div className="py-2">
        <div className="grid lg:grid-cols-3 gap-2">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.parking")}
              id="Parking"
              value="Parking"
            />
            <label className="text-sm" htmlFor="Parking">
              Parking
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.gym")}
              id="Gym"
              value="Gym"
            />
            <label className="text-sm" htmlFor="Gym">
              Gym
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.pool")}
              id="Pool"
              value="Pool"
            />
            <label className="text-sm" htmlFor="Pool">
              Pool
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.security")}
              id="Security"
              value="Security"
            />
            <label className="text-sm" htmlFor="Security">
              Security
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.elevator")}
              id="Elevator"
              value="Elevator"
            />
            <label className="text-sm" htmlFor="Elevator">
              Elevator
            </label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              {...register("amenities.garden")}
              id="Garden"
              value="Garden"
            />
            <label className="text-sm" htmlFor="Garden">
              Garden
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

Amenities.propTypes = {
  register: PropTypes.func,
};

export default Amenities;
