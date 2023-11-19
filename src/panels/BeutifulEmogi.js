import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer, WriteBar } from '@vkontakte/vkui';

import '../style/Emogi.css';

import CloseButton from '../img/CloseButton.svg';
import Beutiful from '../img/Emoji/Beutiful.svg';
import BackToEmogiSerch from '../img/BackToEmogiSerch.svg';

const BeutifulEmogi = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Отличное настроение</PanelHeader>
        
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
                <img className='emogiImg' src={Beutiful} alt='Beutiful'/>
                <Button className='btnBackToEmojiSerch' stretched size='l' mode='secondary' onClick={go} data-to="emoji">
                    <img className='imgBackToEmojiSerch' src={BackToEmogiSerch} alt='back' />
                </Button>
            </Div>
            <Div className='textElement'>
                <label className='text'>Отлично</label>
            </Div>
        </Div>

        <Div className='moreEmoji'>
            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>гармония</label>
                </Button>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>облегчение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>воодушевление</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>любовь</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>счастье</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>благодарность</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>влюбленность</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>эйфория</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>трепет</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>восхищение</label>
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

export default BeutifulEmogi;