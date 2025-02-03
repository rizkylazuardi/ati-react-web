import * as type from './MenuActionType';
import request from './../../../service/invoke/request';
import MenuMapper from './../mapper/MenuMapper';

export const updateMenu = (client, data) => {
    return (dispatch) => {
        client.invoke(
            'menu/menu-by-username',
            data,
            {
                method:"POST",
                header:{
                    "Content-Type": "application/json"
                }
            }
        ).then(
            (response) => {
                const mappedData = MenuMapper.mapServerToDtoList(response.data.response);
                dispatch({
                    type: type.UPDATE_MENU,
                    payload: {menus: mappedData},
                });
            },
            (error) => {
                console.log(error)
            }
        )
    };
};
