/* eslint-disable react/prop-types */
import { useMemo, useEffect, useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-table components
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce, useSortBy } from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftPagination from "components/SoftPagination";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SoftButton from "components/SoftButton";
import TableCommon from "components/TableCommon";

function DataTable({
  loading,
  query,
  setQuery,
  entriesPerPage,
  canSearch,
  table,
  paginationData,
  setPaginationData,
  isSorted,
  noEndBorder,
}) {
  const defaultValue = entriesPerPage?.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage?.entries ? entriesPerPage.entries : [5, 10, 15, 20, 25];
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = ({ value }) => setPageSize(value);

  // Render the paginations
  const renderPagination = pageOptions.map((option) => (
    <SoftPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </SoftPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
    setQuery((prev) => ({ ...prev, searchBy: value || "" }));
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;
    if (isSorted && column.sorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asce";
    } else {
      sortedValue = false;
    }
    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <>
      <SoftBox
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
        p={3}
        pb={1}
      >
        <Stack spacing={1} direction="row" mb={3}>
          <Link to="/quan-ly-benh-nhan/benh-nhan/create">
            <SoftButton variant="gradient" color="dark" size="small">
              Thêm bệnh nhân mới
            </SoftButton>
          </Link>
          {/* <SoftButton variant="outlined" color="info" size="small">
            Xuất file
          </SoftButton> */}
        </Stack>
        <SoftBox lineHeight={1}>
          <Stack spacing={2} direction="row">
            {canSearch && (
              <SoftBox display="flex" flexDirection="column">
                <SoftTypography component="label" variant="caption" fontWeight="bold" mb={0.5}>
                  Tìm kiếm
                </SoftTypography>
                <SoftBox width="20rem">
                  <SoftInput
                    placeholder="Tìm kiếm"
                    value={search}
                    onChange={({ currentTarget }) => {
                      setSearch(search);
                      onSearchChange(currentTarget.value);
                    }}
                  />
                </SoftBox>
              </SoftBox>
            )}
          </Stack>
        </SoftBox>
      </SoftBox>

      <TableContainer sx={{ boxShadow: "none" }}>
        <TableCommon
          loading={loading}
          query={query}
          setQuery={setQuery}
          paginationData={paginationData}
          setPaginationData={setPaginationData}
          table={table}
          isSorted={isSorted}
          noEndBorder={noEndBorder}
          tableInstance={tableInstance}
        />
      </TableContainer>
    </>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  query: PropTypes.any,
  setQuery: PropTypes.any,
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};

export default DataTable;
