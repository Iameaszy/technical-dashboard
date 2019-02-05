import styled from 'styled-components';

export const SecurityStyle = styled.div`
        padding:0 40px;
        background:white-space;
        .header{
            display:flex;
            padding:0;
            position:relative;

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
