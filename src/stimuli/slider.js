import { createTheme } from "@mui/material/styles";

export const sliderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '600',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 6,
};

export const sliderTheme = createTheme({
    components: {
        MuiSlider: {
            styleOverrides: {
                thumb: {
                    borderRadius: '50%', color: 'black', width: '20px', height: '20px',
                    ":hover": { boxShadow: 'none' }
                },
                track: {},
                rail: { color: '#eaecef', height: '10px', borderRadius: '0px', opacity: '0.75' },
                mark: { width: '3px', height: '30px', color: 'black', opacity: '1' },
                markLabel: { fontSize: 16 }
            }
        }
    }
});
