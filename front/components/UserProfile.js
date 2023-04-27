import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();

  const onClickLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <>
      <Card
        actions={[
          <div key="twit">
            twit
            <br />0
          </div>,
          <div key="followings">
            followings
            <br />0
          </div>,
          <div key="followers">
            followers
            <br />0
          </div>,
        ]}
      >
        <Card.Meta title="Hyoil" avatar={<Avatar>H</Avatar>} />
        <Button onClick={onClickLogOut}>LogOut</Button>
      </Card>
    </>
  );
};

export default UserProfile;
