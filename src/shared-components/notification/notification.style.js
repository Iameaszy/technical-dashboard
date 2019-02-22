import styled, { keyframes, css } from 'styled-components';


const showNotification = keyframes`
  from {
    top:45px;
    z-index:0
  }

  to {
    top:72px;
    z-index:1000
  }
`;

export const Notification1Style = styled.div`
        position: fixed;
        min-width: 300px;
        transition: 1s all;
        top: ${props => (props.status === true ? '72px' : '0px')};
        line-height: 1.2;
        padding: 8px 20px;
        border-radius: 5px;
        z-index:${props => (props.status === true ? 1000 : 0)};
        left: 50%;
        transform: translate(-50%, 0);
        background:${props => (props.type === 'alert' ? 'red' : '#11a051')};
        color:${props => (props.color ? props.color : 'white')};
        ${props => props.status && css`
            animation-name: ${showNotification};
        `};
        animation-duration: 1s;

        .close-notification{
            position: absolute;
            top: 3px;
            right: 8px;
            font-weight: bold;
            opacity: 0.7;
            cursor:pointer;
        }

        
`;

export const Notification2Style = styled.div`
        position: fixed;
        min-width: 300px;
        transition: 0.1s all;
        top: 0px;
        line-height: 1.2;
        padding: 8px 20px;
        border-radius: 5px;
        z-index:0;
        left: 50%;
        transform: translate(-50%, 0);
        background:${props => (props.type === 'alert' ? 'red' : '#11a051')};
        color:${props => (props.color ? props.color : 'white')};
        ${props => props.status && css`
            animation-name: ${showNotification};
        `};
        animation-duration: 1s;
`;
