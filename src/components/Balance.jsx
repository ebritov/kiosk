import { IconButton, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useEffect, useState } from "react";
import { getBalanceResult } from "../helper/common";
import {
  createReportProcessedIngress,
  getBalance,
  getIngressNews,
} from "../helper/backend_helper";
import ModeThemeButton from "./ModeThemeButton";
import Grid from "@mui/material/Unstable_Grid2";
import { useLoadingPageChangeValue } from "../context/LoadingPageContext";
import { useTheme } from '@mui/material/styles';
import { useTypeAppValue } from "../context/TypeAppContext";

const Balance = () => {
  const theme = useTheme();
  const [balance, setBalance] = useState(undefined);
  const [isComponentLoaded, setIsComponentLoaded] = useState(false);
  const { setOpenLoading } = useLoadingPageChangeValue();
  const { typeApp } = useTypeAppValue();


  useEffect(() => {
    const updateBalance = async () => {
      try {
        const baseURL = typeApp == "kiosko" ? import.meta.env.VITE_APIURLE : import.meta.env.VITE_APIURLH;

        const result = await getBalance(baseURL);
        setBalance(getBalanceResult(result.data));

        const ingressNew = await getIngressNews(baseURL);
        const ingressNewGreaterAmount = await ingressNew.data.filter(
          (item) => item.Amount > 0
        );
        if (ingressNewGreaterAmount.length > 0)
          await createReportProcessedIngress(ingressNewGreaterAmount, baseURL);
      } catch (err) {
        console.log(err);
      }
    };
    const intervalId = setInterval(updateBalance, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (balance !== undefined && !isComponentLoaded) {
      //  console.log("LLEGUE");
      //  console.log(balance);
      setTimeout(() => {
        //console.log("FALSE");
        setOpenLoading(false);
      }, 1000);

      setIsComponentLoaded(true);
    } else if (!isComponentLoaded) setOpenLoading(true);
  }, [balance]);
  return (
    <Grid container columns={12} justifyContent={"end"}>
      <Grid xs={7}>
        <Grid
          container
          columns={12}
          sx={(theme) => theme.palette.avatarHeaderBalance}
        >
          <Grid sx={{ position: "absolute" }}>
            <IconButton
              style={{
                border: `${theme.palette.borderIconBalance.border}`,
              }} sx={(theme) => theme.palette.iconBalance}
            >
              {typeApp == "kiosko" ? <AttachMoneyIcon sx={{ fontSize: "2rem" }} /> : "L"}
            </IconButton>
          </Grid>
          <Grid xs={11} sx={{ pl: 1, pr: 1 }} textAlign={"center"}>
            <Typography
              noWrap
              sx={{ fontSize: "2rem", fontWeight: "bold", color: "#E6D676" }}
            >
              {balance ?? ""}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        xs={2}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeThemeButton />
      </Grid>
    </Grid>
  );
};

export default Balance;
/**
   <Stack spacing={2} direction="row" alignItems="center" sx={{ justifyContent: "space-between" }}>
          <Stack spacing={2} direction="row" alignItems="center" sx={{
            border: "3px solid #0c1d27",
            borderRadius: "80px",
            height: "60px",
            width: "100%",

          }}>
            <Stack>
              <IconButton sx={{ height: "60px", width: "60px", backgroundColor: "#e3d47e", fontSize: "2.5rem", color: "#0c1d27" }}>
                <DollarOutlined />
              </IconButton>
            </Stack>
            <Stack >
              <Typography noWrap sx={{ fontSize: "2.5rem", fontWeight: "bold", color: "#e3d47e" }}>{balance}</Typography>
            </Stack>
          </Stack>
          <ModeThemeButton />
        </Stack>
  
 */
