import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from 'react'

function HighlightCard({ title, number, type }) {

    const useStyles = makeStyles({
        wrapper: (props) => {
            if (props.type === "confirmed") return { borderLeft: '5px solid green' };
            if (props.type === "recovered") return { borderLeft: '5px solid yellow' }
            else return { borderLeft: '5px solid red' }
        },
        title: {
            fontSize: 18,
            marginBottom: 5
        },
        number: {
            fontSize: 18,
            marginBottom: 5
        }
    })


    const styles = useStyles({ type })
    return (
        <div>
            <Card className={styles.wrapper}>
                <CardContent >
                    <Typography component="p" variant="body2" className={styles.title}>
                        {title}
                    </Typography>
                    <Typography component="span" variant="body2" className={styles.number}>
                        {number}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default HighlightCard
