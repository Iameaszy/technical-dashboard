import styled from 'styled-components';


export const CardStyle = styled.div`
        width: 100%;
        height: 300px;
        text-align: left;
        line-height: 1;
        color: #424141;
        border:1px solid lightgrey;
        position:relative;
        border-radius:10px;
        
        .text-img-wrapper{
                position:absolute;
                width:100%;

                @media only screen and (max-width: 576px){
                        width: 100%;
                        padding: 10px;
                }
                
                .img-wrapper{
                        position:relative;

                        .report-type{
                                position: absolute;
                                line-height: 1.2;
                                /* font-weight: bold; */
                                top: 0;
                                padding: 5px;
                                color: white;
                                background: #CD67AE;
                                border-radius:10px 0  0 0;
                        }
                }
                .card-img{
                        height: 200px;
                        object-fit: cover;
                        object-position: center;
                        border-radius:10px 10px 0 0;
                }
        }
        .card-status{
                position: absolute;
                right: 5px;
                top: 0px;
                margin-bottom:0;

                
                @media (max-width: 576px){
                        top:12px;
                }
        }
        .card-text{
                position: relative;
                top: 217px;
                left: 10px;
                display: flex;
                justify-content: space-between;

                .dots{
                        position: absolute;
                        right: 30px;
                        cursor:pointer;

                        .control{
                                position: absolute;
                                left: -64px;
                                top: -41px;
                                background: #ffd9d9;
                                padding: 10px;
                                border-radius: 5px;
                                color:#d84d4d;
                                &:hover{
                                        background: #b13434;
                                        color: white;
                                }

                                .delete{
                                        cursor: pointer;
                                }
                        }
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
