import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Line } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

import gradientChartLine from "assets/theme/functions/gradientChartLine";

// MiniGradientLineChart configurations
import configs from "examples/Charts/LineCharts/MiniGradientLineChart/configs";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";

function MiniGradientLineChart({ title, description, height, chart }) {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({});
  const { data, options } = chartData;

  useEffect(() => {
    const chartDatasets = chart.datasets
      ? chart.datasets.map((dataset) => ({
          ...dataset,
          tension: 0.5,
          pointRadius: 0,
          borderWidth: 2,
          borderColor: colors[dataset.color]
            ? colors[dataset.color || "dark"].main
            : colors.dark.main,
          fill: true,
          maxBarThickness: 6,
          backgroundColor: gradientChartLine(
            chartRef.current.children[0],
            colors[dataset.color] ? colors[dataset.color || "dark"].main : colors.dark.main,
            0.02
          ),
        }))
      : [];

    setChartData(configs(chart.labels || [], chartDatasets, chart.customTick || " "));
  }, [chart]);

  const renderChart = (
    <>
      {title || description ? (
        <SoftBox pt={1} px={2}>
          {title && (
            <SoftTypography
              variant="button"
              color="text"
              fontWeight="medium"
              textTransform="capitalize"
            >
              {title}
            </SoftTypography>
          )}
          {description}
        </SoftBox>
      ) : null}
      {useMemo(
        () => (
          <SoftBox ref={chartRef} sx={{ height }}>
            <Line data={data} options={options} />
          </SoftBox>
        ),
        [chartData, height]
      )}
    </>
  );

  return title || description ? <Card>{renderChart}</Card> : renderChart;
}

// Setting default values for the props of MiniGradientLineChart
MiniGradientLineChart.defaultProps = {
  title: "",
  description: "",
  height: "6.25rem",
};

// Typechecking props for the MiniGradientLineChart
MiniGradientLineChart.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])).isRequired,
};

export default MiniGradientLineChart;
