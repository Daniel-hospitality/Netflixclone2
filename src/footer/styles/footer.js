import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin-left: auto;
  max-width: 1080px;
  flex-direction: column;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  padding-top: 15px;
  margin-left: 19%;
  @media (max-width: 360px) {
    width: 70%;
    margin-left: 15%;
  }
  @media (max-width: 980px) {
    width: 70%;
    margin-left: 15%;
  }
  @media (max-width: 1440px) {
    margin-left: 15%;
  }
  @media (max-width: 1366px) {
    margin-left:5.1%;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-left: 65px;
  max-width: 1000px;
  flex-direction: column;
  @media (max-width: 1080px) {
    padding: 21px;
  }
`;

export const Link = styled.a`
  display: flex;
  color: #757575;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
`;

export const Icon = styled.i`
  display: flex;
  justify-content: space-between;
  font-size: 27px;
  margin-left: 22.4%;
  width: 9%;
  color: silver;
  @media  (max-width: 360px) {
  
    margin-left:15%;
    
  }
 
  @media (max-width:980px) {
    margin-left: 22%;
    width: 15%;
  }
  @media (max-width: 1366px)   {
   margin-left:10%;
    width: 15%;
    
  }
`;

export const Link1 = styled.a`
  margin-left: 5px;
  color: #757575;
  font-size: 24px;
  text-decoration: none;
`;

export const Link2 = styled.a`
  opacity: 0;
  color: #757575;
  margin-bottom: 20px;
  font-size: 24px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #757575;
  margin-bottom: 40px;
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
export const BreakIcon = styled.div``;
