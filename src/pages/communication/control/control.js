import React from 'react';
import styled from 'styled-components';
import { FaTrashAlt, FaEnvelopeOpen, FaBars } from 'react-icons/fa';

export const ControlStyle = styled.ul`
        list-style:none;
        display: flex;
        line-height: 2;
        color: #6d6666;
        margin-left: 156px;
        @media (max-width:656px){
            margin-left:0;
        }

        .list-item{
            width: 40px;
            height: 40px;
            border-radius: 100%;
            cursor:pointer;
            padding:10px;
            display: flex; 
            justify-content: center; 
            align-items:center; 
            transition:0.1s all;
               .select-all-input{
                    height:20px;
                    width:20px;
                }

            &:not(.list-item-control):hover{
                    color:black;
                    background: #d6d6d6;
            }
        }

        .list-item-control,.list-item-d{
          @media (max-width:656px){
              display:none;
          }  
        }
`;

export const Control = ({ checkAllLists, checked, onToggled }) => (
  <ControlStyle>
    <li className="list-item list-item-control" title="select"><input className="select-all-input" type="checkbox" checked={checked} onChange={() => checkAllLists()} /></li>
    {
        checked && (
        <React.Fragment>
          <li className="list-item list-item-d" title="delete"><FaTrashAlt /></li>
          <li className="list-item list-item-d" title="mark as read"><FaEnvelopeOpen /></li>
        </React.Fragment>
        )
    }
    <li onClick={() => onToggled()} className="list-item" title="menu"><FaBars size={28} /></li>
  </ControlStyle>
);
