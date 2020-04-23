// pages/test/test.js
Page({
  onLoad: function(options) {
    var privateKey = 'MIICXAIBAAKBgQCS1/LnFzny4VdxqNsY4DFuoqLPK3e0k2issswimlJ8VW4nwo6nM37oqKL/V68Izd5m8qdjTo5aJ6icB/2zTFQGtcurLo4i7EDWU5bbiM8OfVXCY0kbtO65iRXUYMAfW2XVFicZTPS7xjmz03qE2KwSK5qos6/9Zf3wYKYnEjM73wIDAQABAoGAROFKHe8trgnY4EZSG72SQnDEiQQ9PvWEfLnT+olEFvFl3f2rt692oMD10Gu7fZg/8i9xqCoBqTWAKEyxSykLIm+O2X/RS9VUHefKllXel0oEmHJ3zngF67wnfQOecxVosfmlGE2zdkT4kfy87JYoLIKZhTVdkSpVsbjyQtJqC7kCQQCgzpUtMuRR1P+4LhtWEb0BAu0wg+TUTKQt+APoh2VsNYTVOlEC8AgaJDZ4WBgO4zzIFiPiD0zArPxx4kWSGmJ5AkEA6cVJevooNaJE45Reg0Rhe1vJAI2roWlhGR5+6+/OCLB7q57Zj+Rqlh8ZlwSvSn8Vch+0F0SxEB4d/EOhgZa7FwJBAI7EemsjmNQSYGrb/IcgvoYMXBtLrjjSRp1NaeLjeqdkqKdK3CvYgcj7x6R2yf1FwGwARCFq5gDWVFajxpKdfDkCQGOOF1r+Cf29W2UoHI/+oR0t244Wx074V9eguyCzgaUFs8VE4xZ6ikHggL9lyVkKghGWGtYF9PoOOWrjSnarwIUCQHupOYw+KtqRXT3Bo1wsJBO8ZYKTzPHUokXvZ8ZRTXlAaQtCwnCetfYb67knT4Esqnt4/v9n1/kWVxmlNiCWM4w='
    var publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCS1/LnFzny4VdxqNsY4DFuoqLPK3e0k2issswimlJ8VW4nwo6nM37oqKL/V68Izd5m8qdjTo5aJ6icB/2zTFQGtcurLo4i7EDWU5bbiM8OfVXCY0kbtO65iRXUYMAfW2XVFicZTPS7xjmz03qE2KwSK5qos6/9Zf3wYKYnEjM73wIDAQAB'

    // 加密
    const Encrypt = require('../../utils/jsencrypt.min.js');
    let encryptor = new Encrypt.JSEncrypt();
    encryptor.setPublicKey(publicKey) // 设置公钥
    var mi = encryptor.encrypt("zhangs123") // 对需要加密的数据进行加密

    // 解密
    const decryptor = new Encrypt.JSEncrypt();
    decryptor.setPrivateKey(privateKey)
    var ming = decryptor.decrypt(mi)

    console.log("密文:", mi);
    console.log("明文:", ming);
  }
})