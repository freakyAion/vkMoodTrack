import React from "react";
import {Panel, PanelHeader, Button, Group, Div, HorizontalCell, Avatar} from '@vkontakte/vkui';
//import { PieDiagramConfig } from "mermaid/dist/config.type";
//import Mermaid from "react-mermaid2";
import '../style/OptionPage.css';

import CloseButton from '../img/CloseButton.svg'
import Add from '../img/Add.svg';
import CalendarImg from '../img/CalendarImg.svg';
import Statistics from '../img/Statistics.svg';
import Next from '../img/Next.svg';
import { GetCurrentDate } from "../elements/GetCurrentDate";
import UserDiogramma from '../elements/UserDiogramma';
import { GetCurrentMonth } from "../elements/GetCurrentlMonth";
import '../style/Statistic.css'

const StatisticsEmogi = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Ваша статистика</PanelHeader>

        <Group>
            <Div className='buttonBack'>
				<Button className='closeButton' stretched size="l" mode="secondary" onClick={go} data-to="home">
					<img className="imgClose" src={CloseButton} alt="Close"/>
				</Button>
			</Div>

            <Div className="headerWithMonthAndYear">
                <Div className="elmentsInHeader">
                    <label className="textMonth" >
                        {<GetCurrentMonth />}
                    </label>
                    
                    <Button className="btnNext">
                        <img className="nextBtn" src={Next} />
                    </Button>
                    {/*<UserDiogramma  chartData={[10, 15, 20]} /> */}
               </Div>
            </Div>

            <Div className="btnChoise">
                <Button className="btn month">
                    <label className="textInMonth">Месяц</label>
                </Button>

                <Button className="btn year">
                    <label className="textInYear">Год</label>
                </Button>
            </Div>

            <Div className="pieCharmDiogramm">
                <div className="pieCharm">
                    <UserDiogramma />
                </div>
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
        </Group>
    </Panel>
)

export default StatisticsEmogi;