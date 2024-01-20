import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ITask, IToDoData } from './../../Model/constant';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export interface IProps {
  data: IToDoData
}

export default function CardComponent(props: IProps) {
  const { data } = props
  const { title, pinned, toDoTaskList } = data
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <TextField
              value={title}
              variant="standard"
              margin='none'
            />
          </Typography>
          {toDoTaskList && toDoTaskList.length > 0 &&
            toDoTaskList.map((x: ITask) => {
              return <div>

                <Checkbox checked={x.checked} />
                <TextField
                  value={x.content}
                  variant="standard"
                  margin='none'
                />
              </div>
            })
          }
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Box>
  );
}