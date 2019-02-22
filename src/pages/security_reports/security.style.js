import styled from 'styled-components';

export const SecurityStyle = styled.div`
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
            padding:40px;
            width:100%;

            .col{
                padding:10px;
            }
        }
`;
