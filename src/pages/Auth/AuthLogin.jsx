import { useNavigate } from "react-router-dom";

import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
//import Footer from "../../components/Footer";
import {
  registerTerminal,
  setDateValidezConfig,
  setLoggedInTerminal,
  setTypeAppConfig,
} from "../../helper/backend_helper";
import { useConfigValue } from "../../context/ConfigAppContext";
import { useTypeAppValue } from "../../context/TypeAppContext";

const AuthLogin = () => {
  const navigate = useNavigate();
  const { setTerminalConfig } = useConfigValue();
  const { setTypeApp } = useTypeAppValue();
  return (
    <>
      <Typography variant="h1" color="primary">
        Bienvenido !
      </Typography>
      <Typography variant="h4" color="text.secondary">
        Por favor, ingresa las credenciales del terminal.
      </Typography>
      <Box sx={{ mt: 6 }}>
        <Formik
          initialValues={{
            //Serial: "0DD69-8B7DC-1BEA1-651B6-ED184-33D17-6AD81-55374",
            //MacAddress: "00:FF:70:7B:00:67",
            Serial: "",
            MacAddress: "",
            tipo: "kiosko",
            validez: 12
          }}
          validationSchema={Yup.object().shape({
            Serial: Yup.string().max(255).required("El serial es requerido."),
            MacAddress: Yup.string()
              .max(255)
              .required("La dirección mac es requerida."),
            validez: Yup.number().integer('Debe ser un número entero').required('Campo requerido')
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              const baseURL = values.tipo == "kiosko" ? import.meta.env.VITE_APIURLE : import.meta.env.VITE_APIURLH;
              console.log(baseURL)
              const response = await registerTerminal(values, baseURL);
              if (response.data.IsValid) {
                setTypeApp(values.tipo);
                setLoggedInTerminal(response.data.Data);
                setTerminalConfig(response.data.Data);
                setDateValidezConfig(values.validez);
                setTypeAppConfig(values.tipo);

                navigate("/home");
              } else {
                throw { message: response.data.Message.TextMessage };
              }
            } catch (err) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={3} justifyContent={"center"}>
                <Grid item xs={12} lg={9}>
                  <Stack spacing={1}>
                    <InputLabel
                      htmlFor="serial-login"
                      sx={{ fontSize: "1.5rem !important" }}
                    >
                      Serial
                    </InputLabel>
                    <OutlinedInput
                      id="serial-login"
                      type="text"
                      value={values.Serial}
                      name="Serial"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Ingrese el serial."
                      fullWidth
                      sx={{ height: 80, fontSize: 30 }}
                      error={Boolean(touched.Serial && errors.Serial)}
                    />
                    {touched.Serial && errors.Serial && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-serial-login"
                      >
                        {errors.Serial}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={9}>
                  <Stack spacing={1}>
                    <InputLabel
                      htmlFor="mac-login"
                      sx={{ fontSize: "1.5rem !important" }}
                    >
                      Mac
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      sx={{ height: 80, fontSize: 30 }}
                      error={Boolean(touched.MacAddress && errors.MacAddress)}
                      id="mac-login"
                      type={"text"}
                      value={values.MacAddress}
                      name="MacAddress"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Ingrese la dirección mac."
                    />
                    {touched.MacAddress && errors.MacAddress && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-mac-login"
                      >
                        {errors.MacAddress}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <Stack spacing={1}>
                    <InputLabel
                      htmlFor="validez"
                      sx={{ fontSize: "1.5rem !important" }}
                    >
                      Tiempo de validez (Meses)
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      sx={{ height: 80, fontSize: 30 }}
                      error={Boolean(touched.validez && errors.validez)}
                      id="validez"
                      type={"text"}
                      value={values.validez}
                      name="validez"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Ingrese el tiempo de validez."
                    />
                    {touched.validez && errors.validez && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-mac-login"
                      >
                        {errors.validez}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={4}>
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">Tipo</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="tipo"
                      value={values.tipo}
                      onChange={handleChange}
                    >
                      <FormControlLabel value="kiosko" control={<Radio />} label="Cashlab" />
                      <FormControlLabel value="casino" control={<Radio />} label="Aladino" />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={7}>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ fontSize: "1.5rem" }}
                  >
                    Acceder
                  </Button>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sx={{ mt: 1 }} lg={9}>
                  {errors.submit && (
                    <FormHelperText error sx={{ fontSize: "1rem" }}>
                      {errors.submit}
                    </FormHelperText>
                  )}
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
        {/*<Footer sx={{ mt: 6 }} />*/}
      </Box>
    </>
  );
};
export default AuthLogin;
