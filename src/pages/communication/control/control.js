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
        
        .delete-modal{
          background: white;
          width: 400px;
          line-height: 1.2;
          padding: 10px;
          color: #444;
          position: absolute;
          opacity:${props => (props.status ? 1 : 0)};
          z-index:${props => (props.status ? 16 : -1)};
          transition:1s all;
          top:${props => (props.status ? '76px' : '-200px')};
          left:32%;
          

          .danger-icon{
            width: 60px;
            height: 60px;
            border-radius: 100%;
            border: solid #fb7575 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2.6rem;
            color: #e06e6e;
            margin: auto;
            font-family: monospace;
          }

          .p1{
            margin: 1rem;
            font-size: 20px;
          }
          .p2{
            opacity:0.8;
          }
          .close-btn{
            position: absolute;
            top: 5px;
            right: 15px;
            color: #908e8e;
            font-size: 18px;
            font-family: monospace;
            cursor: pointer;
          }

          .cancel-btn,.continue-btn{
            border: none;
            padding: 8px 25px;
            color: white;
            background: #c1c1c1;
            border-radius: 2px;
            margin-right: 10px;
            outline:none;
          }

          .continue-btn{
            background: #d66f6f;
          }
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
          transition:1s all;
          @media (max-width:656px){
              display:none;
          }  
        }

        .list-item-sm{
          @media (min-width:657px){
              display:none;
          }
        }
`;
export class Control extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { status: false };
    this.cancelModal = this.cancelModal.bind(this);
    this.startModal = this.startModal.bind(this);
  }

  cancelModal() {
    this.setState({ status: false });
  }

  startModal() {
    this.setState({ status: true });
  }

  render() {
    const {
      checkAllLists, checked, onToggled, onMessageDelete,
    } = this.props;
    const style = { opacity: checked ? 1 : 0, zIndex: checked ? 1 : -1 };
    return (
      <ControlStyle status={this.state.status}>

        <aside className="delete-modal">
          <div className="danger-icon">x</div>
          <p className="p1">Are you sure?</p>
          <p className="p2">
                  Do you really want to delete these messages? This process cannot be undone
          </p>
          <span className="close-btn" onClick={this.cancelModal}>x</span>
          <div>
            <button type="button" onClick={this.cancelModal} className="cancel-btn">Cancel</button>
            <button type="button" onClick={() => { onMessageDelete(); this.cancelModal(); }} className="continue-btn">Continue</button>
          </div>
        </aside>

        <li className="list-item list-item-control" title="select"><input className="select-all-input" type="checkbox" checked={checked} onChange={() => checkAllLists()} /></li>

        <React.Fragment>
          <li style={style} className="list-item list-item-d" title="delete" onClick={this.startModal}><FaTrashAlt /></li>
          <li style={style} className="list-item list-item-d" title="mark as read"><FaEnvelopeOpen /></li>
        </React.Fragment>
        <li onClick={() => onToggled()} className="list-item list-item-sm" title="menu"><FaBars size={28} /></li>
      </ControlStyle>
    );
  }
}
