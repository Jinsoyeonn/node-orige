import { Bootpay } from '@bootpay/backend-js'

Bootpay.setConfiguration({
    application_id: '65fbb57800be04001b0635c7',
    private_key: 'oBByqBtRMsAyNJwrGmSZ5IjgUjnidAG+0sAzYhnEjgA='
})

try {
    const response = await Bootpay.getAccessToken()
    console.log(response)
} catch (e) {
    // 발급 실패시 오류
    console.log(e)
}
