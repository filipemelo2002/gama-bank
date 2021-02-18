import styled from "styled-components";

export const LoginPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 100vh;
    img{
        position: absolute;
        top: 40px;
        left: 40px;
    }
    .login-div{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 0 auto;
        padding: 40px;

        max-width: 455px;

        background: white;
        border-radius: 15px;

        h4{
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 40px;
        }
        form{
            input{
                display:block;
                border: none;
                font-size: 14px;
                color: #878686;
                padding: 8px; 
                font-weight: 500;
                text-align:left;
                width: 100%;
                border-bottom: 2px solid #878686;
                

                &::placeholder {
                    color: #878686;
                }

                & + input {
                    margin-top: 50px;
                }
            }
        }

        button{
            display: flex;
            align-items: center;
            justify-content: space-between;

            border: none;
            border-radius: 50px;
            padding: 12px 30px;
            width: 325px;
            text-align: left;
            transition: 0.5s;
            color: #FFF;
            font-size: 16px;
            font-weight: 500;
            margin: 24px 0;
            background: #68DE5A;
            transform: 0.2s;

            &:hover{
                opacity: 0.6;
            }
        }

        a {
            display: flex;
            align-items: center;
            font-size: 13px;
            font-weight: 500;
            color: #8C52E5;

            & + a {
                margin-top: 8px;
            }
        }
    }
`