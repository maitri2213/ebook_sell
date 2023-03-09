import { makeStyles } from "@mui/material";
import { colors } from "./constant/constant";


 const createAccountStyle = makeStyles((theme) => ({
    createAccountWrapper:{
        "& .create-account-page-wrapper":{
            padding:"42px 0 80px",
            "@media (max-width:991px)":{
                padding:"35px 0 50px",
            },
            "@media (max-width:767px)":{
                padding:"35px 0 40px",
            },
            "& .create-account-row":{
                "& .personal-infromation":{
                    marginBottom:"32px",
                },
                "& p":{
                    color:colors.lightTextColor,
                    fontWeight:300,
                    fontSize:"15px",
                    marginBottom:"16px",
                },
                "& .backlink":{
                    color:colors.primary,
                    fontWeight:"300",
                },
                "& .btn-wrapper":{
                    marginBottom:"15px",
                    marginTop:"17px",
                    "& .btn":{
                        minWidth:"136px",
                        padding:"0 15px",
                    },
                },
            },
        },
    },
}));

export default createAccountStyle;