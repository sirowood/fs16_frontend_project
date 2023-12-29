import { useMemo, useState, useCallback } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { DataGrid, GridColDef, GridSortModel } from '@mui/x-data-grid';

import { useGetAllOrdersQuery } from '../../redux/services/orderApi';
import { dataGrid } from '../../styles/dashboard';
import { useNavigate } from 'react-router-dom';
import { OrderRes } from '../../types/order';

const OrdersGrid = () => {
  const navigate = useNavigate();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryOptions, setQueryOptions] = useState({});

  const { data, isFetching: loadingCategories } = useGetAllOrdersQuery({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
    ...queryOptions,
  });

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'createdAt',
        headerName: 'Order Time',
        flex: 4,
        valueGetter: (params) => {
          const createdAtUTC = new Date(params.row.createdAt);
          return createdAtUTC.toLocaleString();
        },
      },
      {
        field: 'email',
        headerName: 'Email',
        flex: 2,
        valueGetter: (params) => params.row.user.email,
      },
      {
        field: 'status',
        headerName: 'Status',
        flex: 1,
      },
    ],
    []
  );

  const handleRowClick = ({ row }: { row: OrderRes }) => {
    navigate(`/orders/${row.id}`);
  };

  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    const orderBy = sortModel[0]?.field;
    const direction = sortModel[0]?.sort;
    setQueryOptions({
      orderBy,
      direction,
    });
  }, []);

  return (
    <Box component="section">
      {data && (
        <DataGrid
          autoHeight
          keepNonExistentRowsSelected
          sx={dataGrid}
          columns={columns}
          rows={data.items}
          rowCount={data.total}
          sortingMode="server"
          onSortModelChange={handleSortModelChange}
          paginationMode="server"
          onRowClick={handleRowClick}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 20, 40]}
          loading={loadingCategories}
          disableRowSelectionOnClick={true}
          slots={{
            loadingOverlay: LinearProgress,
          }}
        />
      )}
    </Box>
  );
};

export default OrdersGrid;
