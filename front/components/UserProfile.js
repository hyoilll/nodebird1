import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onClickLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
