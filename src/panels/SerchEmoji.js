import React from 'react';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

import '../style/OptionPage.css';
import '../style/SerchEmoji.css';

import CloseButton from '../img/CloseButton.svg';
import Beutiful from '../img/Emoji/Beutiful.svg';
import Good from '../img/Emoji/Good.svg';
import Normal from '../img/Emoji/Normal.svg';
import Bad from '../img/Emoji/Bad.svg';
import VeryBad from '../img/Emoji/VeryBad.svg';

const SerchEmoji = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Выбор эмоции</PanelHeader>

        <Group>
            <Div className='buttonBack'>
                <Button className='closeButton' stretched size="l" mode="secondary" onClick={go} data-to="home">
                    <img className='imgClose' src={CloseButton} alt="Close" />
                </Button>
            </Div>

            <Div className='header'>
                <label className='text'>Выберите эмоцию</label>
            </Div>

            <Div className='Emoji'>
                <Button className='buttonEmogi'stretched size="l" mode="secondary" onClick={go} data-to="beutiful">
                    <Div className='locationElements'>
                        <img className='img' src={Beutiful} alt="BeutifulEmoji" />
                        <label className='smallText'>Отлично</label>
                    </Div>
                </Button>

                <Button className='buttonEmogi'stretched size="l" mode="secondary" onClick={go} data-to="good">
                    <Div className='locationElements'>
                        <img className='img' src={Good} alt="GoodEmoji" />
                        <label className='smallText'>Хорошо</label>
                    </Div>              
                </Button>

                <Button className='buttonEmogi'stretched size="l" mode="secondary" onClick={go} data-to="normal">
                    <Div className='locationElements'>
                        <img className='img' src={Normal} alt="NormalEmoji" />
                        <label className='smallText'>Нормально</label>
                    </Div>              
                </Button>

                <Button className='buttonEmogi'stretched size="l" mode="secondary" onClick={go} data-to="bad">
                    <Div className='locationElements'>
                        <img className='img' src={Bad} alt="BadEmoji" />
                        <label className='smallText'>Плохо</label>
                    </Div>
                </Button>

                <Button className='buttonEmogi'stretched size="l" mode="secondary" onClick={go} data-to="veryBad">
                    <Div className='locationElements'>
                        <img className='img' src={VeryBad} alt="VeryBadEmoji" />
                        <label className='smallText'>Ужастно</label>
                    </Div>
                </Button>
            </Div>
        </Group>
        
    </Panel>
)

export default SerchEmoji;