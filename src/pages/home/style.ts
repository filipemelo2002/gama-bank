import styled, {css} from "styled-components";
import bgImage from "../../img/happy.png";

export const HomePage = styled.div`
background-color: #8C52E5;
background-image: url(${bgImage});
background-repeat: no-repeat;
background-position: bottom;
height: 100vh;
    img{
        margin: 40px;
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
                margin-bottom: 25px;
            }
            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 250px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                &:hover{
                    background: #68DE5A;
                }
            }
        }
        .signup-div{
            background: white;
            border-radius: 15px;
            padding: 20px;
            flex: 0;
            
            div{
                margin: 20px;
            }
            form{
                input{
                    display:block;
                    border: none;
                    font-size: 16px;
                    padding: 8px;
                    font-weight: 300;
                    text-align:left;
                    width: 90%;
                    margin: 25px;
                    border-bottom: 2px solid #666;
                }
            }
            
            h4{
                font-size: 25px;
                margin-bottom:20px;
            }

            button{
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 325px;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                border: 3px solid #8C52E5;
                margin: 20px 0;
                &:hover{
                    background: #68DE5A;
                }
            }
        }
    }
`