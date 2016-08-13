
/**可以根据需要修改地址为开发和线上地址*/

export const API_URL_ROOT = (process.env.NODE_ENV === 'production')
			? 'http://admin.fengjx.com/rest-data/api/blog'
			:'http://admin.fengjx.com/rest-data/api/blog';

