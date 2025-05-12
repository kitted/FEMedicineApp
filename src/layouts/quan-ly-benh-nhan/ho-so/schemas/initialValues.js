import checkout from "./form";

const {
  formField: {
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
  },
} = checkout;

const initialValues = {
  [rhythm.name]: "",
  [frequency.name]: "",
  [cycle.name]: "",
  [axis.name]: "",
  [corner.name]: "",
  [waveP.name]: "",
  [distancePR.name]: "",
  [QRS.name]: "",
  [waveT.name]: "",
  [ST.name]: "",
  [distanceST.name]: "",
  [distanceQT.name]: "",
  [conclude.name]: "",
  [diagnosis.name]: "",
  [result.name]: "",
};

export default initialValues;
