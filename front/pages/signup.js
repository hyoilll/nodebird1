import { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { Button, Checkbox, Form, Input } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMsg = styled.div`
  color: red;
`;

const Signup = () => {
  // custom hooks
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [pw, onChangePw] = useInput("");

  const [pwError, setPwError] = useState(false);
  const [pwCheck, setPwCheck] = useState("");

  const [termError, setTermError] = useState(false);
  const [term, setTerm] = useState("");

  const onChangePwCheck = useCallback(
    (e) => {
      setPwCheck(e.target.value);
      setPwError(pw !== e.target.value ? true : false);
    },
    [pw]
  );
  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
      setTermError(false);
    },
    [term]
  );

  const onSubmit = useCallback(
    (e) => {
      if (pw !== pwCheck) {
        return setPwError(true);
      }
      if (!term) {
        return setTermError(true);
      }
      console.log(id, nickname, pw);
    },
    [pw, pwCheck, term]
  );

  return (
    <AppLayout title="Signup">
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">ID</label>
          <br></br>
          <Input
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          ></Input>
          <label htmlFor="user-nickname">Nickname</label>
          <br></br>
          <Input
            name="user-nickname"
            value={nickname}
            required
            onChange={onChangeNickname}
          ></Input>
          <label htmlFor="user-pw">PW</label>
          <br></br>
          <Input.Password
            name="user-pw"
            value={pw}
            required
            onChange={onChangePw}
          ></Input.Password>
          <label htmlFor="user-pwCheck">PWCheck</label>
          <br></br>
          <Input.Password
            name="user-pwCheck"
            value={pwCheck}
            required
            onChange={onChangePwCheck}
          ></Input.Password>
          {pwError && <ErrorMsg>Password does not match.</ErrorMsg>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            Is the above information correct?
          </Checkbox>
          {termError && <ErrorMsg>Please put a check in the checkBox</ErrorMsg>}
        </div>
        <div>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
