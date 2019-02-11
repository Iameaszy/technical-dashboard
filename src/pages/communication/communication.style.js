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

    .compose-btn-container{
        .compose-btn{
            line-height: 1;
            padding: 15px;
            width: 8em;
            border: none;
            border-radius: 20px;
            background: white;
            box-shadow: 0px 0px 5px 0px dimgrey;
            outline:none;
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


export const MainCommStyle = styled.div`
padding:10px;
`;
