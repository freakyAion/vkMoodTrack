import React from "react";
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer, WriteBar } from '@vkontakte/vkui';

import '../../style/Emogi.css';

import CloseButton from '../../img/CloseButton.svg'
import Bad from '../../img/Emoji/Bad.svg';
import BackToEmogiSerch from '../../img/BackToEmogiSerch.svg';

const BadEmoji = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Плохое настроение</PanelHeader>

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
                    <img className='emogiImg' src={Bad} alt='Beutiful'/>
                    <Button className='btnBackToEmojiSerch' stretched size='l' mode='secondary' onClick={go} data-to="emoji">
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
                    <label className='textInEmotion'>раздрожительность</label>
                </Button>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>обида</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi'  mode="secondary">
                    <label className='textInEmotion'>неуверенность</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>стыд</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>возмущение</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>отвращение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>недоверие</label>
                </Button>
                <Button className='buttonsSerchEmogi' mode="secondary">
                    <label className='textInEmotion'>нетерпение</label>
                </Button>
            </Div>

            <Div className='line'>
                <Button className='buttonsSerchEmogi' mode="secondary"> 
                    <label className='textInEmotion'>усталость</label>
                </Button>
                    <Button className='buttonsSerchEmogi' mode="secondary"> 
                        <label className='textInEmotion'>тревога</label>
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

export default BadEmoji;