import React, {useEffect, useState} from "react";
import {
    Card,
    CardContent,
    Grid,
    List,
    ListItemIcon,
    ListItem,
    ListItemText,
    TextField,
    Button,
    Avatar,
    Stack,
    IconButton,
    TextareaAutosize,
} from "@mui/material";
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {toast} from "react-toastify";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";


const Events = () => {
    const[users, setUsers]=useState<any>([])
    const[posts, setPosts]=useState<any>([])
    const[isHovering, setIsHovering]= useState(-1)
    const[editing, setEditing]= useState(-1)
    const[loading, setLoading]= useState(false)
    const[showConfirm, setShowConfirm]= useState(false)
    const[confirmed, setConfirmed]= useState(false)
    const[body, setBody]= useState('')
    const[postBody, setPostBody]= useState('')
    const handlePostChange=(e:any)=>{
        setPostBody(e.target.value)
    }
    const events = useSelector((state: RootState) => state.event.events)
    const dispatch = useDispatch()


    function stringToColor(string:any) {
        let hash = 0;
        let i;
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        return color;
    }
    function stringAvatar(name:any) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }


    const handleCopy=(event: Event)=>{
        toast.info(`Name: Event Name`)
    }
    const handleChangeTextArea=(e:any)=>{
       // setBody(e.target.value)
    }
    const handleCancel=()=>{
        setEditing(-1)
    }
    const handleUpdateAuth = (event:Event, index:number) =>{

            setEditing(index)
    }
    const handleUpdatePost = async (event:Event) =>{
        setLoading(true)
        const data = {
            body: body,
        }
    }

    const handleDeletePost = async (id:any) =>{

    }
    const handleSubmitDelete=async ()=>{
        setLoading(true)
            toast.success('Post deleted successfully!')
            setConfirmed(false)
            setShowConfirm(false)
            setLoading(false)
        }
    const handleShowConfirm= async ()=>{
    }
    return(
        <>
            <Grid container spacing={4} justifyContent={"center"}>
                <Grid item xs={6}><br/>
                    <div style={{textAlign:"center", fontSize:"22px"}}>List of Events</div>
                    <Card>
                        {
                            events.map((event:Event, index:number) => (
                                        <CardContent>
                                            <List component="nav" aria-label="main mailbox folders"
                                                  className="list"
                                                  key={index}
                                                  onMouseEnter={()=>setIsHovering(index)}
                                                  onMouseLeave={()=>setIsHovering(-1)}
                                            >
                                                <ListItem >
                                                    <ListItemIcon>
                                                        <Avatar {...stringAvatar(
                                                            `US`)
                                                        } />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        style={{paddingLeft:"10px"}}
                                                    >
                                                        Text Here
                                                    </ListItemText>
                                                    <div hidden={isHovering === index ? false: true} >
                                                        <Stack  direction="row" alignItems="center" spacing={1}>
                                                            <Avatar className="avatar">
                                                                <IconButton onClick={()=>handleCopy(event)} aria-label="copy" size="small">
                                                                    <ContentCopyRoundedIcon fontSize="inherit" />
                                                                </IconButton>
                                                            </Avatar>
                                                            <Avatar className="avatar">
                                                                <IconButton onClick={()=>handleUpdateAuth(event, index)} aria-label="delete" size="small">
                                                                    <EditRoundedIcon fontSize="inherit" />
                                                                </IconButton>
                                                            </Avatar>
                                                            <Avatar className="avatar">
                                                                <IconButton onClick={()=>handleDeletePost(event)} aria-label="delete" size="small">
                                                                    <DeleteRoundedIcon fontSize="inherit" />
                                                                </IconButton>
                                                            </Avatar>

                                                        </Stack>
                                                    </div>
                                                </ListItem>
                                                <ListItem >
                                                    <ListItemText style={{paddingLeft:"10px"}}>
                                                        <div>Title of the Event</div><br/>
                                                        <div>
                                                            {editing !== index ?
                                                                'event'
                                                                :
                                                                <>
                                                                    < TextareaAutosize
                                                                        className='textArea'
                                                                        name='body'
                                                                        defaultValue={'event'}
                                                                        onChange={(e)=>handleChangeTextArea(e)}
                                                                    />
                                                                    <div>
                                                                        <LoadingButton
                                                                            loading={loading}
                                                                            loadingPosition="start"
                                                                            onClick={()=>handleUpdatePost(event)}
                                                                            style={{color:"green", backgroundColor:"#FFFF"}}
                                                                            startIcon={<SaveIcon />}
                                                                            variant="outlined"
                                                                        >
                                                                            SAVE
                                                                        </LoadingButton>
                                                                        <LoadingButton
                                                                            loading={false}
                                                                            loadingPosition="start"
                                                                            onClick={()=>handleCancel()}
                                                                            style={{color:"red", backgroundColor:"#FFFF"}}
                                                                            startIcon={<CancelIcon />}
                                                                            variant="outlined"
                                                                        >
                                                                            Cancel
                                                                        </LoadingButton>
                                                                    </div>
                                                                </>

                                                            }
                                                        </div>
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        </CardContent>
                                ))
                        }
                    </Card>

                </Grid>
            </Grid>
        </>
    )
}

export default Events;
