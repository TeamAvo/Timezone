import React from 'react'
import Time from './Time.js'

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'
class Main extends React.Component {
    render() {
        return (
            <>
                <header>
                    <div className='title'>Timezone</div>
                </header>
                <Time />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    time: state.time
})
export default compose(connect(mapStateToProps, actions))(Main)
