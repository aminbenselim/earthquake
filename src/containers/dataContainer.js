import { connect } from "react-redux";
import { fetchData } from "../actions/actionCreators";
import Data from "../components/data";

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Data);
