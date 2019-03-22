import styled from 'styled-components';


export const CardStyle = styled.div`
        width: 100%;
        height: 300px;
        text-align: left;
        line-height: 1;
        color: #424141;
        position: relative;
        box-shadow:0 0 5px 1px lightgrey;
        position:relative;

        
        .text-img-wrapper{
                position:absolute;

                @media only screen and (max-width: 576px){
                        width: 100%;
                        padding: 10px;
                }
                
                .img-wrapper{
                        position:relative;

                        .report-type{
                                position: absolute;
                                line-height: 1.2;
                                font-weight: bold;
                                top: 0;
                                padding: 5px;
                                color: white;
                                background: #79799a;
                        }
                }
                .card-img{
                        height: 200px;
                        object-fit: cover;
                        object-position: center;
                }
        }
        .card-text{
                        position: relative;
                        top: 217px;
                        left: 10px;
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
                text-decoration:none;
                text-align:center;

                &:hover{
                        background:#416fc1;
                }
                @media only screen and (min-width: 768px){
                        width:90%;
                }
                @media only screen and (max-width: 767px){
                    width:95%;
                }
           }
        
`;
