import styled from 'styled-components';

export const FacilityStyle = styled.div`
        background:white;
        .header{
            display:flex;
            padding:0;
            position:relative;
            background:#f1f2f7;
            line-height:3;
            .title{
                font-size:18px;
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
            border:solid 1px lightgray

            .col{
                padding:10px;
            }

            @media only screen and (max-width: 767px){
                    padding:0px;
                }
        }
`;
