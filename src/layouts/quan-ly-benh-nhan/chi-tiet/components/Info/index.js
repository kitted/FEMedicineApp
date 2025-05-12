/* eslint-disable react/prop-types */
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftSelect from "components/SoftSelect";

// NewUser page components
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import FormField from "../FormField";

function Info({ formData }) {
  const { formField, values, errors, touched, getData, onChangeValue, setFieldValue } = formData;
  const { username, age, sex, address } = formField;
  console.log({ formField });
  const { username: usernameV, age: ageV, sex: sexV, address: addressV } = values;
  const { id } = useParams();

  const [isPayload, setIsPayload] = useState({});
  const [sexValue, setSexValue] = useState({});

  const currentPath = window.location.pathname;
  const containsEdit = currentPath.includes("edit");

  useEffect(() => {}, [isPayload]);

  useEffect(() => {
    if (Object.keys(getData).length > 0) {
      setFieldValue(username.name, getData?.username || "--");
      setFieldValue(age.name, getData?.age || "--");
      setFieldValue(address.name, getData?.address || "--");
      setSexValue({
        value: getData?.sex,
        label: getData?.sex === "male" ? "Nam" : "Nữ",
      });
    }
  }, [getData]);

  if (id && containsEdit && (!getData || Object.keys(getData).length === 0)) {
    return <>Loading...</>;
  }
  const handleSetSexValue = (value) => {
    setSexValue({ value: value, label: value === "male" ? "Nam" : "Nữ" });
    setFieldValue(sex.name, value);
  };
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          {id && containsEdit ? "Cập nhật" : id ? "Chi tiết" : "Tạo mới"}
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <FormField
              type={username.type}
              label={username.label}
              name={username.name}
              value={usernameV}
              error={errors.username && touched.username}
              disabled={id && !containsEdit}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={age.type}
              label={age.label}
              name={age.name}
              value={ageV}
              error={errors.age && touched.age}
              disabled={id && !containsEdit}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <SoftBox display="flex" flexDirection="column">
              {id && !containsEdit ? (
                <FormField
                  type={sex.type}
                  label={sex.label}
                  name={sex.name}
                  value={sexV === "male" ? "Nam" : "Nữ"}
                  error={errors.sex && touched.sex}
                  disabled={true}
                />
              ) : (
                <SoftBox paddingTop={"3px"} display="block">
                  <SoftTypography
                    component="label"
                    variant="caption"
                    fontWeight="bold"
                    mb={0.5}
                    pl={0.8}
                  >
                    {sex.label}
                  </SoftTypography>
                  <SoftSelect
                    value={sexValue}
                    onChange={(e) => handleSetSexValue(e.value)}
                    options={[
                      { value: "male", label: "Nam" },
                      { value: "female", label: "Nữ" },
                    ]}
                  />
                </SoftBox>
              )}
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={address.type}
              label={address.label}
              name={address.name}
              value={addressV}
              error={errors.address && touched.address}
              disabled={id && !containsEdit}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
Info.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Info;
