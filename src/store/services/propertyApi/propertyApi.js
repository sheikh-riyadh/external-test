import { baseApi } from "../../api/baseApi";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProperties: build.query({
      query: () => ({
        url: `get-properties`,
      }),
      providesTags: ["properties"],
    }),
    createProperty: build.mutation({
      query: (data) => ({
        url: "create-property",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["properties"],
    }),
    updateProperty: build.mutation({
      query: (data) => ({
        url: "update-property",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["properties"],
    }),
    deleteProperty: build.mutation({
      query: (id) => ({
        url: `delete-propery?${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["properties"],
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  useCreatePropertyMutation,
  useUpdatePropertyMutation,
  useDeletePropertyMutation,
} = propertyApi;
