import {connect} from 'react-redux';


const mapStateToProps = ({load}) => ({
  moviePromo: load.moviePromo,
});


export default connect(mapStateToProps);
