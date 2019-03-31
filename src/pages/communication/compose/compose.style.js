import styled from 'styled-components';

export const ComposeStyle = styled.div`
    position:fixed;
    top:90px;
    left:28%;
    /*height:372px;*/
    border-radius: 5px;
    line-height:1.2;
    box-shadow: 0 0 5px 1px #bfb7b7;
    z-index:1;
    background:white; 

    .text-muted{
        display:none;
    }
    .textarea{
        width:100%;
        border: none;
        border-bottom: solid 1px lightgray;
        padding: 10px;
    }
    .clearfix{
        clear:both;
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
            .form-control{
                border: none;
                border-bottom: solid 1px #f1ebeb;
                line-height: 2;
                padding:0 10px;
            }

            .btn-group{
                text-align:left;
                text-align: left;
                padding: 3px;
                margin-top: -3px;
                .send-btn,.save-btn{
                    border: none;
                    padding: 10px 25px;
                    outline: none;
                    border-radius: 5px;
                    color: white;
                    background: #5656fb;
                }

                .save-btn{
                    margin-left:10px;
                    background: cadetblue;
                }
            }
            
        }
    }
`;
