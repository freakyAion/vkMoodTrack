import React from 'react';
import { Calendar, Button, Div, Panel, PanelHeader, Group, Header } from '@vkontakte/vkui';
import BurgerButton from '../img/BurgerButton.svg';
//import UserFooter from '../elements/UserFooter';
import '../style/Calendar.css';
import './Persik.css';
import Add from '../img/Add.svg';
import CalendarImg from '../img/CalendarImg.svg';
import Statistics from '../img/Statistics.svg';
import Summer from '../img/wether/Summer.svg';

const UserCalendar = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Календарь</PanelHeader>
        
		<Div className='flexInCalendar'>
			<Div className='HightBitton'>
				<Button className='hightButton' stretched size="l" mode="secondary" onClick={go} data-to="option">
					<img className="imgInButton" src={BurgerButton} alt="Colba"/>
				</Button>
			</Div>

        	<Div className='colbastyle'>
				<Calendar className='calendar' />
			</Div>

			<Div className='colbastyle'>
				<img className='summer' src={Summer} alt="Summer" />
			</Div>

        	<Group className='footer' footer={<Header mode='secondary'></Header>}>
				<Div className='downPanel'>
					<Button className='button' stretched size="l" mode="secondary">
						<img className='imgInButton'  src={CalendarImg} alt="CalendarButton" />
					</Button>

					<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="emoji">
						<img className='imgInButton' src={Add} alt="AddButton" />
					</Button>

					<Button className='button' stretched size="l" mode="secondary">
						<img className='imgInButton' src={Statistics} alt="Statistics" />
					</Button>
				</Div>
			</Group>
		</Div>
        
    </Panel>
)

export default UserCalendar;