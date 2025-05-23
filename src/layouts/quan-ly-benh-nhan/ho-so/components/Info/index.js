/* eslint-disable react/prop-types */
/* eslint-disable-next-line */
// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import SoftSelect from "components/SoftSelect";

// NewUser page components
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import FormField from "../FormField";

function InfoHoSo({ formData }) {
  const { formField, values, errors, touched, getData, setFieldValue } = formData;
  const {
    rhythm,
    frequency,
    cycle,
    axis,
    corner,
    waveP,
    distancePR,
    QRS,
    waveT,
    ST,
    distanceST,
    distanceQT,
    conclude,
    diagnosis,
    result,
  } = formField;
  const {
    rhythm: rhythmV,
    frequency: frequencyV,
    // cycle: cycleV,
    axis: axisV,
    corner: cornerV,
    waveP: wavePV,
    distancePR: distancePRV,
    QRS: QRSV,
    waveT: waveTV,
    ST: STV,
    distanceST: distanceSTV,
    distanceQT: distanceQTV,
    conclude: concludeV,
    diagnosis: diagnosisV,
    result: resultV,
  } = values;
  const { id } = useParams();

  // const [isPayload, setIsPayload] = useState({});
  // const [sexValue, setSexValue] = useState({});

  const currentPath = window.location.pathname;
  const containsEdit = currentPath.includes("edit");

  // useEffect(() => {}, [isPayload]);

  useEffect(() => {
    if (Object.keys(getData).length > 0) {
      // setFieldValue(address.name, getData?.address || "--");
      setFieldValue(rhythm.name, "Xoang");
      setFieldValue(frequency.name, "Chu kỳ/phút, đều");
      setFieldValue(cycle.name, "--");
      setFieldValue(axis.name, "--");
      setFieldValue(corner.name, " độ");
      setFieldValue(waveP.name, "ở DII hình dạng tròn đều, 0.08s, 1mm");
      setFieldValue(distancePR.name, "0,16s");
      setFieldValue(QRS.name, "Dạng nhọn hẹp, không có Q bệnh lý, Sokolov-lyon > 35mm");
      setFieldValue(waveT.name, "Dương không cân đối từ V2-V6");
      setFieldValue(ST.name, "--");
      setFieldValue(distanceST.name, "Đẳng điện, không tạo góc với sóng T");
      setFieldValue(distanceQT.name, "0.36s");
      setFieldValue(conclude.name, "--");
      setFieldValue(diagnosis.name, "--");
      setFieldValue(result.name, "--");
    }
  }, [
    QRS.name,
    ST.name,
    axis.name,
    conclude.name,
    corner.name,
    cycle.name,
    diagnosis.name,
    distancePR.name,
    distanceQT.name,
    distanceST.name,
    frequency.name,
    getData,
    result.name,
    rhythm.name,
    setFieldValue,
    waveP.name,
    waveT.name,
  ]);

  if (id && containsEdit && (!getData || Object.keys(getData).length === 0)) {
    return <>Loading...</>;
  }
  // const handleSetSexValue = (value) => {
  //   setSexValue({ value: value, label: value === "male" ? "Nam" : "Nữ" });
  //   setFieldValue(sex.name, value);
  // };
  return (
    <SoftBox>
      <SoftBox lineHeight={0}>
        <SoftTypography variant="h5" fontWeight="bold">
          Thông số ECG
        </SoftTypography>
      </SoftBox>
      <SoftBox mt={1.625}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type={rhythm.type}
              label={rhythm.label}
              name={rhythm.name}
              value={rhythmV}
              error={errors.rhythm && touched.rhythm}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={frequency.type}
              label={frequency.label}
              name={frequency.name}
              value={frequencyV}
              error={errors.frequency && touched.frequency}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <FormField
              type={cycle.type}
              label={cycle.label}
              name={cycle.name}
              value={cycleV}
              error={errors.cycle && touched.cycle}
            />
          </Grid> */}
          <Grid item xs={12} sm={6}>
            <FormField
              type={axis.type}
              label={axis.label}
              name={axis.name}
              value={axisV}
              error={errors.axis && touched.axis}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={corner.type}
              label={corner.label}
              name={corner.name}
              value={cornerV}
              error={errors.corner && touched.corner}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={distanceQT.type}
              label={distanceQT.label}
              name={distanceQT.name}
              value={distanceQTV}
              error={errors.distanceQT && touched.distanceQT}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type={distancePR.type}
              label={distancePR.label}
              name={distancePR.name}
              value={distancePRV}
              error={errors.distancePR && touched.distancePR}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={distanceST.type}
              label={distanceST.label}
              name={distanceST.name}
              value={distanceSTV}
              error={errors.distanceST && touched.distanceST}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={waveP.type}
              label={waveP.label}
              name={waveP.name}
              value={wavePV}
              error={errors.waveP && touched.waveP}
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={QRS.type}
              label={QRS.label}
              name={QRS.name}
              value={QRSV}
              error={errors.QRS && touched.QRS}
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={waveT.type}
              label={waveT.label}
              name={waveT.name}
              value={waveTV}
              error={errors.waveT && touched.waveT}
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={ST.type}
              label={ST.label}
              name={ST.name}
              value={STV}
              error={errors.ST && touched.ST}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={conclude.type}
              label={conclude.label}
              name={conclude.name}
              value={concludeV}
              error={errors.conclude && touched.conclude}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormField
              type={diagnosis.type}
              label={diagnosis.label}
              name={diagnosis.name}
              value={diagnosisV}
              error={errors.diagnosis && touched.diagnosis}
              multiline
              rows={5}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={12}>
            <FormField
              type={result.type}
              label={result.label}
              name={result.name}
              value={resultV}
              error={errors.result && touched.result}
              multiline
              rows={5}
            />
          </Grid>
        </Grid>
      </SoftBox>
    </SoftBox>
  );
}

// typechecking props for UserInfo
InfoHoSo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default InfoHoSo;
