import React from 'react';
import PropTypes from 'prop-types';
import'./Persik.css';
import Colba from '../img/Colba.png'
import Example from './Example';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

/*const formateDateToString = (date) => {
	let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
  
	let mm = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  
	return dd + "." + mm;
  }

let a = new Date();
document.getElementById('todayDate').innerHTML = formateDateToString(a);*/

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>MoodTrack</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<Div className='todayDate'>
			
		</Div>
		<Div className='colbastyle'>
		<img className="Colba" src={Colba} alt="Colba"/>
		</Div>
		<Group footer={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Menu
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Calendar
				</Button>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Plus
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
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
};

export default Home;
