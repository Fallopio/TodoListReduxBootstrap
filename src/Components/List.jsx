import React from 'react'
import { connect } from 'react-redux'
import { getTodo } from '../actions/actions'


function List(props) {
    return (
        <div className="list-group" style={{ "width": '400px', 'margin': '20px' }}>
            <div className="list-group-item list-group-item-action active">
                {props.name}
            </div>
            {props.todos.filter(item => item.categ === props.type)
                .map(item =>
                    <button key={item.entry}
                    data-toggle="modal" data-target="#todoForm"
                    onClick={() => props.get(item.entry, item.categ)}
                        className="list-group-item list-group-item-action"
                    >
                        {item.entry}
                    </button>)}
        </div>
    )
}

const mapStateToProps = ({ todos }) => {
    return {
        todos: todos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: (entry, categ) => dispatch(getTodo(entry, categ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)