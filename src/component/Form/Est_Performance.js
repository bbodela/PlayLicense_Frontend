import styled from "styled-components";
import color from "../../../styles/colors";
// import RadioButton from "../Button/RadioBtn";
import RadioButton from "../Input/CircleCheckBox";
import { useState } from "react";
import GrayShortBtn from "../Button/GrayShortBtn";
import OrangeShortBtn from "../Button/OrangeShortBtn";

const Est_Performance = () => {
  const [selected, setSelected] = useState({});

  const handleChange = (e) => {
    console.log(e, "e.target.value라디오");
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: value });
    console.log(selected, "??");
  };
  const handleChangePrice = (e) => {
    console.log(e, "e.target.value라디오");
    const { name, value } = e.target;
    setSelected({ ...selected, [name]: [value] });
    console.log(selected, "??");
  };

  const resetHandler = () => {};

  const nextBtnHandler = () => {};

  return (
    <Container>
      <Title>
        *공연 또는 교육 목적이 아닌 경우, 가견적 계산이 불가하므로 ‘구매하기’로
        구매 문의를 작성해주세요.
      </Title>
      <BodySection>
        <List>
          <Item>
            <SubTitle>공연분야</SubTitle>
            <Content>
              <Box>
                <RadioButton
                  name={"genre"}
                  text={"뮤지컬"}
                  onClickRadio={handleChange}
                />
              </Box>
              <Box>
                <RadioButton
                  name={"genre"}
                  text={"연극"}
                  onClickRadio={handleChange}
                />
              </Box>
              <Box>
                <RadioButton
                  name={"genre"}
                  text={"아동극"}
                  onClickRadio={handleChange}
                />
              </Box>
            </Content>
          </Item>
          <Item>
            <SubTitle>공연규모</SubTitle>
            <Content>
              <Box>
                <RadioButton
                  name={"sizeOfPerformance"}
                  text={"소극장 (300석 미만)"}
                  onClickRadio={handleChange}
                />
              </Box>
              <Box>
                <RadioButton
                  name={"sizeOfPerformance"}
                  text={"중극장 (500석 미만)"}
                  onClickRadio={handleChange}
                />
              </Box>
              <Box>
                <RadioButton
                  name={"sizeOfPerformance"}
                  text={"대극장 (500석 이상)"}
                  onClickRadio={handleChange}
                />
              </Box>
            </Content>
          </Item>
          <Item>
            <SubTitle>공연회차</SubTitle>
            <Content>
              <Box>
                <InputBox>
                  <InputText name={"round"} onChange={handleChange} />
                  <Text2>회차</Text2>
                </InputBox>
              </Box>
            </Content>
          </Item>
          <Item>
            <SubTitle>티켓가격</SubTitle>
            <Content>
              <Box>
                <RadioButton
                  name={"price"}
                  text={"무료"}
                  onClickRadio={handleChange}
                />
              </Box>
              <Box_price>
                <RadioButton
                  name={"price"}
                  text={"유료"}
                  onClickRadio={handleChange}
                />
                <InputBox>
                  <InputText name={"price_num"} onChange={handleChange} />
                  <Text2>원/매</Text2>
                </InputBox>
              </Box_price>
            </Content>
          </Item>
          <Item>
            <SubTitle>필요자료</SubTitle>
            <Content_2>
              <RadioButton
                name={"selectMaterials"}
                text={"대본"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"보컬악보"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"원본포스터(PSD)"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"연습MR"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"공연MR"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"총보(라이브 연주가 가능한 악보)"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"공연실황영상"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"무대디자인"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"소품디자인 및 리스트"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"의상디자인"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"음향 리스트 및 파일"}
                onClickRadio={handleChange}
              />
              <RadioButton
                name={"selectMaterials"}
                text={"안무 가이드"}
                onClickRadio={handleChange}
              />
            </Content_2>
          </Item>
        </List>
      </BodySection>
      <Est>
        <Text>
          고객님의 가상견적은 총 <span>200,000</span>원(VAT 별도)입니다.
        </Text>
      </Est>
      <BottomSection>
        <Buttons>
          <Btn1>
            <GrayShortBtn text={"초기화하기"} onClickHandler={resetHandler} />
          </Btn1>
          <Btn2>
            <OrangeShortBtn text={"구매하기"} onClickHandler={nextBtnHandler} />
          </Btn2>
        </Buttons>
      </BottomSection>
    </Container>
  );
};
const Container = styled.div`
  /* max-width: 924px;
  padding: 0 1rem;
  margin: 0 auto; */
`;
const Title = styled.p`
  font-family: "NotoSansCJKkr-Regular";
  color: ${color.black3};
  margin: 0;
  margin-top: 20px;
  margin-bottom: 46px;
`;

const BodySection = styled.div``;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Item = styled.li`
  display: flex;
  width: 100%;
  min-height: 66px;
`;
const SubTitle = styled.div`
  font-family: "NotoSansCJKkr-Bold";
  display: flex;
  width: 10%;
`;
const Content = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 1;
  width: 90%;
  align-items: baseline;
`;
const Box = styled.div`
  align-items: baseline;
  width: 30%;
`;
const Box_2 = styled.div`
  width: 22.5% auto;
`;
const Box_price = styled.div`
  align-items: baseline;
  display: flex;
`;
const Est = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
  background-color: ${color.gray1};
  margin-bottom: 25px;
  margin-top: 42px;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-family: "NotoSansCJKkr-Medium";
  font-size: 16px;
  padding: 22px 0;
  & > span {
    font-family: "NotoSansCJKkr-Bold";
    color: ${color.orange};
    font-size: 24px;
  }
`;

const Content_2 = styled.div`
  display: flex;
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  line-height: 1;
  width: 90%;
  flex-wrap: wrap;
  align-items: baseline;
`;
const InputBox = styled.div`
  font-family: "NotoSansCJKkr-Regular";
  font-size: 16px;
  display: flex;
  border-radius: 8px;
  max-width: 212px;
  height: 48px;
  border: 1px solid ${color.black5};
`;
const InputText = styled.input.attrs({
  type: "number",
})`
  line-height: 1;
  border-radius: 8px;
  width: 60%;
  border: none;
  outline: none;
  padding: 0 0 0 20px;
`;
const Text2 = styled.span`
  line-height: 1;
  padding: 0 20px 0 0;
  display: flex;
  align-items: center;
`;
const BottomSection = styled.div`
  width: 100%;
  height: 100%;
`;

const Buttons = styled.div`
  display: flex;
  height: 56px;
`;
const Btn1 = styled.div`
  width: 100%;
  margin-right: 16px;
`;
const Btn2 = styled.div`
  width: 100%;
  margin-left: 16px;
`;
export default Est_Performance;
