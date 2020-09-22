import React, { useState } from 'react';
import { Form, Input, Radio } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setMotherTongue, setLookingFor } from '../../../app/actions';

const Preferences = () => {
	const dispatch = useDispatch();

	const name = useSelector((state) => state.preferences.name);
	const [{ nameInput }, setNameInput] = useState({ nameInput: name });

	const motherTongue = useSelector((state) => state.preferences.motherTongue);
	const lookingFor = useSelector((state) => state.preferences.lookingFor);

	const nameChangeHandler = (event) => {
		setNameInput({ nameInput: event.target.value });
	};

	const saveName = () => {
		dispatch(setName(nameInput));
	};

	const motherTongueHandler = (event) => {
		dispatch(setMotherTongue(event.target.value));
	};

	const lookingForHandler = (event) => {
		dispatch(setLookingFor(event.target.value));
	};

	return (
		<>
			<h2>Preferences</h2>
			<Form layout="horizontal" colon={false}>
				<Form.Item label="Name">
					<Input
						size="large"
						placeholder="My Name"
						value={nameInput}
						onChange={nameChangeHandler}
						onBlur={saveName}
					/>
				</Form.Item>
				<Form.Item label="Mother tongue">
					<Radio.Group
						defaultValue={motherTongue}
						onChange={motherTongueHandler}
					>
						<Radio.Button value="de">Deutsch</Radio.Button>
						<Radio.Button value="he">עברית</Radio.Button>
					</Radio.Group>
				</Form.Item>
				<Form.Item label="I'm looking for">
					<Radio.Group
						defaultValue={lookingFor}
						onChange={lookingForHandler}
					>
						<Radio.Button value="de">Deutsch</Radio.Button>
						<Radio.Button value="he">עברית</Radio.Button>
					</Radio.Group>
				</Form.Item>
			</Form>
		</>
	);
};

export default Preferences;
