import Grid from "@mui/material/Grid";
import React, {useState} from "react";
import {Card, CardContent} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const CreateEvent = () =>{
    const[disableSubmit,setDisableSubmit]=useState(true);
    const [allValues, setAllValues] = useState({
        eventName: '',
        hostName: '',
        startDate: '',
        endDate:'',
        location:'',
        photo:'',
    });
    const handleChange = (e:any) => {
        e.preventDefault()
        setAllValues(prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value }
        })
        if(allValues.eventName && allValues.hostName && allValues.eventName && allValues.hostName){
            setDisableSubmit(false)
        }else {
            setDisableSubmit(true)
        }
    };
    const handleSubmit=(event : any)=>{
        event.preventDefault();
        let inputValues={
            eventName:allValues.eventName,
            hostName:allValues.hostName,
            startDate:allValues.startDate,
            endDate:allValues.endDate,
            location:allValues.location,
            photo:allValues.photo,
        }
        console.log("Input values", inputValues)
    }
    return(
        <>
            <Grid container spacing={4} justifyContent={"center"}>
                <Grid item xs={6}><br/>
                    {/*<h5 style={{textAlign:"center"}}>Create an Event</h5>*/}
                            <Card variant="outlined" style={{borderRadius:"15px"}}>
                                <CardContent>
                                    <h2>Create an Event</h2>
                                    {/*<p>Already have an account? <Link>Sign in</Link></p>*/}
                                    <div className="form">
                                        <Grid container spacing={4}>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="eventName"
                                                    name="eventName"
                                                    variant="outlined"
                                                    type="text"
                                                    autoComplete={"off"}
                                                    size={"small"}
                                                    fullWidth
                                                    placeholder="Event Name"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="hostName"
                                                    name="hostName"
                                                    variant="outlined"
                                                    type="text"
                                                    size={"small"}
                                                    fullWidth
                                                    autoComplete={"off"}
                                                    placeholder="Host Name"
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="startDate"
                                                    name="startDate"
                                                    variant="outlined"
                                                    type="date"
                                                    size={"small"}
                                                    autoComplete={"off"}
                                                    placeholder="Start Date"
                                                    fullWidth
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="endDate"
                                                    name="endDate"
                                                    variant="outlined"
                                                    type="date"
                                                    size={"small"}
                                                    autoComplete={"off"}
                                                    placeholder="End Date"
                                                    fullWidth
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="location"
                                                    name="location"
                                                    variant="outlined"
                                                    type="text"
                                                    size={"small"}
                                                    autoComplete={"off"}
                                                    placeholder="Location"
                                                    fullWidth
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField
                                                    className="input-field"
                                                    id="photo"
                                                    name="photo"
                                                    variant="outlined"
                                                    type="file"
                                                    size={"small"}
                                                    autoComplete={"off"}
                                                    placeholder="Photo"
                                                    fullWidth
                                                    onChange={(e) => handleChange(e)}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    style={{
                                                        width:"100%",
                                                        textTransform:"capitalize",
                                                        fontSize:"14px",
                                                        padding:"0px",
                                                        background: "#8456EC",
                                                        borderRadius: "1.59268px"
                                                    }}
                                                    //onClick={history.push("/events")}
                                                    onClick={(event) => handleSubmit(event)}
                                                    variant="contained"
                                                    color="primary"
                                                    size={"small"}
                                                    disabled={disableSubmit}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
export default CreateEvent;
