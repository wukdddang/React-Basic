import React from "react";

interface LoginProps {
  loginRequired?: boolean;
}

function withLoginComponent<T>(Component: React.ComponentType<T>) {
  return function (props: T & LoginProps) {
    const { loginRequired, ...restProps } = props;

    if (loginRequired) {
      return <>로그인이 필요합니다.</>;
    }

    return <Component {...(restProps as T)} />;
  };
}

const Component = withLoginComponent((props: { value: string }) => {
  return <h3>{props.value}</h3>;
});

export default function App() {
  const isLogin = true;
  return <Component value="Hello" loginRequired={isLogin} />;
}
