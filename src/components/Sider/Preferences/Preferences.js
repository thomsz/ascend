import React from 'react';
import { Form, Input, Radio } from 'antd';

const Preferences = () => {
	return (
		<div>
			<h2>Preferences</h2>
			<p>
				<Form layout="horizontal" colon={false}>
					<Form.Item label="Name">
						<Input size="large" placeholder="My Name" />
					</Form.Item>
					<Form.Item label="Mother tongue">
						<Radio.Group>
							<Radio.Button value="de">Deutsch</Radio.Button>
							<Radio.Button value="he">עברית</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item label="I'm looking for">
						<Radio.Group>
							<Radio.Button value="de">Deutsch</Radio.Button>
							<Radio.Button value="he">עברית</Radio.Button>
						</Radio.Group>
					</Form.Item>
				</Form>
			</p>
		</div>
	);
};

export default Preferences;
