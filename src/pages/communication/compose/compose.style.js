import styled from 'styled-components';

export const ComposeStyle = styled.div`
    position:fixed;
    right:40px;
    height:372px;
    border-radius: 5px;
    line-height:1.2;
    box-shadow: 0 0 5px 1px #bfb7b7;
    z-index:1;
    background:white; 

    .text-muted{
        display:none;
    }
    .header{
        background: #404040;
        color: white;

        .title{
            display: inline-block;
            width: 50%;
            text-align: left;
            padding-left: 15px;
            font-size: 14px;

        }

        .compose-controls{
            display: inline-block;
            width: 50%;
            text-align: right;

            .close{
                opacity: 0.7;
                cursor:pointer;
                font-family:cursive;
                padding: 7px;
                margin-right: 15px;

                &:hover{
                    background: rgba(255,255,2555,0.4);
                    opacity:1;
                }
            }
        }

        .title,.compose-controls{
            font-weight: bold;
            margin-bottom: 0;
            line-height: 3;
        }
    }

    .main{
        .form{
            position:relative;
            .form-to,.form-subject{
                padding: 0 15px;
            }
            .form-control{
                border: none;
                border-bottom: solid 1px #f1ebeb;
                line-height: 2;
            }

            .quill{
                .ql-editor{
                height:226px;
                }
                .ql-toolbar{
                    position: absolute;
                    bottom: -7px;
                    right: 0;
                    width:86%;
                }
            }


            .send-btn{
                padding:7px 17px;
                position: relative;
                right: 243px;
                top: 4px;
            }
        }
    }
`;
