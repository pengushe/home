import React from 'react';
import { ChatEngine } from 'react-chat-engine';

export default function MyChatScreen() {
	return (
		<ChatEngine
			height='100vh'
			userName='admin'
			userSecret='Admin'
			projectID='e958cbc3-5fe9-4d37-a45b-79224f7710b4'
		/>
	);
}