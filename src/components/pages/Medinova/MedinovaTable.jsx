import { useState } from "react";
import Table from "../../common/Table";
import Pagination from "../../common/Pagination";
import NotFound from "../../common/NotFound";
import PropTypes from "prop-types";
import { useGetMedinovatestQuery } from "../../../store/services/medinovaApi/medinovaApi";
import UpdateMedinova from "./UpdateMedinova";
import DeleteMedinova from "./DeleteMedinova";

const MedinovaTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const query = new URLSearchParams({
    search,
    limit,
    page: currentPage,
  }).toString();

  const { data, isLoading } = useGetMedinovatestQuery(query);
  const pages = Math.ceil(Math.abs(data?.data?.total ?? 0) / parseInt(limit));

  return (
    <div className="rounded-md shadow-md">
      {!isLoading ? (
        <div>
          <Table
            className="font-normal"
            tableData={data?.data}
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
                      <UpdateMedinova item={item} />
                      <DeleteMedinova deleteId={item?._id} />
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
MedinovaTable.propTypes = {
  search: PropTypes.string,
};
export default MedinovaTable;
