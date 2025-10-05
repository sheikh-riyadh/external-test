import { baseApi } from "../../api/baseApi";

export const asgaraliApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAsgaralitest: build.query({
      query: (query) => ({
        url: `get-asgaralitest?${query}`,
      }),
      providesTags: ["asgarali","overview"],
    }),
    createAsgaralitest: build.mutation({
      query: (data) => ({
        url: "asgaralitest-create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["asgarali","overview"],
    }),
    updateAsgaralitest: build.mutation({
      query: (data) => ({
        url: "update-asgaralitest",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["asgarali"],
    }),
    deleteAsgaralitest: build.mutation({
      query: (id) => ({
        url: `delete-asgaralitest/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["asgarali","overview"],
    }),
  }),
});

export const {
  useGetAsgaralitestQuery,
  useCreateAsgaralitestMutation,
  useUpdateAsgaralitestMutation,
  useDeleteAsgaralitestMutation,
} = asgaraliApi;
