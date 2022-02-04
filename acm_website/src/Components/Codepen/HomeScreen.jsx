import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import axios from 'axios';
import codepen from "./codepen.module.css";
import { useParams } from 'react-router';
import NavBar2 from './Navbar2';
import Loader from "../Loader";

const HomeScreen = () => {

  let username=null;
  const [projects, setProjects] = useState([]);
	const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios.get('/api/codepen/getAllProjects', {
      "headers": {
        "content-type": "application/json",
        "Authorization": "Bearer " + token,
      },
    })
      .then((res) => {
        setProjects(res.data);
        // console.log(res.data[0]);
        if(res.data[0] !== undefined){
          username = res.data[0].owner;
        }
				setLoaded(true);
      })
      .catch(err => {
        console.error(err);
        window.location.href = '/login';
      });
  }, [])

  return (
    <>
    	<NavBar2 />
			{loaded ?
			<div className={codepen.DisplayCards}>
        <Grid container spacing={3}>
          {
            projects.length !== 0 ?
              projects.map((project) => {
                return (
                  <Grid key={project._id} item xs={12} lg={4} md={6}>
                    <ProjectCard user={username} name={project.name} htmlCode={project.html} cssCode={project.css} id={project._id.toString()}></ProjectCard>
                  </Grid>
                )
              })
              :
              <div>
                <h1>Hey, No Projects! Create one now and improve your frontend Skills!!</h1>
              </div>
          }
        </Grid>
      </div> : <Loader />}
    </>
  );
}

export default HomeScreen;

