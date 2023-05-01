import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import gym from '../images/gym.jpg';

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src={gym} alt={"gym"} />
            <h1>UGLY AND/OR FAT?</h1>
            <h2>Just be ugly!</h2>
            <p>Get started in the gym today!</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection