import { useState } from "react";
import Table from "../../common/Table";
import Pagination from "../../common/Pagination";
import NotFound from "../../common/NotFound";
import PropTypes from "prop-types";

const PopularTable = ({ search }) => {
  const isLoading = false;

  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const query = new URLSearchParams({
    search,
    limit,
    page: currentPage,
  }).toString();

  const data = {
    total: 30,
  };
  const pages = Math.ceil(Math.abs(data?.total ?? 0) / parseInt(limit));

  return (
    <div className="rounded-md shadow-md">
      {!isLoading ? (
        <div>
          <Table
            className="font-normal"
            tableData={[]}
            columns={[
              {
                name: "Category",
                dataIndex: "category",
                key: "category",
              },
              {
                name: "Image",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2 h-12 w-12">
                      <img
                        className="w-full h-full"
                        src={item?.image}
                        alt="category"
                      />
                    </div>
                  );
                },
              },

              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      {/* <UpdateCategory item={item} />
                      <DeleteCategory deleteId={item?._id} /> */}
                    </div>
                  );
                },
              },
            ]}
          />

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setLimit={setLimit}
            pages={pages}
            key={"categories_pagination"}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
PopularTable.propTypes = {
  search: PropTypes.string,
};
export default PopularTable;
