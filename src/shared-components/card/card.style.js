import styled from 'styled-components';


export const CardStyle = styled.div`
        width: 100%;
        height: 350px;
        text-align: left;
        line-height: 1;
        color: #424141;
        position: relative;
        box-shadow:0 0 5px 1px lightgrey;

        .card-img{
                height: 200px;
                object-fit: cover;
                object-position: center;
        }
        .card-body{
                padding:10px;
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
        }

        .card-btn{
                border: none;
                padding: 12px;
                color: white;
                background: cornflowerblue;
                font-size: 15px;
                border-radius: 5px;
                position: absolute;
                bottom: 10px;
                left:11px;

                &:hover{
                        background:#416fc1;
                }
                @media only screen and (min-width: 768px){
                        width:90%;
                }
                @media only screen and (max-width: 767px){
                    width:50%;
                }
           }
        
`;
