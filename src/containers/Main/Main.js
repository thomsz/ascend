import React from 'react';
import { Row, Col, Layout } from 'antd';
import Navigator from '../../components/Navigator/Navigator';
import TandemBoard from '../../components/TandemBoard/TandemBoard';
import Sider from '../../components/Sider/Sider';
import classes from './Main.module.css';

const Main = () => {
	return (
		<Layout className={classes.Main}>
			<Navigator />
			<Row>
				<Col span={12}>
					<Layout.Content>
						<TandemBoard />
					</Layout.Content>
				</Col>
				<Col span={12}>
					<Sider />
				</Col>
			</Row>

			<Layout.Footer>2020 Today We Tandem | Ascend Project</Layout.Footer>
		</Layout>
	);
};

export default Main;
