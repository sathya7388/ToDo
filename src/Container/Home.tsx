import React, { useState } from 'react';
import CardComponent from '../Components/Card';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { data } from './data';
import ModalComponent from '../Components/Modal';
import { IToDoData, InitToDoData } from '../Model/constant';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedData, setSelectedData] = useState<IToDoData>(InitToDoData)

  const onCardClick = (x: IToDoData) => {
    setSelectedData(x)
    // setIsOpen(!isOpen)
  }

  const setModalClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <ModalComponent data={selectedData} isOpen={isOpen} setIsOpen={setModalClose} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map(x => {
            return <Grid item xs={6} md={4} lg={3}>
              <div onClick={() => onCardClick(x)}>
                <CardComponent data={x} />
              </div>
            </Grid>
          })}
        </Grid>
      </Box>
    </div>
  );
}