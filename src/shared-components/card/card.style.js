import styled from 'styled-components';


export const CardStyle = styled.div`
        width: 100%;
        border: solid 1px lightgrey;
        height: 350px;
        text-align: left;
        line-height: 1;
        color: #424141;
        padding:15px;

        .card-img{
                height: 200px;
                object-fit: cover;
                object-position: center;
        }
        .card-body{
            .card-title{
                font-size: 18px;
                font-weight: 100;
                letter-spacing: 1px;
                padding:10px 0;
                color:black;
                }

        .card-text{
                line-height:1.5;
                font-size: 15px;
                color:#313030;
           }
           @media only screen and (max-width: 768px){
                    text-align:center;
                }
        }

        .card-btn{
                border: none;
                width:100%;
                padding: 12px;
                color: white;
                background: cornflowerblue;
                font-size: 15px;
                border-radius: 5px;

                &:hover{
                        background:#416fc1;
                }

                @media only screen and (max-width: 768px){
                    width:50%;
                }
           }
        
`;
