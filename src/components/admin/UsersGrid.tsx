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
  useGetUsersQuery,
  useRemoveUserMutation,
} from '../../redux/services/userApi';
import useEditUserModal from '../../hooks/useEditUserModal';
import { dataGrid } from '../../styles/dashboard';
import { UserRes } from '../../types/user';
import { useAppSelector } from '../../redux/store';

const UsersGrid = () => {
  const authUserId = useAppSelector((state) => state.auth.user?.id);
  const { onOpen, setDefaultValues } = useEditUserModal();
  const [removeUser, { isLoading, isSuccess }] = useRemoveUserMutation();
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });
  const [queryOptions, setQueryOptions] = useState({});

  const { data, isFetching: loadingProducts } = useGetUsersQuery({
    limit: paginationModel.pageSize,
    offset: paginationModel.page * paginationModel.pageSize,
    ...queryOptions,
  });

  const openEditUserModal = ({ row }: { row: UserRes }) => {
    const userValues = {
      id: row.id,
      role: row.role,
      firstName: row.firstName,
      lastName: row.lastName,
      email: row.email,
      avatar: row.avatar,
      password: '',
    };
    setDefaultValues(userValues);
    onOpen();
  };

  const handleDelete = useCallback(
    (id: GridRowId) => {
      setTimeout(() => {
        removeUser(id as string);
      });
    },
    [removeUser]
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'role',
        headerName: 'Role',
        flex: 2,
      },
      {
        field: 'firstName',
        headerName: 'First Name',
        flex: 4,
      },
      {
        field: 'lastName',
        headerName: 'Last Name',
        flex: 4,
      },
      {
        field: 'email',
        headerName: 'Email',
        flex: 2,
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
              disabled={isLoading || id === authUserId}
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
    [authUserId, handleDelete, isLoading]
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
      toast.success('User Removed');
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
          onRowClick={openEditUserModal}
          slots={{
            loadingOverlay: LinearProgress,
          }}
        />
      )}
    </Box>
  );
};

export default UsersGrid;
