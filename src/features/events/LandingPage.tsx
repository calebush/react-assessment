import {Grid} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () =>{
    return (
        <>
            <Grid container spacing={2} className="landing-page">
                <Grid item xs={6} md={6}>
                        < img src= "/landing.png" className="landing-image" />
                </Grid>
                <Grid item xs={6} md={3}>
                    < img src= "/heading.png" className="leftText" />
                    <Link to="/create">
                        < img src= "/Button.png" className="Button" />
                    </Link>
                </Grid>
            </Grid>

        </>
    )

}
export default LandingPage;
