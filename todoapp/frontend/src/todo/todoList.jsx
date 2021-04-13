import React from 'react';

import IconButton from '../template/iconButton';

export default props => {
    const renderRows = () => {
        const lista = props.list || [];
        return lista.map(todo => {
            return (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton
                            style='danger'
                            icon='trash-o'
                            onClick={() => props.handleRemove(todo)}
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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    );
};
