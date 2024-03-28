import dayjs from "dayjs";

/**
 * 计算评论总数
 * @param post
 * @returns {number}
 */
export const sumReplySize = (post) => {
    // console.log(post);

    if (post === null) {
        return 0;
    }
    if (post.replys === null || post.replys === undefined) {
        return 0;
    }
    let sum = post.replys.length;

    let subSum = 0;
    post.replys.map((reply, index) => {
        if (reply.subReplys !== null && reply.subReplys !== undefined) {
            subSum += reply.subReplys.length;
        }
    });

    return sum + subSum;
}

/**
 * 获取随机ID
 * @returns {string}
 */
export const getRandomId = () => {
    return Math.random().toString(36).substr(2, 9)
}

/**
 * 获取当前时间
 * @returns {string}
 */
export const getCurrentTime = () => {
    return dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
}