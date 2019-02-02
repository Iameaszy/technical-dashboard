import styled, { css } from 'styled-components';


export const CellButton = styled.button`
border: none;
width: 56px;
height: 26px;
line-height: 1;
cursor:pointer;
background: ${props => (props.color ? props.color : 'rgb(86, 127, 202)')};
color: white;
${props => props.marginLeft && css`
        margin-left: ${props.marginLeft}
`}
`;

export const NetworkFailure = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;

.error-text{
    color: red;
    font-weight: bold;
}
`;
export const HomeStyle = styled.div`
display:flex;
color:white;
.content{
    width: 100%;
    text-align: center;
    line-height:6;
    background:#f1f2f7;
}
.side-bar{
    padding-top:10px;
        color:black;
    min-height: 100vh;

    .menu{
        [class*="icon"]{
            padding:0 30px;
            color:#a2a1a1;
    }
    [class*="text"]{
        width: 200px;
    display: block;
    }

        display:flex;
        padding: 5px;
        margin: 5px 0;
        cursor:pointer;
        color:darkslategray;
        margin-bottom:20px;
        &:hover{
            color: black;

        
        [class*="icon"]{
            padding:0 30px;
            color:black;
        }
        
    }
}
`;
