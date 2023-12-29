import { useMemo, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { Box, LinearProgress } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridActionsCellItem,
  GridRowId,
  GridSortModel,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  useGetCategoriesQuery,
  useRemoveCategoryMutation,
} from '../../redux/services/categoryApi';
import useEditCategoryModal from '../../hooks/useEditCategoryModal';
import { dataGrid } from '../../styles/dashboard';
import { Category } from '../../types/category';

const CategoriesGrid = () => {
  const { onOpen, setDefaultValues } = useEditCategoryModal();
  const [removeCateogry, { isLoading, isSuccess }] =
    useRemoveCategoryMutation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryOptions, setQueryOptions] = useState({});

  const { data, isFetching: loadingCategories } = useGetCategoriesQuery({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
    ...queryOptions,
  });

  const openEditProductModal = ({ row }: { row: Category }) => {
    const productValues = {
      id: row.id,
      name: row.name,
      image: row.image,
    };
    setDefaultValues(productValues);
    onOpen();
  };

  const handleDelete = useCallback(
    (id: GridRowId) => {
      setTimeout(() => {
        removeCateogry(id as string);
      });
    },
    [removeCateogry]
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'Name',
        flex: 4,
      },
      {
        field: 'image',
        headerName: 'Image',
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
      toast.success('Category Removed');
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
          loading={loadingCategories}
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

export default CategoriesGrid;
