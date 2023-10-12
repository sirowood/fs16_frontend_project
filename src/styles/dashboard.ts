const addButton = {
  width: {
    xs: '100%',
    sm: 'max-content',
  },
};

const dataGrid = {
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

export {
  addButton,
  dataGrid,
};
