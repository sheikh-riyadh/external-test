import { baseApi } from "../../api/baseApi";

export const medinovaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMedinovatest: build.query({
      query: (query) => ({
        url: `get-medinovatest?${query}`,
      }),
      providesTags: ["medinova","overview"],
    }),
    createMedinovatest: build.mutation({
      query: (data) => ({
        url: "medinovatest-create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["medinova","overview"],
    }),
    updateMedinovatest: build.mutation({
      query: (data) => ({
        url: "update-medinovatest",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["medinova"],
    }),
    deleteMedinovatest: build.mutation({
      query: (id) => ({
        url: `delete-medinovatest/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["medinova","overview"],
    }),
  }),
});

export const {
  useGetMedinovatestQuery,
  useCreateMedinovatestMutation,
  useUpdateMedinovatestMutation,
  useDeleteMedinovatestMutation,
} = medinovaApi;
