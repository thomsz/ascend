import React from 'react';
import { Form, Select, Slider } from 'antd';

const SlotManager = () => {
	return (
		<div>
			<h2>Slot Manager</h2>
			<p>
				MY SLOTS
				<br />
				OPEN A NEW SLOT
				<br />
				The date i chose
				<br />
				<Form layout="horizontal" colon={false}>
					<Form.Item label="Number of participants">
						<Slider
							defaultValue={2}
							max={10}
							min={2}
							dots
							style={{ width: '70%', margin: 'auto' }}
						/>
					</Form.Item>
					<Form.Item label="Video app">
						<Select defaultValue="hangouts">
							<Select.Option value="hangouts">
								Google Hangouts
							</Select.Option>
							<Select.Option value="skype">Skype</Select.Option>
							<Select.Option value="zoom">Zoom</Select.Option>
						</Select>
					</Form.Item>
				</Form>
			</p>
		</div>
	);
};

export default SlotManager;
