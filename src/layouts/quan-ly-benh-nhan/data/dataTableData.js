/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";
import FirstColumn from "examples/FirstColumn";

// ProductsList page components

// Images

import { Box } from "@mui/material";

import avatar from "assets/images/team-2.jpg";
import ActionCell from "../components/ActionCell";

// Badges
const outOfStock = (
  <SoftBadge variant="contained" color="error" size="xs" badgeContent="out of stock" container />
);
const inStock = (
  <SoftBadge variant="contained" color="success" size="xs" badgeContent="in stock" container />
);

const dataTableData = {
  columns: [
    {
      Header: "Tên bộ môn",
      accessor: "ten-bo-mon",
      width: "40%",
      sorted: true,
      Cell: ({ value }) => (
        <Box display="flex" gap={1} alignItems="center">
          <FirstColumn value={value} />
        </Box>
      ),
    },
    {
      Header: "Mã Bộ Môn",
      accessor: "ma-bo-mon",
      width: "50%",
      sorted: true,
    },

    { Header: "thao tác", accessor: "action", sorted: false },
  ],

  rows: [
    {
      "ten-bo-mon": "Bộ môn A",
      "ma-bo-mon": "BM-A",
      action: <ActionCell />,
    },
    {
      "ten-bo-mon": "Bộ môn B",
      "ma-bo-mon": "BM-B",
      action: <ActionCell />,
    },
    {
      "ten-bo-mon": "Bộ môn C",
      "ma-bo-mon": "BM-C",
      action: <ActionCell />,
    },
  ],
};

export default dataTableData;
