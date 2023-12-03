import React from 'react';
import { Header, Button, Group,  Div } from '@vkontakte/vkui';
import '../panels/Persik.css';
import Add from '../img/Add.svg';
import CalendarImg from '../img/CalendarImg.svg';
import Statistics from '../img/Statistics.svg';

export function UserFooter({id, go}) {
	return (
		<Group id={id}>
			<Div className='downPanel'>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="persik">
					<img className="imgInButton" src={CalendarImg} alt="CalendarButton"/>
				</Button>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="persik">
					<img className="imgInButton" src={Add} alt="AddButton"/>
				</Button>
				<Button className='button' stretched size="l" mode="secondary" onClick={go} data-to="persik">
					<img className="imgInButton" src={Statistics} alt="Colba"/>
				</Button>
			</Div>
		</Group>
	);
}

//export default UserFooter;