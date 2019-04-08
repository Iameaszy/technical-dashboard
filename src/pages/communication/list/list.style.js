import styled from 'styled-components';

export const ListStyle = styled.li`
        display: flex;
        flex-direction: row;
        line-height: 2.5;
        background: white;
        align-items: center;
        padding:5px 10px;
        border-bottom:solid 1px #f5f0f0;
        cursor:pointer;
        transition:0.6 all;
        position:relative;

        .mobile-li{
            position: absolute;
            width: 100%;
            top: 0;
            bottom: 0;
            z-index: 1;

            @media (max-width:656px){
                display:none;
            }
        }

        &:hover{
            background:#f9f9f9;
        }

        p{
            margin:0;
        }
        .preview{
            display:flex;
            align-items: center;
            width:70%;
            position:relative;
            @media (max-width:656px){
                display: block;
                text-align: left;
                padding-left: 55px;
            }
        }
       
        .group{
            display: flex;
            flex-wrap: nowrap;
            align-items:center;
            min-width:250px;
        }
        .preview-text{
            opacity:0.7;
            p{
                padding:0 5px;
            }
        }

        .date{
            position: absolute;
            right: 0px;
            opacity:0.7;
            @media (max-width:656px){
                top:-20px;
                right:-45%;
            }
            .day,.month,.year{
                padding:0 5px;
            }
        }
        .controls{
            display: flex;
            align-items: center;
            width:100%;
           @media (max-width:656px){
                display: flex;
                flex-direction: column;
                align-items: baseline;
                line-height:1.5;
           }
            .message-select{
                width: 20px;
                height: 18px;
                margin-top:2px;
            }

            .star{
                height: 18px;
                width: 36px;
                color:#a2a1a1;
            }
        }
`;
