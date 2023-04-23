import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
  const followerList = [{ nickname: "hyoil" }, { nickname: "yuki" }];
  const followingList = [{ nickname: "hyoil" }, { nickname: "yuki" }];

  return (
    <AppLayout title="Profile">
      <NicknameEditForm></NicknameEditForm>
      <FollowList header="following list" data={followingList}></FollowList>
      <FollowList header="follower list" data={followerList}></FollowList>
    </AppLayout>
  );
};

export default Profile;
