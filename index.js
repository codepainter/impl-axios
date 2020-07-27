const log = require('debug')('libs:axios')
const { post, get } = require('axios').default

module.exports = {
    post: axiosPost,
    get: axiosGet
}

async function axiosPost ({ url, headers, body }) {
    log('axiosPost:', { url, headers, body })
    const { data, ...responseInfo } = await post(url, body, { headers })
    log('response:', { data, responseInfo })
    return data
}

async function axiosGet ({ url, params, headers }) {
    log('axiosGet:', { url, params, headers })
    const { data, ...responseInfo } = await get(url, { params, headers })
    log('response:', { data, responseInfo })
    return data
}
