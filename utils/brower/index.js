
/**
 * 判断当前是否为浏览器环境
 * @returns {boolean}
 */
export function isBrowser() {
    return typeof window !== 'undefined';
}

/**
 * 获取地址栏query参数值
 * @param {string} name query参数名称
 * @param {string} search location.search
 * @returns
 */
export function getQueryString(name, search) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const res = search.substring(1).match(reg);
    return res !== null ? decodeURIComponent(res[2]) : '';
}