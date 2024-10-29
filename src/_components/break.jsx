import React from "react";
import { Button, Grid, Typography } from "@mui/material";

export const Break = ({ meta, navigate, nextUrl }) => {
    const labels = meta.expText.break
    const styles = {
        button: { marginTop: 20, marginBottom: 20 }
    }
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh', backgroundColor: '#fafafa' }}
        >
            <Typography variant="h4" align="center">
                {labels.breakTitle}
            </Typography>
            <br />
            <Typography variant="h6" align="center">
                {labels.breakText}
            </Typography>
            <Button sx={{ display: '' }} style={styles.button} variant="outlined"
                onClick={() => navigate(nextUrl)}
                disabled={false} > {labels.breakButton}</Button>
        </Grid>
    )
}

export default Break;