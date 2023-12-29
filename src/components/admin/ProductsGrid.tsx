import { useMemo, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { Box, LinearProgress } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
  GridSortModel,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from '../../redux/services/productApi';
import useEditProductModal from '../../hooks/useEditProductModal';
import { Product, ProductRes } from '../../types/product';
import { dataGrid } from '../../styles/dashboard';

const ProductsGrid = () => {
  const { onOpen, setDefaultValues } = useEditProductModal();
  const [removeProduct, { isLoading, isSuccess }] = useRemoveProductMutation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryOptions, setQueryOptions] = useState({});

  const { data, isFetching: loadingProducts } = useGetProductsQuery({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
    ...queryOptions,
  });

  const openEditProductModal = ({ row }: { row: ProductRes }) => {
    const productValues = {
      id: row.id,
      title: row.title,
      price: row.price,
      description: row.description,
      categoryId: row.category.id,
      images: row.images,
    };
    setDefaultValues(productValues);
    onOpen();
  };

  const handleDelete = useCallback(
    (id: GridRowId) => {
      setTimeout(() => {
        removeProduct(id as string);
      });
    },
    [removeProduct]
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'title',
        headerName: 'Title',
        flex: 4,
      },
      {
        field: 'category',
        valueGetter: (params: GridValueGetterParams<Product>) => {
          return params.row.category.name;
        },
        headerName: 'Category',
        flex: 2,
      },
      {
        field: 'price',
        headerName: 'Price',
        flex: 1,
      },
      {
        field: 'description',
        headerName: 'Description',
        flex: 4,
      },
      {
        field: 'remove',
        type: 'actions',
        headerName: 'Remove',
        flex: 1,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              label="Delete"
              onClick={() => handleDelete(id)}
              disabled={isLoading}
              icon={
                <DeleteIcon
                  fontSize="small"
                  sx={{
                    ':hover': {
                      color: 'red',
                    },
                  }}
                />
              }
            />,
          ];
        },
      },
    ],
    [handleDelete, isLoading]
  );

  const handleSortModelChange = useCallback((sortModel: GridSortModel) => {
    const orderBy = sortModel[0]?.field;
    const direction = sortModel[0]?.sort;
    setQueryOptions({
      orderBy,
      direction,
    });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product Removed');
    }
  }, [isSuccess]);

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
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5, 10, 20, 40]}
          loading={loadingProducts}
          disableRowSelectionOnClick={true}
          onRowClick={openEditProductModal}
          slots={{
            loadingOverlay: LinearProgress,
          }}
        />
      )}
    </Box>
  );
};

export default ProductsGrid;
