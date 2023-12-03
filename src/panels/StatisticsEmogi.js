import React from "react";
import {Panel, PanelHeader, Button, Group, Div, HorizontalCell, Avatar} from '@vkontakte/vkui';
//import { PieDiagramConfig } from "mermaid/dist/config.type";
//import Mermaid from "react-mermaid2";

import Add from '../img/Add.svg';
import CalendarImg from '../img/CalendarImg.svg';
import Statistics from '../img/Statistics.svg';
import Next from '../img/Next.svg';
import { GetCurrentDate } from "../elements/GetCurrentDate";
import UserDiogramma from '../elements/UserDiogramma';

const StatisticsEmogi = ({id, go}) => (
    <Panel id={id}>
        <PanelHeader>Ваша статистика</PanelHeader>

        <Group>
            <Div className="headerWithMonthAndYear">
                <Div className="elmentsInHeader">
                    {/*<GetCurrentDate />
                    <Button>
                        <img className="nextBtn" src={Next} />
                    </Button>*/} 
                    <UserDiogramma  chartData={[10, 15, 20]} />
               </Div>
            </Div>
        </Group>
    </Panel>
)

export default StatisticsEmogi;