import styled from 'styled-components';

export const NoticeStyle = styled.div`
        background:white;
        line-height:initial;
        width:100%;
        text-align: left;
        padding: 40px 60px;
        border:solid 1px lightgray;
        position:relative;

        .success-alert{
                margin: 0;
                display: inline-block;
                margin-left: 12px;
                color: #248024;
        }
        .title{
            font-weight: 100;
            margin-bottom: 20px;
        }
        .btn{
                padding: 10px 30px;
                border: none;
                border-radius: 4px;
                color:white;

                &:enabled{
                    background:#6b6bc5;

                    &:hover{
                        background:#5555b5;
                        }
                }
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
        }

        .files-wrapper{
            padding:10px;

            .upload-btn{
                padding: 10px 30px;
                border: none;
                border-radius: 4px;
                color:white;

                &:enabled{
                    background:#6b6bc5;

                    &:hover{
                        background:#5555b5;
                        }
                }
            }
        }
        .text-wrapper{
            padding:10px;
            position: relative;
           
            
            @media only screen and (max-width: 767px){
                top: -58px;
            }
            .title{
                margin-bottom:25px;
            }
            .ql-editor{
                height: 150px;
            }

            .btn-group{
                padding-top:10px;
            }
        }
`;
