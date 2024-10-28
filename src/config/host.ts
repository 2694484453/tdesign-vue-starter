export default {
  development: {
    // 开发环境接口请求
    NAME: "development",
    //API: 'http://localhost:9099',
    API: 'http://ecs.gpg123.vip:9099',
    PATH: "",
    // 开发环境 cdn 路径
    CDN: '',
  },
  prod: {
    // 生产环境接口请求
    NAME: "prod",
    API: 'http://ecs.gpg123.vip:9099',
    PATH: "",
    // 开发环境 cdn 路径
    CDN: '',
  },
  test: {
    // 测试环境接口地址
    NAME: "test",
    API: 'https://service-exndqyuk-1257786608.gz.apigw.tencentcs.com',
    PATH: "/test-api",
    // 测试环境 cdn 路径
    CDN: '',
  },
  release: {
    // 正式环境接口地址
    NAME: "release",
    API: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com',
    PATH: "/release-api",
    // 正式环境 cdn 路径
    CDN: '',
  },
  site: {
    // 正式环境接口地址
    NAME: "site",
    API: 'https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com',
    PATH: "/site-api",
    // 正式环境 cdn 路径
    CDN: '',
  },
};
