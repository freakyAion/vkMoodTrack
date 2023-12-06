import React from "react";
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer, WriteBar } from '@vkontakte/vkui';

import '../style/Emogi.css';

import CloseButton from '../img/CloseButton.svg'
import VeryBad from '../img/Emoji/VeryBad.svg';
import BackToEmogiSerch from '../img/BackToEmogiSerch.svg';

const VeryBadEmoji = ({id, go, handleButtonClick}) => (
    <Panel id={id}>
        <PanelHeader>Ужасное настроение</PanelHeader>

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
                    <img className='emogiImg' src={VeryBad} alt='Beutiful'/>
                    <Button className='btnBackToEmojiSerch' stretched size='l' mode='secondary' onClick={() => handleButtonClick('awful')} data-to="emoji">
                        <img className='imgBackToEmojiSerch' src={BackToEmogiSerch} alt='back' />
                    </Button>
                </Div>
                <Div className='textElement'>
                    <label className='text'>Плохо</label>
            </Div>
        </Div>

        <Div className='moreEmoji'>
            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>утрата</label>
                </Button>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>истощение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>страх</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>разочарование</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>унижение</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>отчаяние</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>безысходность</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>ярость</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>депрессивность</label>
                </Button>
                    <Button className='buttonsSerchEmogi' mode="secondary"> 
                        <label className='textInEmotion'>горе</label>
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

export default VeryBadEmoji;