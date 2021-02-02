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
 grid-template-columns: repeat( 4, auto-fit, minmax(230px, 1fr));

  grid-gap: 15px;
  padding-top: 15px;
  margin-left: 19%;

/**  .parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}*/ 







  @media only screen and (max-width: 767px), screen and (min-width: 576px) {
    margin-left: 19%;
    font-size: 150%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 2fr));
    grid-gap: 10px;
    margin-left: 5%;
    padding-right: 50px;
  }

  @media only screen and (max-width: 991px), screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    margin-left: 5%;
  }

  @media only screen and (max-width: 1199px), screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    margin-left: 5%;
  }

  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    justify-content: space-between;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-left: 65px;
  max-width: 100%;
  flex-direction: column;

  @media (max-width: 1080px) {
    padding: 21px;
  }

  @media only screen and (max-width: 767px), screen and (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320%, 1fr));
    grid-gap: 15px;
    margin-left: 15%;

    @media only screen and (max-width: 991px), screen and (min-width:768px ;) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350%, 1fr));
    grid-gap: 15px;
    margin-left: 15%;
    width:50%;
  }





  @media only screen and (max-width: 1199px), screen and (min-width:992px ;) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
    margin-left:-10%;
  }

  @media only screen and  (min-width: 1200px ) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 2fr));
    margin-left:5%;
  }


`;

export const Link = styled.a`
  display: flex;
  color: #757575;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  @media only screen and (max-width: 767px), screen and (min-width: 576px) {
    margin-bottom: 0px;
  }
`;

export const Icon = styled.i`
  display: flex;
  justify-content: space-between;
  font-size: 27px;
  margin-left: 22.4%;
  width: 9%;
  color: silver;

  @media only screen and (max-width: 767px), screen and (min-width: 576px) {
    margin-left: 14%;
    font-size: 150%;
    width: 25%;
  }

  @media only screen and (max-width: 991px), screen and (min-width: 768px ;) {
    margin-left: 13%;
  }

  @media only screen and (max-width: 1199px), screen and (min-width: 992px ;) {
    margin-left: 5%;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 5%;
    width: 16%;
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
