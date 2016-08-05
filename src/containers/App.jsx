import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../assets/styles/_index.styl';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';


const propTypes = {
    user: PropTypes.object,
    page: PropTypes.object,
    pageActions: PropTypes.object,
};

class App extends Component {
    render() {
        const { user, page } = this.props;
        const { getPhotos } = this.props.pageActions;
        return (
            <div>
                <User name={user.name} />
                <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} />
            </div>
        );
    }
}

App.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
