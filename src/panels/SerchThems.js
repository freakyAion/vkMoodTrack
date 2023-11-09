import React from 'react';
import { Button, Div, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import CloseButton from '../img/CloseButton.svg';
import '../style/SerchThemsPage.css';
import '../style/OptionPage.css';

const SerchThems = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Выбор темы</PanelHeader>

        <Div className='buttonBack'>
			<Button className='closeButton' stretched size="l" mode="secondary" onClick={go} data-to="home">
				<img className="imgClose" src={CloseButton} alt="Close"/>
			</Button>
		</Div>

        <Div className='header'>
            <p className='text'>Темы</p>
        </Div>

        <Div className='buttonsThems'> 
            <Div className='lines'>
                <Button className='buttons color1'  stretched size="l" mode="secondary" onClick={go} data-to="home" />

                <Button className='buttons color2'  stretched size="l" mode="secondary" onClick={go} data-to="home" />

                <Button className='buttons color3'  stretched size="l" mode="secondary" onClick={go} data-to="home" />
            </Div>

            <Div className='lines'>
                <Button className='buttons color4'  stretched size="l" mode="secondary" onClick={go} data-to="home" />

                <Button className='buttons color5'  stretched size="l" mode="secondary" onClick={go} data-to="home" />

                <Button className='buttons color6'  stretched size="l" mode="secondary" onClick={go} data-to="home" />
            </Div>
        </Div>
    </Panel>
)

export default SerchThems;