import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import codepen from "./codepen.module.css";
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from "../Loader";

const ProjectCard = (props) => {
	// const [loaded, setLoaded] = useState(false);

  const token = localStorage.getItem("accessToken");
  const handleDelete = (id) => {
    const params = JSON.stringify({
      id: id
    });
    axios
      .post("/api/codepen/deleteProject", params, {
        "headers": {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
        },
      })
      .then(window.location.reload(true))
      .catch(err => console.error(err));

  }

  const code = `
    <html>
      <body>${props.htmlCode}</body>
      <style>${props.cssCode}</style>
    </html>
  `;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="iframe"
        height="140"
        srcDoc={code}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={codepen.codeMode} size="small">
          <Link to={`/codepen/projects/${props.id}`} color="white"><EditIcon></EditIcon></Link>
        </Button>
        <Button className={codepen.codeMode} size="small" variant="danger" onClick={() => handleDelete(props.id)}>
          <DeleteIcon></DeleteIcon>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;