import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer, WriteBar } from '@vkontakte/vkui';

import '../style/Emogi.css';

import CloseButton from '../img/CloseButton.svg';
import Good from '../img/Emoji/Good.svg';
import BackToEmogiSerch from '../img/BackToEmogiSerch.svg';
import {Vial} from "../elements/vial.js"

const GoodEmogi = ({id, go, handleButtonClick}) => (
    <Panel id={id}>
        <PanelHeader>Хорошее настроение</PanelHeader>

        <Group>
        <Div className='buttonBack'>
			<Button className='closeButton' stretched size="l" mode="secondary" onClick={go} data-to="home">
				<img className="imgClose" src={CloseButton} alt="Close"/>
			</Button>
		</Div>

        <Div className='header'>
            <label className='textHeader'>Что вы чувствуете?</label>
        </Div>

        <Div className='elementsEmogi'>
            <Div className='moodBlock'>
                <img className='emogiImg' src={Good} alt='Beutiful'/>
                <Button className='btnBackToEmojiSerch' stretched size='l' mode='secondary' onClick={() => handleButtonClick('good')} data-to="emoji">
                    <img className='imgBackToEmojiSerch' src={BackToEmogiSerch} alt='back' />
                </Button>
            </Div>
            <Div className='textElement'>
                <label className='text'>Хорошо</label>
            </Div>
        </Div>

        <Div className='moreEmoji'>
            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>уважение</label>
                </Button>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>предвкушение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>любовь к себе</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>забота</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>гордость</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>удивление</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>преданность</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>доброта</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>бодрость</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>ностальгия</label>
                </Button>
            </Div>
        </Div>

        <Div>
            <div className='writingBar'>
                <label className='headerInWeiteBar'>Напишите свои мысли</label>
                <WriteBar className='bar' />
            </div>
        </Div>
        </Group>
    </Panel>
)

export default GoodEmogi;