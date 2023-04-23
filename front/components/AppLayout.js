import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children, title }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSearch = (value) => console.log(value);

  return (
    <div>
      <Head>
        <title>Nodebrid | {title}</title>
      </Head>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>nodebrid</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput onSearch={onSearch} enterButton></SearchInput>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/* gutter:要素間の間隔 */}
      <Row gutter={8}>
        {/* xs:mobile(>=576px), sm:tablet(>=576px), md:desktop(>=768px) */}
        <Col xs={24} sm={6} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </Col>
        <Col xs={24} sm={12} md={12}>
          {children}
        </Col>
        <Col xs={24} sm={6} md={6}>
          {/* referrerとopener情報が渡されたらセキュリティ的に危ないので、防ぐ */}
          <a
            href="https://blog.naver.com/dlgydlf12345"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by Hyoil
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
