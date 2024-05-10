/* eslint-disable react/prop-types */
import { Box, Autocomplete, InputAdornment, TextField, Card } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SearchOutlined } from "@ant-design/icons";

const SearchComponent = (props) => {
    return (
        <Grid container sx={{ ml: 8, mr: 8 }}>
            <Grid xs={3}>
                <Card color={"primary"} elevation={1} sx={{
                    borderRadius: "50px",
                    border: "0"
                }}>
                    <Autocomplete
                        freeSolo
                        disableClearable
                        options={props.games ?? []}
                        getOptionLabel={(option) => option.Name ?? ''}
                        renderOption={(props, option) => {
                            return (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0, height: 50 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="50"
                                        srcSet={option.FilePath}
                                        src={option.FilePath}
                                        alt=""

                                    />
                                    {option.Name}
                                </Box>
                            )
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                sx={{
                                    "& .MuiAutocomplete-inputRoot": {
                                        paddingLeft: "20px !important",
                                        borderRadius: "50px"
                                    }, "& .MuiAutocomplete-inputRoot fieldset": {
                                        borderColor: "transparent",
                                    },
                                    "& .css-15g27og-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "transparent",
                                    }
                                }}
                                placeholder="Buscar Juego"
                                //label="Buscar Juegos"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                    endAdornment: (
                                        <InputAdornment position="start">
                                            <SearchOutlined />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </Card>
            </Grid>
        </Grid>
    )
}
export default SearchComponent;