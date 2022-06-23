import { createTheme, colors } from '@mui/material';

const { grey } = colors;

const comboPageTheme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'title-combo' },
          style: {
            fontSize: '0.85rem',
            textTransform: 'uppercase'
          }
        },
        {
          props: { variant: 'price' },
          style: {
            paddingTop: '0.5rem',
            color: grey[600],
            fontWeight: 400,
            fontSize: '1rem'
          }
        },
        {
          props: { variant: 'quantity' },
          style: {
            border: `1px solid ${grey[700]}`,
            padding: '0.5rem 1rem',
            fontSize: '1rem'
          }
        },
        {
          props: { variant: 'text-info-combo' },
          style: {
            fontWeight: 600
          }
        }
      ]
    },
    MuiStack: {
      variants: [
        {
          props: { variant: 'combo-list' },
          style: {
            flexDirection: 'row',
            gap: '1rem'
          }
        },
        {
          props: { variant: 'combo-cta' },
          style: {
            pt: '1rem',
            columnGap: '0.5rem',
            borderTop: `1px dashed ${grey[300]}`,
            paddingTop: '1rem',
            marginTop: '1rem',
            flexDirection: 'row'
          }
        },
        {
          props: { variant: 'combo-info' },
          style: {
            color: grey[50],
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '2rem'
          }
        }
      ]
    }
  }
});

export default comboPageTheme;
