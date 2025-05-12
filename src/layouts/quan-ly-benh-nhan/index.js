/* eslint-disable react/prop-types */
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "./data";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ActionCell from "./components/ActionCell";

import { PatientService } from "services/patientServices";
import { time } from "utils";

function QuanLyBenhNhan() {
  const [dataTable, setDataTable] = useState({
    columns: [
      {
        Header: "Tên bệnh nhân",
        accessor: "username",
        align: "center",
      },
      { Header: "Tuổi", accessor: "age", sorted: false, align: "center" },
      { Header: "Giới tính", accessor: "sex", sorted: false, align: "center" },
      { Header: "Địa chỉ", accessor: "address", sorted: false, align: "center" },
      { Header: "Ngày khám", accessor: "createdAt", sorted: false, align: "center" },
      { Header: "thao tác", accessor: "action", sorted: false, align: "center" },
    ],
    rows: [],
  });
  const [query, setQuery] = useState({ sortBy: "createdAt", sortType: "desc" });

  const [loading, setLoading] = useState(false);
  const [paginationData, setPaginationData] = useState({ page: 1 });

  useEffect(() => {
    (async () => {
      setLoading(true);

      const {
        data: { items, paginate },
      } = await PatientService.getAll({
        limit: paginationData.pageSize || 10,
        page: paginationData.page,
        ...query,
      });

      setPaginationData((prev) => ({ ...prev, count: paginate.count, size: paginate.size }));

      setDataTable((prev) => ({
        ...prev,
        rows: items.map((item) => ({
          id: item?._id,
          username: item?.username,
          age: item?.age,
          sex: item?.sex === "male" ? "Nam" : "Nữ",
          address: item?.address,
          createdAt: item?.createdAt ? time(item?.createdAt) : "",
          action: <ActionCell item={item} setDataTable={setDataTable} />,
        })),
      }));
      setLoading(false);
    })();
  }, [query, paginationData.page]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <Card>
          <DataTable
            loading={loading}
            query={query}
            setQuery={setQuery}
            paginationData={paginationData}
            setPaginationData={setPaginationData}
            table={dataTable}
            canSearch
          />
          {Object.keys(dataTable.rows)?.length === 0 && !loading && (
            <SoftBox my={7}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={3}
              >
                Không có dữ liệu
              </Grid>
            </SoftBox>
          )}

          {Object.keys(dataTable.rows)?.length <= 2 && <SoftBox my={5}></SoftBox>}
        </Card>
      </SoftBox>
    </DashboardLayout>
  );
}

export default QuanLyBenhNhan;
