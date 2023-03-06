import { createTheme } from "@mui/material/styles";
import { colors } from "../constant/constant";


export const theme = createTheme ({
    palette: {
        primary:{
            light:"#a2do45",
             main:"#00548e",
             dark:"#618910",
             contrastText:"#ffffff",
        },
        secondary: {
            light: '#6e7b86',
            main: '#f79239',
            dark: '#333e48',
            contrastText: '#ffffff',
          },
      text:{
        primary:"#212121",
        secondary:"#4c5b68"
      },
    },
    typography:{
        h1:{
            fontSize:"36px",
            textAlign:"center",
            lineHeight:"1.2",
            marginBottom:"45px",
            fontWeight:700,
            color: colors.textcolor,
            paddingBottom:"18px",
            position:"relative",
            letterSpacing:"0px",
            "&:after":{
                position:"absolute",
                Content:"''",
                left:"50%",
                tranform:"translatex(-50%)",
                bottom:"0",
                height:"2px",
                width:"165px",
                backgroundcolor:colors.primary,
            },
            "@media(max-width:1199px)":{
                fontSize:"32px",
                marginBottom:"30px",
                paddingBottom:"15px",
                "&:after":{
                    width:"130px",
                },
            },
            "@media(max-width:767px)":{
                fontSize:"28px",
                marginBottom:"25px",
                paddingBottom:"10px",
                "&:after":{
                    width:"100px",
                },
            },
        },
    },
});