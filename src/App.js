import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CallInfo } from "./functions/callInfo";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import EditOffIcon from "@mui/icons-material/EditOff";

const tierInfo = [
  "Unranked",
  "Bronze V",
  "Bronze IV",
  "Bronze III",
  "Bronze II",
  "Bronze I",
  "Silver V",
  "Silver IV",
  "Silver III",
  "Silver II",
  "Silver I",
  "Gold V",
  "Gold IV",
  "Gold III",
  "Gold II",
  "Gold I",
  "Platinum V",
  "Platinum IV",
  "Platinum III",
  "Platinum II",
  "Platinum I",
  "Diamond V",
  "Diamond IV",
  "Diamond III",
  "Diamond II",
  "Diamond I",
  "Ruby V",
  "Ruby IV",
  "Ruby III",
  "Ruby II",
  "Ruby I",
  "Master",
];

const ratingInfo = [
  0, 30, 60, 90, 120, 150, 200, 300, 400, 500, 600, 800, 950, 1100, 1250, 1400,
  1600, 1750, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2850,
  2900, 2950, 3000,
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.tier < 6
      ? `${props.theme.bronzeBg}`
      : props.tier < 11
      ? `${props.theme.silverBg}`
      : props.tier < 16
      ? `${props.theme.goldBg}`
      : props.tier < 21
      ? `${props.theme.platinumBg}`
      : props.tier < 26
      ? `${props.theme.diamondBg}`
      : props.tier < 31
      ? `${props.theme.rubyBg}`
      : props.tier === 31
      ? `${props.theme.masterBg}`
      : "linear-gradient(to right, #868f96 0%, #596164 100%);"};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  /* background-color: rgb(0, 0, 255); */
  width: 100vw;
  height: 50vh;
  background-color: #ffffff;
  border: 1.5px solid #dddfe0;
`;

const UserInfoContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 15px;
  /* background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */

  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  /* border-radius: 15px; */
  /* margin-top: 25px; */
`;

const Header = styled.div`
  /* background-color: rgb(0, 255, 0); */
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  margin-top: 25px;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  background-color: #ffffff;
  /* background: ${(props) =>
    props.isEditing
      ? "rgba(0, 0, 0, 0.5)"
      : "linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);"}; */
  * {
    font-family: "SBAggroM";
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25px;
`;

const Input = styled.input`
  all: unset;
  padding: 10px 10px;
  width: 400px;
  font-size: 50px;
  color: black;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  :disabled {
    user-select: none;
  }
`;

const Name = styled.h1`
  font-size: 50px;
  padding-top: 10px;
`;

const EditButton = styled.button`
  all: unset;
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ProfileContainer = styled.div`
  height: 150px;
  /* background: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%); */
  background-color: #ffffff;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  border-radius: 25px;
  padding: 5px 20px;
  position: absolute;
`;

const ProfilePhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-right: 25px;
  margin-left: 10px;
  position: absolute;
  top: -40px;

  ${(props) =>
    props.tier < 11
      ? null
      : props.tier < 16
      ? `${props.theme.goldShadow}`
      : props.tier < 21
      ? `${props.theme.platinumShadow}`
      : props.tier < 26
      ? `${props.theme.diamondShadow}`
      : props.tier < 31
      ? `${props.theme.rubyShadow}`
      : `${props.theme.masterShadow}`};
`;

const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 120px;
`;

const ProfileName = styled.span`
  font-weight: 500;
  font-size: 18px;
`;

const Rank = styled.span`
  font-weight: 700;
`;

const TierBadge = styled.img`
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  right: 50px;
`;

const Tier = styled.h2`
  font-size: 36px;
  margin-bottom: 5px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  position: absolute;
  top: 150px;
  border-radius: 15px;
`;

const ExpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

const Exp = styled.span`
  font-size: 18px;
  font-weight: 600;
  span {
    margin: 3px;
  }
`;
const ExpLeft = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.4);
`;

const RatingProgressBar = styled.meter`
  width: 100%;
  height: 45px;

  ::-webkit-meter-bar {
    background: #000;
    border: 1px solid #ccc;
    border-radius: 3.5px;
    border: none;
  }
  ::-webkit-meter-optimum-value {
    background: ${(props) =>
      props.tier < 16
        ? `${props.theme.progressDark}`
        : props.tier < 21
        ? `${props.theme.platinumProgress}`
        : props.tier < 26
        ? `${props.theme.diamondProgress}`
        : props.tier < 31
        ? `${props.theme.rubyProgress}`
        : props.tier === 31
        ? `${props.theme.masterProgress}`
        : "linear-gradient(to right, #868f96 0%, #596164 100%);"};
  }
`;

function App() {
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState(true);

  const retreiveUserData = async () => {
    const name = localStorage.getItem("userId");
    if (name) {
      setUserId(name);
      setText(name);
      setEdit(false);
    }

    if (userId) {
      const response = await CallInfo(userId);
      setUserInfo(response.data);
    }
  };

  const toggleEdit = () => {
    if (!userId) {
      if (text) {
        setEdit(false);
        setUserId(text);
        localStorage.setItem("userId", text);
      }
    } else {
      setEdit(true);
      setUserId("");
      setText("");
      localStorage.clear();
    }
  };

  useEffect(() => {
    retreiveUserData();
  }, [userId]);

  return (
    <Container tier={userInfo?.tier}>
      {userInfo ? (
        <TierBadge src={require(`./img/tier-badges/${userInfo?.tier}.svg`)} />
      ) : null}
      <CenterWrapper>
        {userInfo?.profileImageUrl ? (
          <ProfilePhoto tier={userInfo?.tier} src={userInfo?.profileImageUrl} />
        ) : (
          <ProfilePhoto
            tier={userInfo?.tier}
            src="https://static.solved.ac/misc/360x360/default_profile.png"
          />
        )}
        {/* {userId ? (
          userInfo?.tier >= 6 ? (
            <ProfileContainer>
              

              <ProfileTextContainer>
                <Tier>{tierInfo[userInfo?.tier]}</Tier>
                <ProfileName>
                  <Rank>#{userInfo?.rank} </Rank>
                  {userInfo?.handle}
                </ProfileName>
              </ProfileTextContainer>
            </ProfileContainer>
          ) : null
        ) : null} */}
        <Header>
          <InputContainer>
            <EditButton onClick={toggleEdit} isEditing={edit}>
              {edit ? (
                <EditOffIcon color="disabled" />
              ) : (
                <ModeEditIcon color="disabled" />
              )}
            </EditButton>
            <Input
              type="text"
              required
              placeholder="백준 아이디"
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              disabled={!edit}
            />
          </InputContainer>

          {/* <Name>님의 랭킹정보 입니다.</Name> */}
        </Header>
        <UserInfoContainer>
          {userId ? (
            <>
              <ProgressBarContainer>
                <ExpContainer>
                  <Exp>
                    <span>{tierInfo[userInfo?.tier]}</span>
                    <span>{userInfo?.rating}</span>
                  </Exp>
                  <ExpLeft>
                    {userInfo?.tier === 31 ? (
                      ""
                    ) : (
                      <span>
                        {tierInfo[userInfo?.tier + 1]} 승급까지 -
                        {ratingInfo[userInfo?.tier + 1]}
                      </span>
                    )}
                  </ExpLeft>
                </ExpContainer>
                <RatingProgressBar
                  tier={userInfo?.tier}
                  min={
                    userInfo?.tier === 0 ? 0 : ratingInfo[userInfo?.tier - 1]
                  }
                  max={
                    userInfo?.tier === 31
                      ? ratingInfo[userInfo?.tier]
                      : ratingInfo[userInfo?.tier + 1]
                  }
                  value={ratingInfo[userInfo?.tier]}
                ></RatingProgressBar>
              </ProgressBarContainer>
            </>
          ) : null}
        </UserInfoContainer>
      </CenterWrapper>
    </Container>
  );
}

export default App;
