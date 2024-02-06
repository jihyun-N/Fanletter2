import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Avatar from "components/common/Avatar";
import { getFormatTimeDate } from "util/date";
import Button from "components/common/Button";

export default function Detail({ letters }) {
  const { id } = useParams();
  const { avatar, nickname, createdAt, name, content } = letters.find(
    (letters) => letters.id === id
  );
  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button text="Home" />
        </HomeBtn>
      </Link>
      <DetailWrapper>
        <UserInfo>
          <AvatarAndNickname>
            <Avatar src={avatar} size="large" />
            <Nickname>
              {name}
              {nickname}
            </Nickname>
          </AvatarAndNickname>
          <time>{getFormatTimeDate(createdAt)}</time>
        </UserInfo>
        <ToMember>To : {name}</ToMember>
        <Content>{content}</Content>
        <BtnsWrapper>
          <Button text="수정" />
          <Button text="삭제" />
        </BtnsWrapper>
      </DetailWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const DetailWrapper = styled.section`
  background-color: grey;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 700px;
  min-height: 400px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AvatarAndNickname = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Nickname = styled.span`
  font-size: 32px;
`;

const ToMember = styled.span`
  font-size: 24px;
`;

const Content = styled.p`
  font-size: 24px;
  line-height: 30px;
  padding: 12px;
  background-color: black;
  border-radius: 12px;
  height: 200px;
`;

const BtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;
