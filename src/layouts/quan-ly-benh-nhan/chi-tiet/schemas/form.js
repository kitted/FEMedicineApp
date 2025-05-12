const formPatient = {
  formId: "new-patient-form",
  formField: {
    username: {
      name: "username",
      label: "Tên bệnh nhân",
      type: "text",
      placeholder: "Nguyễn Văn A",
      errorMsg: "Tên bệnh nhân không được bỏ trống.",
    },
    sex: {
      name: "sex",
      label: "Giới tính",
      type: "text",
      placeholder: "Nam",
      errorMsg: "Giới tính không được bỏ trống.",
    },
    age: {
      name: "age",
      label: "Tuổi",
      type: "text",
      placeholder: "10",
      errorMsg: "Tuổi không được bỏ trống.",
    },
    address: {
      name: "address",
      label: "Địa chỉ",
      type: "text",
      placeholder: "kiên giang",
      errorMsg: "Địa chỉ không được bỏ trống.",
    },
  },
};

export default formPatient;
