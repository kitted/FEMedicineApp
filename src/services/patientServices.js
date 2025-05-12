import AxiosInstance from "./api";

export const PatientService = {
  getAll: async (params) => {
    return await AxiosInstance.get(`/admin/patient/paginate`, { params: params });
  },
  getById: async (id) => {
    return await AxiosInstance.get(`/admin/patient/${id}`);
  },
  update: async (id, payload) => {
    return await AxiosInstance.patch(`/admin/patient/${id}`, payload);
  },
  create: async (payload) => {
    return await AxiosInstance.post(`/admin/patient`, payload);
  },
  delete: async (id) => {
    return await AxiosInstance.delete(`/admin/patient/${id}`);
  },
};
