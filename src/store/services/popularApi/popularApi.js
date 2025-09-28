import { baseApi } from "../../api/baseApi";


export const popularApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPopulartest: build.query({
      query: (query) => ({
        url: `get-populartest?${query}`,
      }),
      providesTags: ["popular"],
    }),
    createPopulartest: build.mutation({
      query: (data) => ({
        url: "populartest-create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["popular"],
    }),
    updatePopulartest: build.mutation({
      query: (data) => ({
        url: "update-populartest",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["popular"],
    }),
    deletePopulartest: build.mutation({
      query: (id) => ({
        url: `delete-populartest/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["popular"],
    }),
  }),
});

export const {
  useGetPopulartestQuery,
  useCreatePopulartestMutation,
  useUpdatePopulartestMutation,
  useDeletePopulartestMutation,
} = popularApi;
