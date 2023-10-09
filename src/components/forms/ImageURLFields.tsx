import { Controller, useFieldArray } from 'react-hook-form';
import { Box, TextField, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ImageURLFieldsProps } from '../../types/form';

const ImageURLFields = ({ control, errors }: ImageURLFieldsProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  });

  return (
    <Box>
      {fields.map((item, index) => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Controller
            name={`images.${index}.url`}
            control={control}
            render={({ field }) => (
              <TextField
                variant="standard"
                label={`Image ${index + 1}`}
                error={!!errors.images?.[index]?.url}
                helperText={errors.images?.[index]?.url?.message ?? ''}
                sx={{ height: 70 }}
                {...field}
              />
            )}
          />
          <IconButton
            disabled={index === 0}
            size="small"
            color="error"
            onClick={() => remove(index)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      {fields.length < 3 && (
        <Button
          sx={{ marginBottom: '16px' }}
          size="small"
          color="success"
          onClick={() => append({ url: '' })}
        >
          Add more image
        </Button>
      )}
    </Box>
  );
};

export default ImageURLFields;
