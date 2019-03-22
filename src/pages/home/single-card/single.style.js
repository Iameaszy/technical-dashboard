import styled from 'styled-components';

export const SingleCardStyle = styled.div`
        .card{
            .img-wrapper{
                margin:auto;
                max-width:600px;
                position:relative;

                .card-img{
                    width:100%;
                    height:300px;
                    object-fit:cover;
                }
            }

            .card-text{
                color:#5d5d5d;
                padding: 20px 10px;
            }
        }
`;
