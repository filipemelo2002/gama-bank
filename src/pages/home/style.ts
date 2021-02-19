import styled from 'styled-components';
import bgImage from '../../img/happy.png';

export const HomePage = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
background-color: #8C52E5;
background-image: url(${bgImage});
background-repeat: no-repeat;
background-position: bottom;

height: 100vh;
    img{
        position: absolute;
        top: 40px;
        left: 40px;
    }
    .middle-div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 80px;
        .access-div{
            flex: 0;
            color: white;
            font-size: 20px;
            h2{
                font-size: 29px;
                font-weight: normal;
                margin-bottom: 25px;
            }
            button{
                display: flex;
                align-items: center;
                justify-content: space-between;

                border: 0;
                border-radius: 100px;
                padding: 15px 30px;
                width: 250px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 18px;
                font-weight: 500;
                background: #FFF;
                &:hover{
                    background: #68DE5A;
                }
            }
        }
        .signup-div{
            background: white;
            border-radius: 15px;
            padding: 40px;
            flex: 0;

            h4{
                font-size: 25px;
                font-weight: 500;
            }

            form{
                input{
                    border: 0;
                    font-size: 16px;
                    padding: 8px;
                    font-weight: 500;
                    text-align:left;
                    width: 100%;
                    color: #878686;
                    margin: 32px 0 0;
                    border-bottom: 2px solid #878686;
                }
            }

            button{
                display: flex;
                align-items: center;
                justify-content: space-between;

                border: 0;
                border-radius: 100px;
                padding: 15px 30px;
                width: 325px;
                text-align: left;
                transition: 0.5s;
                color: #9B9B9B;
                font-size: 18px;
                font-weight: 500;
                background: #D8D8D8;
                margin: 32px 0 0;
                &:hover{
                    background: #68DE5A;
                    color: #FFF;

                }
            }
        }
      }
    }
  }
`;
