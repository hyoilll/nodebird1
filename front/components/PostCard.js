import { Avatar, Button, Card, List, Popover, Comment } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import Proptypes from "prop-types";
import PostImages from "./PostImages";
import { useCallback, useState } from "react";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const id = me && me.id;
  // = const id = me?.id; => optional chaining operation

  const [liked, setLiked] = useState(false);
  const [conmmentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleLike = useCallback((e) => {
    // if (liked === true) {
    //   setLiked(false);
    // } else {
    //   setLiked(true);
    // }
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback((e) => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        actions={[
          //actionはArrayだからKeyが必要になる
          <RetweetOutlined key="retweet"></RetweetOutlined>,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            ></HeartTwoTone>
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike}></HeartOutlined>
          ),
          <MessageOutlined
            key="comment"
            onClick={onToggleComment}
          ></MessageOutlined>,
          <Popover
            key="more"
            content={[
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>Update</Button>
                    <Button type="danger">Delete</Button>
                  </>
                ) : (
                  <Button>Report</Button>
                )}
              </Button.Group>,
            ]}
          >
            <EllipsisOutlined></EllipsisOutlined>
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        ></Card.Meta>
      </Card>
      {conmmentFormOpened && (
        <div>
          <CommentForm post={post}></CommentForm>
          <List
            header={`${post.Comments.length}個のコメント`}
            itemLayout="horizontal"
            style={{ position: "relative", top: "-23px" }}
            dataSource={post.Comments}
            renderItem={(item) => {
              return (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                    title={item.content}
                  ></List.Item.Meta>
                </List.Item>
              );
            }}
          ></List>
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: Proptypes.shape({
    id: Proptypes.number,
    User: Proptypes.object,
    content: Proptypes.string,
    Images: Proptypes.arrayOf(Proptypes.object),
    Comments: Proptypes.arrayOf(Proptypes.object),
  }).isRequired,
};

export default PostCard;
