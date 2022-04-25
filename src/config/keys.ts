import dotenv from 'dotenv';

dotenv.config({ path: 'var.env', debug: true });

const keys = {
    port: process.env.PORT || 3000,
    host: process.env.HOST ||'0.0.0.0',
    dbUri: process.env.MONGO_URL||"mongodb://localhost:27017/todo-ts-exp",
    accessTokenTtl: `10m`,
    refreshTokenTtl: `1y`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCm7RraUnmvG1fxc/cMWeu4Nn7l
FMlPTHejC9WFdwd9tDhzD3wB4InloA7DJrMduFIEnpKwMXs5MlusPjy18eO1H0w1
xqUU39ziPn5VaZeZiTiNlPGm4D1yWYtOjqUZkpUyOtxNGHozHzoJc0U5PQMK9GJU
MBKkGDPSMG7kJPmFxwIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCm7RraUnmvG1fxc/cMWeu4Nn7lFMlPTHejC9WFdwd9tDhzD3wB
4InloA7DJrMduFIEnpKwMXs5MlusPjy18eO1H0w1xqUU39ziPn5VaZeZiTiNlPGm
4D1yWYtOjqUZkpUyOtxNGHozHzoJc0U5PQMK9GJUMBKkGDPSMG7kJPmFxwIDAQAB
AoGAF4eYn2m8yVgbX2evTUhnl8HmxTfW4JywyITkhjmvDqMWyfFG06TpCzsymYOc
//V5ajlICBoRepCEp5TmTedY53YlVKTw7gRwmSQxRiKFWR7aagdpsxi/ByDUlz2n
PaNfLHxLL4LAC3bLcU+x8jVQRZlp9n73F//J12w9amXd/TECQQDvpYZ+Yw8szSKU
DY2CRSXwinLV9CcGTEB3m2ILS7tX/B3Wp2t9LujjEp1QtgjthJnrmAxvlM1Y+czM
Jpt0K1zVAkEAslEzPMwOFfmXS7XwpTdqOWugp0bPbUDzz/zkFPzxFWLvYio+1I8C
4cn50hr4BWE1S/mrbsDuABOGFQ8uKaw2KwJAelGni10ugrSV4LHmN8bprZRNNw2u
2ZUUFri124QlNKyX4leEEtpdvoFi0K6JcgqLsefi+RUflzmxocZW9H2pnQJABZSa
+OUd77we6wSnolQIpAFlRrblmPK2bqTocmu0E8pD2Zue2cIcAfrzMYschfaT12vZ
3J53FFOIF7Kg7DbyfwJAJWWf1cP/AY/CPPZoVw1GiJotF7yeOlvSvsabVpQ6f1WU
HOZtrlZ1HiWiYHZxm1ibGBhHyd5/Otrua4XAvvO3ow==
-----END RSA PRIVATE KEY-----`

}

export default keys;