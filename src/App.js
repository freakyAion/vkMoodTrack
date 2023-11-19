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

const App = () => {
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
								<Home id='home' fetchedUser={fetchedUser} go={go} />
								<Persik id='persik' go={go} />
								<Option id='option' go={go} />
								<SerchThems id='thems' go={go} />
								<UserCalendar id='calendar' go={go} />
								<SerchEmoji id='emoji' go={go} />
								<BeutifulEmogi id='beutiful' go={go} />
								<GoodEmogi id='good' go={go} />
								<NormalEmogi id='normal' go={go} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
