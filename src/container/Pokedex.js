import { Box, makeStyles, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config/Index';
import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonCard from '../components/PokemonCard';

const useStyles = makeStyles((theme) => ({
    circularProgress: {
        marginTop: 100
    },
    pokedexContainer: {
        textAlign: 'center',
        padding: '70px 10px 0px 10px',
        backgroundColor: 'rgb(68, 68, 68)'
    }
}))

function Pokedex() {

    const classess = useStyles();

    const [pokemonData, setpokemonData] = useState([]);

    useEffect(() => {
        fetch(POKEMON_API_URL + "?limit=800")
            .then(res => res.json())
            .then((data) => {
                let result = data.results;
                setpokemonData(result);
            })
    }, [])

    return (
        <Box>
            {pokemonData ? (
                <Grid className={classess.pokedexContainer} container spacing={2}>
                    {pokemonData.map((pokemon, id) => {
                        id++
                        const images = `${IMAGE_API_URL}${id}.png`;
                        return (
                            <PokemonCard pokemon={pokemon} images={images} id={id} key={pokemon.name}/>
                        )
                    })}
                </Grid>
            ) : <CircularProgress className={classess.circularProgress} />}
        </Box>
    )
}

export default Pokedex
