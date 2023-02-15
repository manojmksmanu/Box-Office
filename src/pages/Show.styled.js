import styled from 'styled-components';

export const ShowPageWrapper = styled.div`
  padding: 20px 20px;

  @media only screen and (min-width: 516px) {
    padding: 0 40px;
  }

  @media only screen and (min-width: 768px) {
    padding: 0 60px;
  }

  @media only screen and (min-width: 992px) {
    padding: 0 80px;
  }
`;

export const InfoBlock = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
padding:10px 20px;
border-radius:20px;
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
