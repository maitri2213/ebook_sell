import{
    Breadcrumbs,
    Button,
   // Divider,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { materialCommonStyles } from "../../utils/materialcommonstyles";
import createAccountStyle from "./style";

const Register = () =>{
    const roleList = [
        {id: 2, name:"buyer"},
        {id: 3, name:"seller"},
    ];

    const classes = createAccountStyle();
    const materialClasses = materialCommonStyles();

    return(
        <div className={classes.createAccountWrapper}>
            <div className="create-account-page-wrapper">
                <div className="container">
                <Breadcrumbs
                separator=">"
                aria-label="breadcrumb"
                className="breadcrumb-wrapper"
                >
                   <Link color="inherit" href="/" title="Home">
                    Home
                   </Link>
                   <Typography color="textPrimary">Create an Account</Typography>
                </Breadcrumbs>

                <Typography variant ="h1">Login or Create an Account</Typography>
                <div className="create-account-row">
                    <form>
                    <div className="form-block">
                      <div className="personal-information">
                         <Typography variant="h2">Personal Infromation</Typography>
                         <p>
                            Please enter the following information to create your 
                            account.
                         </p>
                         <div className="form-row-wrapper">
                            <div className="form-col">
                                <TextField
                                 id="first-name"
                                 name="firstName"
                                 label="First Name*"
                                 variant="outlined"
                                 inputProps={{ className:"small" }}
                                />
                            </div>
                            <div className="form-col">
                            <TextField
                                 id="last-name"
                                 name="lastName"
                                 label="Last Name*"
                                 variant="outlined"
                                 inputProps={{ className:"small" }}
                                />
                            </div>
                            <div className="form-col">
                            <TextField
                                 id="email"
                                 name="email"
                                 label="Email Address*"
                                 variant="outlined"
                                 inputProps={{ className:"small" }}
                                />
                            </div>
                            <div className="form-col">
                                <FormControl
                                  className="dropdown-wrapper"
                                  varient="outlined"
                                >
                                    <InputLabel htmlFor="select">Roles</InputLabel>
                                    <Select
                                     name="roleId"
                                     id={"roleId"}
                                     inputProps={{ className: "small"}}
                                     className={materialClasses.customSelect}
                                     MenuProps={{
                                        classes:{
                                            paper:materialClasses.customSelect,
                                        },
                                     }}
                                    >
                                        {roleList.length>0 &&
                                         roleList.map((role) =>(
                                            <MenuItem value={role.id} key={"name"+ role.id}>
                                                {role.name}
                                            </MenuItem>
                                         ))}
                                    </Select>
                                </FormControl>
                            </div>
                         </div>
                      </div>
                      <div className="login-information">
                        <Typography variant="h2">Login Infromation</Typography>

                        <div className="form-row-wrapper">
                            <div className="form-col">
                                <TextField
                                 id="password"
                                 type="password"
                                 name="password"
                                 label="Password *"
                                 varient="outlined"
                                 inputProps={{ className:"small" }}
                                />
                            </div>
                            <div className="form-col">
                                <TextField
                                 type="password"
                                 id="confirm-password"
                                 name="confirmPassword"
                                 label="Confirm Password *"
                                 variant="outlined"
                                 inputProps={{ className:"small" }}
                                />
                            </div>
                        </div>
                        <div className="btn-wrapper">
                            <Button
                             className="pink-btn.btn"
                             varient="contained"
                             type="submit"
                             color="primary"
                             disableElevation
                            >
                                Register
                            </Button>
                        </div>
                      </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};
export default Register;
