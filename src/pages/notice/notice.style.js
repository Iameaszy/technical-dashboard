import styled from 'styled-components';

export const NoticeStyle = styled.div`
        background:white;
        line-height:initial;
        width:100%;
        text-align: left;
        padding: 40px 60px;

        .title{
            font-weight: 100;
            margin-bottom: 20px;
        }
        .dropzone-wrapper{
            padding:10px;
        .file-upload-container{
            position:relative;
            border:solid 1px lightgray;
            padding:40px;
            .text-info{
                padding:10px;
                line-height: initial;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor:pointer;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin-bottom: 0;
                font-weight: 400;
            }
        }

        .files-wrapper{
            padding:10px;

            .upload-btn{
                padding: 10px 30px;
                border: none;
                border-radius: 4px;
                color:white;

                &:enabled{
                    background:#63b34f;

                    &:hover{
                        background:#49a732;
                        }
                }
            }
        }
    }
`;
