import styled from 'styled-components';


export const NavbarStyle = styled.div`
background: linear-gradient(to left, #ff8e97, #8b34cc);
padding: 20px;
color: white;
display:flex;
position: relative;

.right-block{
    position:absolute;
    right: 50px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;

    .message{
        margin-right:50px;
        line-height:0.5;
        cursor:pointer;
    }

    .logout-text{
        margin-right:15px;
        cursor:pointer;
    }
    .power-off-icon{
        line-height:0.5;
        cursor:pointer;
    }
}
.left-block{
    display: flex;
    align-items: center;
    justify-content: center;

    .bars-icon{
        margin-right:10px;
        line-height:0.5;
        cursor:pointer;
    }
}
`;
