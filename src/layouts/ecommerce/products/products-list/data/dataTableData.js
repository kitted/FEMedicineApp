/* eslint-disable react/prop-types */
// Soft UI Dashboard PRO React components
import SoftBadge from "components/SoftBadge";

// ProductsList page components
import ProductCell from "layouts/ecommerce/products/products-list/components/ProductCell";
import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

// Images
import adidasHoodie from "assets/images/ecommerce/adidas-hoodie.jpeg";

import { Box } from "@mui/material";

import avatar from "../../../../../assets/images/team-2.jpg";

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
      Header: "Tên",
      accessor: "name",
      width: "25%",
      sorted: true,
      Cell: ({ value: [name, data] }) => (
        <Box display="flex" gap={1} alignItems="center">
          <Box width={40} height={40}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
              src={data.image}
              alt={name}
            />
          </Box>
          <Box>{name}</Box>
        </Box>
      ),
    },
    {
      Header: "Điểm đón",
      accessor: "diem-don",
      Cell: ({ value: [text, time] }) => (
        <Box display="flex" flexDirection="column">
          <Box>{text}</Box>
          <Box>{time}</Box>
        </Box>
      ),
    },
    {
      Header: "Điểm đến",
      accessor: "diem-den",
      Cell: ({ value: [text, time] }) => (
        <Box display="flex" flexDirection="column">
          <Box>{text}</Box>
          <Box>{time}</Box>
        </Box>
      ),
    },
    { Header: "Dịch vụ", accessor: "dich-vu", sorted: false },
    { Header: "Xe yêu cầu", accessor: "xe-yeu-cau", sorted: false },
    {
      Header: "Ghi chú",
      accessor: "ghi-chu",
      sorted: false,
    },
    { Header: "thao tác", accessor: "action", sorted: false },
  ],

  rows: [
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
    {
      name: ["Nguyễn Văn A", { image: avatar, checked: true }],
      "diem-don": ["Sài Gòn - Đà Lạt", "09/09/2023"],
      "diem-den": ["Đà Lạt - Sài Gòn", "12/09/2023"],
      "dich-vu": "Chở khách",
      "xe-yeu-cau": "Xe ô tô",
      "ghi-chu": "Xe Sedan 7 chỗ",
      action: <ActionCell />,
    },
  ],
};

export default dataTableData;
