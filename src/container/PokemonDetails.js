import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POKEMON_API_URL } from '../config/Index';

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        height: '100vh',
        textAlign: 'center',
        padding: '70px 10px 0px 10px',
        backgroundColor: 'black',
        color: 'white',
        marginTop: 70
    },
    textTitle: {
        textTransform: 'upperCase',
        fontFamily: 'Fantasy',
        marginTop: -50,
        fontSize: `calc(18px + 2vmin)`
    },
    pokemonImage: {
        width: '200px',
        height: '200px',
    },
    pokemonInfoContainer: {
        // bottom: 60,
        // position: 'absolute',
        width: '100%'

    },
    seperator: {
        height: '0.01mm',
        width: '95%',
    },
    favorite: {
        height: 50,
        width: 50,
        marginTop: 15
    },
    text: {
        fontSize: 30
    }
}))

export const PokemonDetails = (props) => {

    const classess = useStyles();

    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        fetch(`${POKEMON_API_URL}/${id}`)
            .then(res => res.json())
            .then((data) => {
                setPokemonDetails(data)
            })
            .catch(err => console.log(err))
    }, [id])

    // distructure the pokemonDetails Data
    const { name, sprites, height, weight, types } = pokemonDetails;


    return (
        <Box>
            <Box className={classess.pokedexContainer}>
                <Typography className={classess.textTitle} variant="h1">
                    {name}
                </Typography>
                {sprites && <img className={classess.pokemonImage} src={sprites.front_default} alt={name} />}
                <Box className={classess.pokemonInfoContainer}>
                    <hr className={classess.seperator} />
                    <Grid container spacing={3}>
                        <Grid item md={2} sm={4} xs={6}>
                            <Button className={classess.favorite}>
                                <FavoriteIcon style={{ color: 'white', fontSize: 40 }} />
                            </Button>
                        </Grid>
                        <Grid item md={2} sm={4} xs={6}>
                            <Typography variant="h1" component="h1" className={classess.text}>
                                Name
                                <br />
                                <Typography variant="h6">{name}</Typography>
                            </Typography>
                        </Grid>
                        <Grid item md={2} sm={4} xs={6}>
                            <Typography variant="h1" component="h1" className={classess.text}>
                                Height
                                <br />
                                <Typography variant="h6">{height}m</Typography>
                            </Typography>
                        </Grid>
                        <Grid item md={2} sm={4} xs={6}>
                            <Typography variant="h1" component="h1" className={classess.text}>
                                Weight
                                <br />
                                <Typography variant="h6">{weight}kg</Typography>
                            </Typography>
                        </Grid>
                        {types && types.map((pokemonType) => {
                            const { name } = pokemonType.type;
                            return (
                                <Grid item md={2} sm={4} xs={6} key={name}>
                                    <Typography variant="h1" component="h1" className={classess.text}>
                                        Type
                                        <br />
                                        <Typography variant="h6">{name}</Typography>
                                    </Typography>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}



export default PokemonDetails
