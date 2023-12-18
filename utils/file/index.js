/**
 * 文件大小展示 单位处理
 * @param {number} bytes 文件大小 单位 bytes
 * @returns string
 */
export function byteConvert(bytes) {
    if (isNaN(bytes)) {
        return '-';
    }
    let symbols = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let exp = Math.floor(Math.log(bytes) / Math.log(2));
    if (exp < 1) {
        exp = 0;
    }
    let i = Math.floor(exp / 10);
    bytes = bytes / Math.pow(2, 10 * i);

    if (bytes.toString().length > bytes.toFixed(2).toString().length) {
        bytes = bytes.toFixed(2);
    }
    return bytes + ' ' + symbols[i];
};


/**
 * 判断图片资源是否有效
 * @param {string} url
 * @returns {Promise<boolean>}
 */
export function checkImg(url) {
    if (!url) {
        return Promise.resolve(false);
    }
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = function () {
            resolve(true);
        };
        image.onerror = function () {
            resolve(false);
        };
    });
}