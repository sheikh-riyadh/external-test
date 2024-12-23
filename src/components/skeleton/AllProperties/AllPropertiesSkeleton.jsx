const AllPropertiesSkeleton = () => {
  return (
    <div className="flex flex-col gap-10 animate-pulse">
      {/* Header Section */}
      <div className="grid xl:grid-cols-2">
        <span className="bg-gray-300 h-8 w-32 rounded"></span>
        <div className="flex items-center gap-3 justify-end mt-5 xl:mt-0">
          <div className="bg-gray-300 h-10 w-full rounded"></div>
          <div className="bg-gray-300 h-10 w-36 rounded"></div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="grid lg:grid-cols-3 gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-64 rounded shadow-md"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default AllPropertiesSkeleton;
