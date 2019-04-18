import styled from 'styled-components';

export const CommStyle = styled.div`
    background:white;
    position:relative;
    display: flex;
    flex-direction: row;
    font-size:14px;
`;

export const CommSideStyle = styled.div`
    width: 180px;
    border-right: solid 1px #cdced6;
    padding: 10px;
    position:relative;
    transition:0.6s all;
    color:#4a4040;
    @media (max-width:656px){
        width:140px;
        position: fixed;
        border-radius: 0 40px;
        background: white;
        left: ${props => (props.toggled ? 0 : '-180px')};
        z-index: 1000;
        box-shadow: 0 0 7px 1px lightgrey;
    }
    .compose-btn-container{
        .compose-btn{
            line-height: 1;
            padding: 15px;
            width: 8em;
            border: none;
            border-radius: 20px;
            background: #f9f9f9;
            box-shadow: 0px 0px 5px 0px;
            outline:none;

            &:hover{
                background:white;
                box-shadow: 0px 0px 5px 0px;
            }
        }
    }
    
    .mail-options-container{
        list-style:none;

        .mail-option{
            line-height:3;
            cursor:pointer;
            text-align:left;

            .icon{
                padding-right:20px;
                padding-left:10px;
            }
            
            &.active{
                background: rgba(0, 0, 0, 0.1);
                border-radius: 5px;
                color: blue;
            }
        }
    }
`;


export const MainCommStyle = styled.ul`
    list-style: none;
    padding-right:10px;
    height: 424px;
    overflow-y: auto;
    margin:0;
    position:relative;

    .compose-mobile{
        background: #d6529e;
        width: 3.125rem;
        height: 3.125rem;
        position: absolute;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color:white;
        right: 6%;
        top: 48vh;

        a{
            color:white;
        }
    }
    .message-wrapper{
        line-height: 1.2;
        text-align: left;
        padding:10px;
        color:#4a4040;

        .from{
            color: #C25FB3;
        }

        .date{
            color:#a2a1a1;
        }

        .message{
            margin-top: 65px;
            height: 247px;
        }
    }
`;
