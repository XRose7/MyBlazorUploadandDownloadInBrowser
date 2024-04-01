window.downloadFile = function (options) {
    const { fileName, fileContent } = options;

    // 创建一个 Uint8Array 来存储字节数组
    const byteArray = new Uint8Array(fileContent);

    // 创建一个 Blob 对象
    const blob = new Blob([byteArray], { type: 'image/png' });

    // 创建一个链接并设置属性
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // 模拟点击链接来触发下载
    link.click();

    // 释放 URL 对象
    URL.revokeObjectURL(link.href);
};
