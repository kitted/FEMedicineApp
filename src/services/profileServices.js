import AxiosInstance from "./api";

export const ProfileService = {
  getAll: async (id, params) => {
    return await AxiosInstance.get(`/admin/profile/patient/${id}`, { params: params });
  },
  getById: async (id) => {
    return await AxiosInstance.get(`/admin/profile/${id}`);
  },
  update: async (id, payload) => {
    return await AxiosInstance.patch(`/admin/profile/${id}`, payload);
  },
  create: async (payload) => {
    return await AxiosInstance.post(`/admin/profile`, payload);
  },
  delete: async (id) => {
    return await AxiosInstance.delete(`/admin/profile/${id}`);
  },
};
