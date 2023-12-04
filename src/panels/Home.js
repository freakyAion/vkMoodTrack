import React from 'react';
import PropTypes from 'prop-types';
import'./Persik.css';
import Colba from '../img/Colba.png';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Footer } from '@vkontakte/vkui';
import BurgerButton from '../img/BurgerButton.svg';
import { UserFooter } from '../elements/UserFooter';
import Add from '../img/Add.svg';
import CalendarImg from '../img/CalendarImg.svg';
import Statistics from '../img/Statistics.svg';
import { GetCurrentDate } from '../elements/GetCurrentDate';
import {Vial, changeEmotionClasses} from '../elements/vial'

var index = 0;
const updateClasses = changeEmotionClasses(['perfect', 'good', 'normal', 'bad', 'awful'], index, 'newClass');

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>MoodTrack</PanelHeader>
		{/*{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}*/}
		<Group>
			<Div className='HightBitton'>
				<Button className='hightButton' stretched size="l" mode="secondary" onClick={go} data-to="option">
					<img className="imgInButton" src={BurgerButton} alt="Colba"/>
				</Button>

				<Div className='todayDateDiv'>
					<label className='todayDate'>
						{GetCurrentDate()}
					</label>
				</Div>

				<Div className='colbastyle'>
					<Vial emotions={['perfect', 'good', 'normal', 'bad', 'awful']}/>
			{/*<Calendar />*/}
				</Div>
			</Div>
			
			<Div className='downPanel'>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="calendar">
					<img className="imgInButton" src={CalendarImg} alt="CalendarButton"/>
				</Button>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="emoji">
					<img className="imgInButton" src={Add} alt="AddButton"/>
				</Button>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="statistics">
					<img className="imgInButton" src={Statistics} alt="Statistics"/>
				</Button>
			</Div>
			{/*<UserFooter />*/}
		</Group>
		

		{/*<Group main={<Header mode="secondary">Date and Colba</Header> }>
			
		</Group>*/}
	</Panel>
);

/*Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};*/

export default Home;
