import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import * as oc from '../_controllers/outroController'

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Outro = (props) => {
    const [cannotCollect, setCannotCollect] = useState(false)

    const labels = props.expPages.OutroLabels

    const handleClick = () => {
        setCannotCollect(true)
    }
    useEffect(() => {
        document.body.classList.add('outro-body');
    }, []);

    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography variant="h5">{labels.outroTitle}</Typography>
            </Grid>

            {oc.isProlificUser() ?
                <>
                    <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                        {labels.prolificUserYes}
                    </Grid>
                    <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                        <Button
                            target="_blank" href="https://app.prolific.com/submissions/complete?cc=C4SQTHN5"
                            variant="outlined"
                            disabled={cannotCollect}
                            onClick={handleClick}
                        >{labels.prolificUserButton}</Button>
                    </Grid>
                </> :
                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    {labels.closeBrowser}
                </Grid>
            }
        </Grid >
    )
}

export default Outro;