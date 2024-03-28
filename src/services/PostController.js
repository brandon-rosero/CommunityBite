import {getData} from "../store/PostData";

/**
 * 获取Post对象
 * @param id
 * @returns {null}
 */
export const getPostUsingGet = (id) => {
    const oldData = getData();
    let data = null;
    oldData.forEach((item, index) => {
        if (item.id === id) {
            const newData = {...item};
            data = item;
        }
    });
    return data;
}