import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';

interface AuthModalProps {
  open: boolean,
  onClose: any
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    getProviders()
      .then((data) => {
        setProviders(data);
      });
  }, []);

  const {
    open,
    onClose,
  } = props;

  console.log(providers);
  return (
    <>
      <Modal title="Basic Modal" visible={open} onOk={onClose} onCancel={onClose} centered>
        {providers !== null
        && Object.values(providers).map((provider: ClientSafeProvider) => (
          <p key={provider.name}>
            <Button
              onClick={() => signIn(provider.name.toLowerCase(), {
                callbackUrl:
                    process.env.NODE_ENV === 'production'
                      ? process.env.prod
                      : process.env.dev,
              })}
            >
              Sign in with
              {' '}
              {provider.name}
            </Button>
          </p>
        ))}
      </Modal>
    </>
  );
};

export default AuthModal;
