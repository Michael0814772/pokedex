import { Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    card: {
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'white',
        "&:hover": {
            backgroundColor: 'rgb(90, 90, 90)'
        }
    },
    cardMedia: {
        margin: 'auto',
        width: 130,
        height: 130
    },
    cardContent: {
        textAlign: 'center'
    },
    link: {
        textDecoration: 'none'
    }
}));

function PokemonCard({ pokemon, images, id }) {

    const classess = useStyle();

    return (
        <Grid item xs={12} sm={3} md={2}>
            <Link to={"/pokemon/" + id} className={classess.link}>
                <Card className={classess.card}>
                    <CardMedia className={classess.cardMedia} image={images}></CardMedia>
                    <CardContent className={classess.cardContent}>
                        <Typography>
                            {pokemon.name}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default PokemonCard
