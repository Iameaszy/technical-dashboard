import styled from 'styled-components';

export const NoticeStyle = styled.div`
        background:white;
        line-height:initial;
        width:100%;
        text-align: left;
        padding: 4% 6%;
        border:solid 1px lightgray;
        position:relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        

        .success-alert{
                margin: 0;
                display: inline-block;
                margin-left: 12px;
                color: #248024;
        }
        .title{
            margin-bottom: 20px;
            color:#c54fca;
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
            box-shadow: 0 0 2px 2px lightgrey;
            border-radius: 5px;
            padding: 3% 5%;
            margin-bottom: 50px;
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
            position: relative;
            box-shadow: 0 0 2px 2px lightgrey;
            border-radius: 5px;
            padding: 3% 5%;
           
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
