import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { loginValidation } from '../utils/inputValidations';
import { apiLogin } from '../services/apiCalls';
import {
  InputsDiv,
  LoginDiv,
  Inputs,
  LogoDoApp,
  DivButtonsLogin,
  ButtonsSend,
  ButtonsRegister,
} from '../styles/login/LoginStyles';

export default function Login() {
  const [hiddenOn, setHiddenOn] = useState(true);
  const [connectionOn, setConnectionOn] = useState();
  const [transition, setTransition] = useState('0px');
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setTransition('500px');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== undefined) {
      setConnectionOn(user);
    }
  }, []);

  const validatePassword = ({ target: { name, value } }) => {
    setLogin({ ...login,
      [name]: value,
    });
  };

  function handleLoginValidation() {
    const validationError = loginValidation(login).error;
    if (validationError) return true;
    return false;
  }

  const setRedirectPath = (role) => {
    const user = {
      customer: '/customer/products',
      seller: '/seller/orders',
      admin: '/admin/manage',
    }

    return user[role];
  };

  const sendLogin = async () => {
    const response = await apiLogin(login);
    if (response.error) {
      setHiddenOn(false);
    } else {
      const { token, user: { id, name, email, role } } = response;
      const userData = { id, name, email, role, token };
      localStorage.setItem('user', JSON.stringify(userData));
      setConnectionOn(userData);
    }
  };

  return (
      <LoginDiv>
        <InputsDiv transition={transition}>
          <LogoDoApp/>
          { connectionOn && <Redirect to={ setRedirectPath(connectionOn.role) } /> }
          <div>
            <Inputs
              name="email"
              type="text"
              onChange={ validatePassword }
              placeholder="Insira seu e-mail"
              data-testid="common_login__input-email"
            />
            <Inputs
              name="password"
              type="password"
              onChange={ validatePassword }
              placeholder="Insira sua senha"
              data-testid="common_login__input-password"
            />
            <p
            hidden={ hiddenOn }
            data-testid="common_login__element-invalid-email"
            >
              Email ou senha inválido.
            </p>
          </div>
          <DivButtonsLogin>
            <ButtonsSend
              type="submit"
              disabled={ handleLoginValidation() }
              onClick={ () => sendLogin() }
              data-testid="common_login__button-login"
            >
              login
            </ButtonsSend>
            <Link to="/register">
              <ButtonsRegister
                type="button"
                data-testid="common_login__button-register"
              >
                Ainda não tenho conta
              </ButtonsRegister>
            </Link>
          </DivButtonsLogin>
        </InputsDiv>
      </LoginDiv>
  );
}
