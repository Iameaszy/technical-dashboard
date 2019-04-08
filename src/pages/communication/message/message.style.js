import styled from 'styled-components';

export const MessageStyle = styled.div`
        background:white;
    .message-wrapper{
        line-height: 1.2;
        text-align: left;
        padding:10px;
        color:#4a4040;

        .from{
            color: #C25FB3;
        }

        .subject{
            border-bottom: solid 1px lightgray;
            line-height: 2;
        }

        .date{
            color:#a2a1a1;
        }

        .message{
            margin-top: 25px;
            max-height: 247px;
            padding: 10px;
            border-radius: 5px;
            background:#F1F2F7;
        }
    }
`;
