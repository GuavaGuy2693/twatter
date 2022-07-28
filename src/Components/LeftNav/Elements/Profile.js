import React from "react";
import styled from "styled-components";

// Current User Data to be passed here

const sample = {
  name: "Guava",
  handle: "dev",
  info: "Developer of twatter. It’s twitter but spelled with an ‘a’."
};

const Fragment = (props) => {
  return (
    <Info>
      <UserName>{props.name}</UserName>
      <UserHandle>&#64;{props.handle}</UserHandle>
      <UserInfo>{props.info}</UserInfo>
      <Edit
        alt=""
        src="https://static.overlay-tech.com/assets/64d1bf78-9081-4b4f-82eb-9d5f7aa77fa0.svg"
      />
    </Info>
  );
};

const Profile = () => {
  return (
    <ProfileDiv>
      <Frame
        alt=""
        src="https://static.overlay-tech.com/assets/123ad14c-4989-41a2-8976-6efc981eee67.svg"
      />
      <Fragment name={sample.name} handle={sample.handle} info={sample.info} />
    </ProfileDiv>
  );
};

export default Profile;

const ProfileDiv = styled.div`
  background: rgba(43, 43, 43, 0.45);
  margin-bottom: 15px;
  border: 0;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;

const Frame = styled.img`
  width: 207px;
  height: 207px;
  margin-bottom: 15px;
`;

const Info = styled.div`
  padding: 0 0 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const UserName = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 5px;
  margin-left: 0.13px;
`;
const UserHandle = styled.p`
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: rgba(204, 204, 204, 1);
  margin-bottom: 6px;
`;
const Edit = styled.img`
  align-self: flex-end;
  width: 22px;
  height: 22px;
`;
const UserInfo = styled.p`
  height: 52px;
  width: 283px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  color: rgba(255, 255, 255, 1);
  display: flex;
  position: relative;
`;
