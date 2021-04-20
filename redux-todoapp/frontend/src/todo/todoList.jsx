import React from 'react';
import { connect } from 'react-redux';

import IconButton from '../template/iconButton';
const TodoList = props => {
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
                            onClick={() => props.handleMarkAsDone(todo)}
                            hide={todo.done}
                        />
                        <IconButton
                            style='warning'
                            icon='undo'
                            onClick={() => props.handleMarkAsPending(todo)}
                            hide={!todo.done}
                        />
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.handleRemove(todo)}
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

const mapDispatchToProps = (actions, dispatch) => {
    // return dispatch(action)
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
