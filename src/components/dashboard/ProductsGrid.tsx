import { useMemo, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from '../../redux/services/productApi';
import useEditProductModal from '../../hooks/useEditProductModal';
import { Product, ProductRes } from '../../types/product';

const dataGridStyle = {
  boxShadow: 8,
  borderRadius: '8px',
  '& .MuiDataGrid-columnHeaderTitle': {
    fontWeight: 600,
    fontSize: '1.1em',
  },
  '& .MuiDataGrid-row:hover': {
    cursor: 'pointer',
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
};

const ProductsGrid = () => {
  const { onOpen, setDefaultValues } = useEditProductModal();
  const [removeProduct, { isLoading, isSuccess }] = useRemoveProductMutation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const { data, isLoading: loadingProducts } = useGetProductsQuery({});

  const openEditProductModal = ({ row }: { row: ProductRes }) => {
    const productValues = {
      id: row.id,
      title: row.title,
      price: row.price,
      description: row.description,
      categoryId: row.category.id,
      images: row.images.map((url) => ({ url })),
    };
    setDefaultValues(productValues);
    onOpen();
  };

  const handleDelete = useCallback(
    (id: GridRowId) => {
      setTimeout(() => {
        removeProduct(+id);
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
          sx={dataGridStyle}
          rows={data}
          columns={columns}
          pageSizeOptions={[5, 10, 20, 40]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowCount={data.length}
          loading={loadingProducts}
          disableRowSelectionOnClick={true}
          onRowClick={openEditProductModal}
        />
      )}
    </Box>
  );
};

export default ProductsGrid;
