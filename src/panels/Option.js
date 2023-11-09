import React from 'react';
import { Button, Div, Panel, PanelHeader} from '@vkontakte/vkui';
import CloseButton from '../img/CloseButton.svg'
import '../style/OptionPage.css';

//import persik from '../img/persik.png';

const Option = ({id, go}) => (
	<Panel id={id}>
		<PanelHeader>Настройки</PanelHeader>

		<Div className='buttonBack'>
			<Button className='closeButton' stretched size="l" mode="secondary" onClick={go} data-to="home">
				<img className="imgClose" src={CloseButton} alt="Close"/>
			</Button>
		</Div>

		<Div className='buttonOptions'>
			<Button className='optionButton' stretched size="l" mode="secondary" onClick={go} data-to="thems">
				<label className='text'>Темы</label>
			</Button>

			<Button className='optionButton' stretched size="l" mode="secondary" onClick={go} data-to="persik">
				<label className='text'>Напоминания</label>
			</Button>
		</Div>
	</Panel>
)
/*const Option = props => (
	<Panel id={props.id}>
		<PanelHeader 
		before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Настройки
		</PanelHeader>
	</Panel>
);

Option.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};*/

export default Option;