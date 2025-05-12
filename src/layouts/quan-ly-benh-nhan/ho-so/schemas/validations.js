import * as Yup from "yup";
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

const validations = [
  Yup.object().shape({
    [rhythm.name]: Yup.string().required(rhythm.errorMsg),
    [frequency.name]: Yup.string().required(frequency.errorMsg),
    [cycle.name]: Yup.string().required(cycle.errorMsg),
    [axis.name]: Yup.string().required(axis.errorMsg),
    [corner.name]: Yup.string().required(corner.errorMsg),
    [waveP.name]: Yup.string().required(waveP.errorMsg),
    [distancePR.name]: Yup.string().required(distancePR.errorMsg),
    [QRS.name]: Yup.string().required(QRS.errorMsg),
    [waveT.name]: Yup.string().required(waveT.errorMsg),
    [ST.name]: Yup.string().required(ST.errorMsg),
    [distanceST.name]: Yup.string().required(distanceST.errorMsg),
    [distanceQT.name]: Yup.string().required(distanceQT.errorMsg),
    [conclude.name]: Yup.string().required(conclude.errorMsg),
    [diagnosis.name]: Yup.string().required(diagnosis.errorMsg),
    [result.name]: Yup.string().required(result.errorMsg),
  }),
];

export default validations;
