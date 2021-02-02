import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  ${'' /* padding-bottom: 20px; */}
  margin-left: auto;
  max-width: 100%;
  flex-direction: column;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  ${"" /* grid-template-column: max-content; */}
  ${'' /* grid-gap: 15px; */}
  padding-top: 15px;
  padding-bottom: 50px;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;

  @media screen and (min-width: 567px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    ${'' /* grid-gap: 10px; */}
    
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
   
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, minmax(50px, 1fr));
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
    justify-content: space-between;
    margin-left: 15%;
    margin-right: 15%;
  }
`;

export const Column = styled.div`
  display: grid;
  justify-content: space-between;
  text-align: left;
  ${"" /* margin-left: 65px; */}
  max-width: 1000px;
  flex-direction: column;

  @media only screen and (max-width: 767px), screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(320%, 1fr));
  }

  @media only screen and (max-width: 991px), screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350%, 1fr));
  }

  @media only screen and (max-width: 1199px), screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  display: flex;
  color: #757575;
  ${"" /* margin-bottom: 3px; */}
  font-size: 15px;
  text-decoration: none;
  ${
    "" /* @media only screen and (max-width: 767px), screen and (min-width: 576px) {
   margin-bottom:0px;
  } */
  }
`;

export const Icon = styled.i`
  display: flex;
  justify-content: space-between;
  font-size: 27px;
  margin-left: 10%;
  margin-right: 10px;
  width: 30%;
  color: silver;
  padding-left: 0;

  
  @media screen and (min-width: 576px) {
       width: 20%;
    
  }

  @media screen and (min-width: 768px ;) {
    width: 20%;
  }

  @media screen and (min-width: 992px ;) {
  
    width: 15%;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 15%;
    width: 10%;
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
