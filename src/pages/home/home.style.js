import styled from 'styled-components';

export const HomeStyle = styled.div`
        background:white;
        .header{
            display:flex;
            padding:0;
            position:relative;
            background:#f1f2f7;
            line-height:3;

            .title{
                font-size:18px;
                @media only screen and (max-width: 767px){
                    margin:auto;
                }
            }

            .breadcrumb{
                position: absolute;
                right: 0;
            }
        }

        .home-content{
            background:white;
            padding:20px;
            width:100%;
            border:solid 1px lightgray;

            .col{
                padding:10px;
            }

            @media only screen and (max-width: 767px){
                    padding:0px;
                }
        }
`;

export const DeleteLoader = styled.p`
    background: #b1b152;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    z-index: 1;
    line-height: 1.2;
    margin-bottom: 0;
    left: 0;
    right: 0;
    width: 110px;
    margin: auto;
`;
