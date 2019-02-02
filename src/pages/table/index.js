import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { CellButton, NetworkFailure } from '../../shared-components/dashboard/index.style';
import connectionImage from '../../assets/internet-connection-error.jpg';
import loader from '../../assets/flickr-loader.svg';
import fishAction from '../../redux/actions/fish';
import modalAction from '../../redux/actions/modals';
import * as fishActions from '../../redux/action-creators/fish';

export class Table extends React.PureComponent {
  componentDidMount() {
    const { getFishes } = this.props;
    getFishes();
  }

  render() {
    const { type, fishes, startModal } = this.props;

    const columns = [{
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      id: 'name',
      accessor: d => d.data.name,
    }, {
      Header: 'Image',
      id: 'image',
      accessor: d => d.data.image,
      Cell: props => <img src={props.value} width="100px" height="100px" className="image" alt="" />, // Custom cell components!
    },
    {
      Header: 'MIN_DCP',
      id: 'min_dcp',
      accessor: d => d.data.min_dcp,
    }, {
      Header: 'Operations',
      id: 'operations',
      Cell: props => (
        <p>
          <CellButton
            onClick={() => {
              startModal(props.original);
            }}
            type="button"
            className="edit-btn"
          >
            <span>Edit</span>
            <FaEdit />
          </CellButton>
          <CellButton color="darkred" marginLeft="5px" type="button" className="edit-btn">
            <span>Del</span>
            <FaTrash />
          </CellButton>
        </p>
      ),
    },
    ];

    if (type === fishAction.GET_FISHES_REQUEST) {
      return (
        <div style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <img src={loader} alt="" />

        </div>
      );
    }

    if (type === fishAction.GET_FISHES_SUCCESSFUL) {
      return (
        <React.Fragment>
          <ReactTable
            style={{ color: 'black' }}
            data={fishes.message}
            columns={columns}
            defaultPageSize={4}
            className="-striped -highlight"
          />
        </React.Fragment>
      );
    }
    return (
      <NetworkFailure>
        <img src={connectionImage} alt="" />
        <p className="error-text">Please check your internet connection!</p>
      </NetworkFailure>
    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.data.name,
  fishes: state.fish.fishes,
  type: state.fish.action,
});

const mapDispatchToProps = dispatch => ({
  getFishes: () => {
    dispatch(fishActions.fetchFishes());
  },
  startModal: (data) => {
    dispatch({ type: modalAction.SHOW_EDIT, data });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);
