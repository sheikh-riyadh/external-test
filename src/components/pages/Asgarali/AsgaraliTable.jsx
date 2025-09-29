import { useState } from "react";
import NotFound from "../../common/NotFound";
import Pagination from "../../common/Pagination";
import Table from "../../common/Table";
import PropTypes from "prop-types";
import UpdateAsgarali from "./UpdateAsgarali";
import DeleteAsgarali from "./DeleteAsgarali";
import { useGetAsgaralitestQuery } from "../../../store/services/asgaraliApi/asgaraliApi";
import moment from "moment";

const AsgaraliTable = ({ search }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const query = new URLSearchParams({
    search,
    limit,
    page: currentPage,
  }).toString();

  const { data, isLoading } = useGetAsgaralitestQuery(query);
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
                name: "Patient Name",
                dataIndex: "ptName",
                key: "ptName",
              },
              {
                name: "Invoice",
                dataIndex: "invoice",
                key: "invoice",
              },
              {
                name: "Test Name",
                dataIndex: "test",
                key: "test",
              },
              {
                name: "UCN",
                dataIndex: "ucn",
                key: "ucn",
              },
              {
                name: "MR",
                dataIndex: "mr",
                key: "mr",
              },
              {
                name: "Status",
                render: ({ item }) => {
                  return (
                    <span
                      className={`capitalize ${
                        item?.status == "printed"
                          ? "bg-green-500 px-5 rounded-full py-1 font-medium"
                          : item?.status == "cancelled"
                          ? "bg-rose-500 px-5 rounded-full py-1 font-medium"
                          : null
                      }`}
                    >
                      {item?.status}
                    </span>
                  );
                },
              },
              {
                name: "Send",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <span>{moment(item?.sendingDate).format("ll")}</span>
                      <span>
                        {moment(item?.time, "HH:mm").format("hh:mm A")}
                      </span>
                    </div>
                  );
                },
              },

              {
                name: "Actions",
                render: ({ item }) => {
                  return (
                    <div className="flex items-center gap-2">
                      <UpdateAsgarali item={item} />
                      <DeleteAsgarali deleteId={item?._id} />
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
AsgaraliTable.propTypes = {
  search: PropTypes.string,
};
export default AsgaraliTable;
