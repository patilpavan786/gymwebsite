import React from "react";
import TrainingStyle from './Training.module.css'
import TrainerSection from './TrainerSection'

import Carousel from 'better-react-carousel'

export default function Training() {
  return (
    <>
    <div className={TrainingStyle.box}>
      
      <div className={TrainingStyle.car}>
      <h1 className={TrainingStyle.head}>TRAINING PROGRAM</h1>
      <Carousel  cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/1375883/pexels-photo-1375883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   
      </Carousel.Item>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  
      </Carousel.Item>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/8810078/pexels-photo-8810078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

      </Carousel.Item>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  
      </Carousel.Item>
      <Carousel.Item>
      <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
 
      </Carousel.Item>
      <Carousel.Item>
      <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
   
      </Carousel.Item>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
     
      </Carousel.Item>
      <Carousel.Item>
        <img className={TrainingStyle.img} width="100%" src="https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  
      </Carousel.Item>
     
    </Carousel>
 

      </div>
      </div>
      <div>
      <TrainerSection/>
      </div>
    </>
    )
    }