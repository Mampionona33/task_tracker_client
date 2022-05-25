import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    return <useNavigate to={appState?.returnTo || window.location.pathname} />;
  };
  // const onRedirectCallback = (appState) => {
  //   navigate.push(appState?.returnTo || window.location.pathname);
  // };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      // useRefreshTokens={true}
      // cacheLocation='localstorage'
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
