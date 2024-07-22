import { CustomDataGridToolbar, Flag, useRowSelection } from "@andritz/hwf2";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { countriesData, Country } from "data/countries";

const columns: GridColDef<Country>[] = [
  {
    field: "flag",
    headerName: "Flag",
    flex: 0,
    valueGetter: (_value, row) => row.name,
    renderCell: (params) => <Flag country={params.value} />,
    align: "center",
    headerAlign: "center",
  },
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "code",
    headerName: "ISO",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  { field: "capital", headerName: "Capital", flex: 1 },
  {
    field: "population",
    headerName: "Population",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueFormatter: (_value, row) => row.population.toLocaleString(),
  },
  {
    field: "size",
    headerName: "Size",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueFormatter: (_value, row) => row.size.toLocaleString(),
    renderCell: (params) => `${params.formattedValue} km²`,
  },
  {
    field: "density",
    headerName: "Density",
    flex: 1,
    align: "center",
    headerAlign: "center",
    valueFormatter: (_value, row) => row.density.toLocaleString(),
    renderCell: (params) => `${params.formattedValue} /km²`,
  },
];

const Buttons = () => {
  const { selectedRowsCount, selectedRows, allSelected } = useRowSelection();

  const onClick = () => {
    const message = `
    Selected rows count: ${selectedRowsCount}.
    
    Additional information about the selected rows can be found in the console.`;
    alert(message);
    console.log(selectedRows);
  };

  return (
    <>
      <Button size="small" color="success" variant="outlined" onClick={onClick}>
        Always enabled
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="warning"
        onClick={onClick}
        disabled={selectedRowsCount === 0}
      >
        Disabled if no rows selected
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={onClick}
        disabled={selectedRowsCount > 2}
      >
        Disable if more than 2 rows selected
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="info"
        onClick={onClick}
        disabled={allSelected}
      >
        Disable if all rows selected
      </Button>
    </>
  );
};

export const Page = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Typography variant="h1" gutterBottom>
        Countries
      </Typography>
      <DataGrid
        className={"zebra"}
        rows={countriesData}
        columns={columns}
        initialState={{ pagination: { paginationModel: { pageSize: 25 } } }}
        pageSizeOptions={[25, 50]}
        disableRowSelectionOnClick
        checkboxSelection
        slots={{
          toolbar: CustomDataGridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            columnsSelection: true,
            filters: true,
            densitySelection: true,
            exportGrid: true,
            search: true,
            customContent: <Buttons />,
          },
        }}
      />
    </Box>
  );
};

export default Page;
