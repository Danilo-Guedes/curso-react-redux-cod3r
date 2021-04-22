import React from 'react';
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux'

import {markAsDone, markAsPending, remove} from './todoActions'

import IconButton from '../template/iconButton';
const TodoList = props => {
    const {markAsDone, markAsPending, remove} = props;
    // console.log(props);
    const renderRows = () => {
        const lista = props.list || [];
        return lista.map(todo => {
            return (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markAsDone' : ''}>
                        {todo.description}
                    </td>
                    <td>
                        <IconButton
                            style='success'
                            icon='check'
                            onClick={() => markAsDone(todo)}
                            hide={todo.done}
                        />
                        <IconButton
                            style='warning'
                            icon='undo'
                            onClick={() => markAsPending(todo)}
                            hide={!todo.done}
                        />
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => remove(todo)}
                            hide={!todo.done}
                        />
                    </td>
                </tr>
            );
        });
    };
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableAction'>Ações</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    );
};

const mapStateToProps = state => ({
    list: state.todo.list,
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
