import styled from 'styled-components';


export const NavbarStyle = styled.div`
    background: linear-gradient(to left,#ff8e97,#8b34cc);
    padding: 20px;
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 1000;
.logo{
    margin-top:15px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
}
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

        @media only screen and (max-width: 567px){
           display:none;
        }
    }

    .mobile-toggle{
        margin-right:-16px;
        .toggle-icon{
            cursor: pointer;
            display: inline-block;
            margin-top: 5px;
        }
        @media only screen and (min-width: 992px){
        display:none;
        }
    }

    .logout{
    
    .logout-text{
        margin-right:15px;
        cursor:pointer;
    }
    .power-off-icon{
        line-height:0.5;
        cursor:pointer;
    }

    @media only screen and (max-width: 991px){
        display:none;
    }

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
        @media only screen and (max-width: 991px){
        display:none;
        }
    }
    @media only screen and (max-width: 991px){
        margin-left:0px !important;
    }
}
`;
export const NavMobile = styled.div`
        position: fixed;
        right: 0px;
        top: 51px;
        transition:all 1s ease 0s;

        .nav{
            padding:20px 0;
            background: white;
            color:#a2a1a1;
            margin-top:19px;
            width:290px;
            max-height:calc(100vh - 70px);
            overflow:auto;
            .message{
                @media only screen and (min-width: 568px){
                    display:none;
                }
            }
            .nav-list{
                list-style:none;
                margin-bottom: 1.8em;


                &:hover{
                    color:black;

                    .text{
                    color:black;
                    }
                }


                .icon{
                    width: 90px;
                    text-align: center;
                    display: inline-block;
                    cursor:pointer;
                    vertical-align:middle;
                }

                .text{
                    color:#2a2a2b;
                    cursor:pointer;
                }
            }
        }

    @media only screen and (min-width: 992px){
        display:none;
    }
`;
