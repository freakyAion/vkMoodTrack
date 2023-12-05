import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Option from './panels/Option';
import SerchThems from './panels/SerchThems';
import UserCalendar from './panels/UserCalendar';
import SerchEmoji from './panels/SerchEmoji';
import BeutifulEmogi from './panels/BeutifulEmogi';
import GoodEmogi from './panels/GoodEmogi';
import NormalEmogi from './panels/NormalEmogi';
import BadEmoji from './panels/Emoji/BadEmoji';
import VeryBadEmoji from './panels/Emoji/VeryBadEmoji';
import StatisticsEmogi from './panels/StatisticsEmogi';
import { render } from 'react-dom';

const App = () => {

	const initialEmotions = ['empty', 'empty', 'empty'];
	const [emotions, setEmotions] = useState(initialEmotions);
	const [currentIndex, setCurrentIndex] = useState(2);

	const handleButtonClick = (emotion) => {
	    const updatedEmotions = [...emotions];
	    updatedEmotions[currentIndex] = emotion;
	    const nextIndex = (currentIndex - 1) % emotions.length;
	    setEmotions(updatedEmotions);
	    setCurrentIndex(nextIndex);
	};

	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home emotions={emotions} id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
								<Option id='option' go={go} />
								<SerchThems id='thems' go={go} />
								<UserCalendar id='calendar' go={go} />
								<SerchEmoji id='emoji' go={go} />
								<BeutifulEmogi handleButtonClick={handleButtonClick} id='beutiful' go={go} />
								<GoodEmogi handleButtonClick={handleButtonClick} id='good' go={go} />
								<NormalEmogi handleButtonClick={handleButtonClick} id='normal' go={go} />
								<BadEmoji handleButtonClick={handleButtonClick} id='bad' go={go} />
								<VeryBadEmoji handleButtonClick={handleButtonClick} id='veryBad' go={go} />
								<StatisticsEmogi id='statistics' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
