import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import * as oc from '../_controllers/outroController'

import '../App.css'
const styles = {
    button: { marginTop: 10, marginBottom: 10 },
    container: { display: 'flex', flexWrap: 'wrap', padding: '1%' },
    gridItem: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    root: { flexGrow: 1, margin: '2%' },
    textField: { marginLeft: 10, marginRight: 10, width: 200, }, label: { margin: 0 }
}

export const Outro = ({ meta }) => {
    const [cannotCollect, setCannotCollect] = useState(false)
    const [comment, setComment] = useState('')
    const [cannotSendComment, setCannotSendComment] = useState(true)
    const [commentSent, setCommentSent] = useState(false)

    const labels = meta.expText.outro

    const handleCommentChange = (e) => {
        if (e.target.value.length >= 2) {
            setComment(e.target.value)
            setCannotSendComment(false)
        }
        else { setCannotSendComment(true) }
    }

    const handleSendComment = (e) => {
        oc.sendComment(e)
        setCommentSent(true)
    }
    const handleCollect = () => { setCannotCollect(true) }


    useEffect(() => { document.body.classList.add('outro-body'); }, []);

    return (
        <Grid container style={styles.container} justifyContent='center'>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography variant="h4">{labels.outroTitle}</Typography>
            </Grid>
            {/* <Grid id="langDailySpeak"> */}
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography>{labels.langDailySpeak}</Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <TextField style={{ width: 500 }}
                    onChange={(e, ds) => oc.handleDailyChange(e, "dailySpeak")}
                />
            </Grid>
            {/* </Grid> */}
            {/* <Grid id="langDailyWrite"> */}
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography>{labels.langDailyWrite}</Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <TextField style={{ width: 500 }}
                    onChange={(e, dw) => oc.handleDailyChange(e, "dailyWrite")}
                />
            </Grid>
            {/* </Grid> */}
            {/* <Grid id="langDailyVis"> */}
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography>{labels.langDailyVis}</Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <TextField style={{ width: 500 }}
                    onChange={(e, dv) => oc.handleDailyChange(e, "dailyVis")}
                />
            </Grid>
            {/* </Grid> */}
            {/* <Grid> */}
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <Typography >{labels.commentQuestion} </Typography>
            </Grid>
            <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                <TextField
                    style={{ width: 500 }}
                    multiline
                    rows={2}
                    onChange={e => handleCommentChange(e)}
                />
            </Grid>
            {/* </Grid> */}
            {(commentSent) ?
                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    <Typography sx={{ color: 'gray' }}>{labels.commentReceived}</Typography> </Grid>
                :
                <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                    <Button variant="outlined"
                        disabled={cannotSendComment}
                        onClick={c => handleSendComment(comment)}
                    >{labels.commentSendButton}</Button>
                </Grid>
            }

            {oc.isProlificUser() ?
                <>
                    <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                        {labels.prolificUserYes}
                    </Grid>
                    <Grid item xs={10} sm={8} xl={8} style={styles.gridItem} marginTop={2}>
                        <Button
                            target="_blank" href="https://app.prolific.com/submissions/complete?cc=CVT9LBLD"
                            variant="outlined"
                            disabled={cannotCollect}
                            onClick={handleCollect}
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