import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer, WriteBar } from '@vkontakte/vkui';

import '../style/Emogi.css';

import CloseButton from '../img/CloseButton.svg';
import Normal  from '../img/Emoji/Normal.svg';
import BackToEmogiSerch from '../img/BackToEmogiSerch.svg';

const NormalEmogi = ({id, go, handleButtonClick}) => (
    <Panel id={id}>
        <PanelHeader>Нормальное настроение</PanelHeader>

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
                <img className='emogiImg' src={Normal} alt='Beutiful'/>
                <Button className='btnBackToEmojiSerch' stretched size='l' mode='secondary' onClick={() => handleButtonClick('normal')} data-to="emoji">
                    <img className='imgBackToEmojiSerch' src={BackToEmogiSerch} alt='back' />
                </Button>
            </Div>
            <Div className='textElement'>
                <label className='text'>Нормально</label>
            </Div>
        </Div>

        <Div className='moreEmoji'>
            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>теплота</label>
                </Button>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>принятие</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>эмпатия</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>спокойствие</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>доверие</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>увлечение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>радость</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>симпатия</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>интерес</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>надежда</label>
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

export default NormalEmogi;