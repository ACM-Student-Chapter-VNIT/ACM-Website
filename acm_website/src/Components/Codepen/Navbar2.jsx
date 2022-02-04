import Box from '@mui/material/Box';
import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import { Button, TextField } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import codepen from "./codepen.module.css";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const NavBar = () => {
    const [name, setName] = useState('');
    const { username } = useParams();
    const token = localStorage.getItem("accessToken");
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }
    const handleNewproject = () => {
        
            const params = JSON.stringify({
                "name": name
            });
            axios
                .post("/api/codepen/newProject", params, {
                    "headers": {
                        "content-type": "application/json",
                        "Authorization": "Bearer " + token,
                    },
                })
                .then(res => {
                    window.location.href = '/codepen/projects/' + res.data.id;
                })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={codepen.Navbar}>
            <Box sx={{ flexGrow: 1 }}>
                <Toolbar variant="dense">
                    <h1 className={codepen.heading}>{"<CodePro/>"}</h1>
                    <div className={codepen.homebuttons}>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>New Project</DialogTitle>
                            <DialogContent>
                                <TextField type="text" placeholder="Name of Project" variant="outlined" color="warning"
                                    onChange={(e) => setName(e.target.value)} />
                                <br />
                                <br />
                                <Button variant="text" onClick={handleNewproject}>Create</Button>
                            </DialogContent>
                        </Dialog>
                        <Button variant="outlined" className={codepen["codeMode-active"]} component="span" onClick={handleClickOpen}><AddBoxIcon></AddBoxIcon> </Button>
                    </div>
                </Toolbar>
            </Box>
        </div>
    );
}

export default NavBar;