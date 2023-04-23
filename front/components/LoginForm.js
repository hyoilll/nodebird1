import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");

  // //useMemo：値cache
  // //useCallback：コンポネントにPropsとして渡す関数はuseCallbackを使うことで最適化される、関数cache
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // const onChangePw = useCallback((e) => {
  //   setPw(e.target.value);
  // }, []);

  //custom hooks➞重複削除
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, pw);
    setIsLoggedIn(true);
  }, [id, pw]);

  return (
    <>
      {/* onFinishにはe.preventdefaultが既に適用されている */}
      <FormWrapper onFinish={onSubmitForm}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pw">Password</label>
          <br />
          <Input
            name="user-pw"
            value={pw}
            onChange={onChangePw}
            required
          ></Input>
        </div>
        {/* コンポネントの中にオブジェクトを入れると毎回rerenderingされるため、入れてはダメ -> styled componentを使用*/}
        {/* rerendering去れる範囲はコンポネント全領域だが、実際に描き直すところはvirtualDOMの前回と比べて変わったところのみ、だから */}
        {/* useMemoとかstyled componentを利用して描き直されることを防止する */}
        {/* <div style={{ marginTop: "10px" }}> */}
        <ButtonWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            Login
          </Button>
          <Link href="/signup">
            <a>
              <Button>SignUp</Button>
            </a>
          </Link>
        </ButtonWrapper>
      </FormWrapper>
    </>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
