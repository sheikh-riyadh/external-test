import { baseApi } from "../../api/baseApi";

export const ibnsinaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getIbnasinaTest: build.query({
      query: (query) => ({
        url: `get-ibnsinatest?${query}`,
      }),
      providesTags: ["ibnsina"],
    }),
    createIbnsinatest: build.mutation({
      query: (data) => ({
        url: "ibntest-create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["ibnsina"],
    }),
    updateIbnsinatest: build.mutation({
      query: (data) => ({
        url: "update-inbsinatest",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ibnsina"],
    }),
    deleteIbnsinatest: build.mutation({
      query: (id) => ({
        url: `delete-ibnsinatest/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ibnsina"],
    }),
  }),
});

export const {
  useGetIbnasinaTestQuery,
  useCreateIbnsinatestMutation,
  useUpdateIbnsinatestMutation,
  useDeleteIbnsinatestMutation
} = ibnsinaApi;
