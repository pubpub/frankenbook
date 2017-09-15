import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from '@blueprintjs/core';
import InputField from 'components/InputField/InputField';
import { postLogin } from 'actions/login';

require('./login.scss');

const propTypes = {
	loginData: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.onLoginSubmit = this.onLoginSubmit.bind(this);
		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.props.loginData.data && nextProps.loginData.data) {
			this.props.history.push('/');
		}
	}

	onLoginSubmit(evt) {
		evt.preventDefault();
		this.props.dispatch(postLogin(this.state.email, this.state.password));
	}

	onEmailChange(evt) {
		this.setState({ email: evt.target.value });
	}

	onPasswordChange(evt) {
		this.setState({ password: evt.target.value });
	}

	render() {
		return (
			<div className={'login'}>
				<Helmet>
					<title>Login</title>
				</Helmet>

				<div className={'container small'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<h1>Login</h1>

							<form onSubmit={this.onLoginSubmit}>
								<InputField
									label={'Email'}
									placeholder={'example@email.com'}
									value={this.state.email}
									onChange={this.onEmailChange}
								/>
								<InputField
									label={'Password'}
									type={'password'}
									value={this.state.password}
									onChange={this.onPasswordChange}
									error={this.props.loginData.error}
								/>
								<Button
									name={'login'}
									type={'submit'}
									className={'pt-button pt-intent-primary'}
									onClick={this.onLoginSubmit}
									text={'Login'}
									loading={this.props.loginData.loading}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Login.propTypes = propTypes;
export default withRouter(connect(state => ({
	loginData: state.login,
}))(Login));

// fetch('http://localhost:9876/login', {
// 	method: 'POST',
// 	credentials: 'include',
// 	headers: {
// 		Accept: 'application/json',
// 		'Content-Type': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		password: 'password',
// 		email: '1858ashton51@yahoo.com'
// 	})
// });
