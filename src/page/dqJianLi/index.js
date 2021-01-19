import './index.scss'
import React from 'react'
import { Carousel } from 'antd-mobile';
import arrawBtm from '../../lib/image/jianLi/arraw-btm.png';
import avator from '../../lib/image/jianLi/diaoqi.png';
import XiaolanQrCode from '../../lib/image/jianLi/xiaolan.jpg'
import MeicangQrCode from '../../lib/image/jianLi/meicang.png'
import RuiyunQrCode from '../../lib/image/jianLi/ruiyun.png'
import TaozugongQrCode from '../../lib/image/jianLi/taozugong.jpg'

class DqJianLi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientHeight: document.body.clientHeight
    }
  }
  componentDidMount() {
    document.title = '刁琪在线简历 - 前端开发'
  }


  render () {
    let { clientHeight } = this.state
    return (
      <div className="jianLiPage">
          <div className="item">
            <div className="content">
              <div className="title">基本信息</div>
              <div className="row"><div className="key">姓名: </div><div className="value">刁琪</div></div>
              <div className="row"><div className="key">出生年月: </div><div className="value"> 1995.03</div></div>
              <div className="row"><div className="key">民族: </div><div className="value"> 汉</div></div>
              <div className="row"><div className="key">学历: </div><div className="value"> 统招本科</div></div>
              <div className="row"><div className="key">联系方式: </div><div className="value"> 17609885098</div></div>
              <div className="row"><div className="key">现居地址: </div><div className="value"> 浙江省杭州市</div></div>
              <div className="row"><div className="key">电子邮箱: </div><div className="value"> diaoqi_7@163.com</div></div>
              <div className="row"><div className="key">毕业学校: </div><div className="value"> 沈阳理工大学</div></div>
              <img className="avator" src={avator} alt="avator" />
            </div>
          </div>
          <div className="item item-skill">
            <div className="content">
              <div className="title">个人介绍</div>
              <div className="row"><div className="dot" /><div className="skill">四年前端开发工作经验。精通 Angular4、Vue、TypeScript、ES6 以及 Webpack 等开发单页面应用所需技术。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 React 以及 React Native，有 React 开发经验。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 Taro 混合 APP 开发。熟悉支付宝微信小程序开发。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 Nodejs + MySQL，能独立搭建前中后全栈项目</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉网络爬虫技术。熟悉人工智能、机器学习技术，使用过 Python3+TensorFlow</div></div>
              <div className="row"><div className="dot" /><div className="skill">从事过智能教育、医疗大数据、互联网金融行业，带过五人前端团队，对互联网新技术有较高的热情。</div></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">工作经历</div>
              <div className="exprience-title title">杭州淘租公科技有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2019.07 - 2021.02</span></div>
              <div className="expInfo">技术部 &nbsp; &nbsp; &nbsp; 前端开发 &nbsp; &nbsp; &nbsp; 电子商务 &nbsp; &nbsp; &nbsp; 互联网金融</div>
              <div className="row"><div className="dot" /><div className="skill">负责公司支付宝及微信渠道的小程序开发，以及混合式APP开发，技术栈：Taro + React。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责团队后台系统的编写调试修改维护，搭建整体的后台项目，使用Vue Element ES6。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责公司数据统计站点后台编写，负责全部对应的数据系统。技术栈：Node + express。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责带领部门前端团队，人员招聘面试及成员的培养。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. 淘租公小程序是一个数码产品租赁、售卖的一站式服务平台，使用Taro统一支付宝及微信渠道，支持花呗分期付款。支付宝搜索淘租公</div></div>
              <div className="row"><div className="skill">2. 小兰智选微信小程序是微信内的推广渠道，目前日活一千人左右。微信搜索小兰智选</div></div>
              <div className="row"><div className="skill">3. 淘租公APP是Flutter开发的跨IOS及安卓的原生应用，各大应用商店均可下载</div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Taro + React + Dva + TypeScript + Nodejs + Flutter</span></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="exprience-title title">浙江盘石股份有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2018.04 - 2019.07</span></div>
              <div className="expInfo">互金二部 &nbsp; &nbsp; &nbsp; &nbsp; 前端开发 &nbsp; &nbsp; &nbsp; &nbsp; 互联网金融</div>
              <div className="row"><div className="dot" /><div className="skill">负责公司海外现金贷产品的编写（巴西、墨西哥、印尼），以及混合式 APP 开发，技术栈：ionic + cordova。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责团队后台系统的编写调试修改维护，搭建整体的后台项目，使用 Angular4 TypeScript ES6。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责贷超产品编写和后台编写，负责全部对应的后台系统。技术栈：Vue + iview。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. MyLoan APP 是巴西地区的现金贷 APP，使用多语言国际化以及 cordova 打包安卓应用，谷歌Play商店切换至巴西区搜索Myloan可下载（需手机支持葡萄牙语）。</div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Angular4 + AntDesign + TypeScript + ES6 + cordova</span></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="exprience-title title">东软集团股份有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2016.10 - 2018.04</span></div>
              <div className="expInfo">熙康事业部 &nbsp; 睿云产品部 &nbsp; 互联网教育 &nbsp; 互联网医疗</div>
              <div className="row"><div className="dot" /><div className="skill">负责东软睿云 <a href="http://ry.com.cn">http://ry.com.cn</a> 的前端页面制作及实现 js 交互。使用 Bootstrap 开发睿云网对应的移动端网站，完成响应式布局，通过 ajax 调用 JAVA API 接口，增删改查数据。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责东软熙康医疗的医患管理系统编写和维护，及全套后台的维护，使用 jQuery、Echart 等技术。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责伴考云数据的前端页面展示及调试，使用 Echart、highchart 等技术，实现动态的数据展示及用户交互。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. 东软睿云网 <a href="http://ry.com.cn">http://www.ry.com.cn</a> <br />账号：stu01@ry.com.cn 密码：123456</div></div>
              <div className="row"><div className="skill">2. 教师报告、伴考云数据等页面 <a href="http://m.diaoqii.xyz/#/webList">http://m.diaoqii.xyz/#/webList</a></div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Vue + Element + Vuex + Echart</span></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">项目经历</div>
              <div className="exprience-title title">淘租公租赁购物平台<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2019.02 - 2020.10</span></div>
              <div className="row"><div className="dot" /><div className="skill">项目简介:淘租公租赁购物平台是为当代年轻人提供的一站式设备信用免押租赁平台，以年轻人常用设备免押租赁为起点，覆盖数码科技、小型家电、旅游户外、工程机械、教科书及办公用品等产品，方便年轻人的居家办公生活。</div></div>
              <div className="row"><div className="dot" /><div className="skill">1.后台管理系统:管理商品、订单、类目、商品规格属性、用户管理等功能。</div></div>
              <div className="row"><div className="dot" /><div className="skill">2.前台系统:用户可以在前台系统中进行注册、登录、浏览商品、首页、下单等操作。</div></div>
              <div className="row"><div className="dot" /><div className="skill">3.主要技术:用户端：Taro + React + Dva + Nodejs, 管理后台：Vue + Element + Koa</div></div>
              <div className="row"><div className="dot" /><div className="skill">4.支付宝或微信扫描下方二维码查看详情。</div></div>
              <div className="qrcode-area">
                <img className="xiaolan" src={XiaolanQrCode} alt="avator" />
                <img className="taozugong" src={TaozugongQrCode} alt="avator" />
              </div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="exprience-title title">美仓互联网美妆平台<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2019.03 - 2019.04</span></div>
              <div className="row"><div className="dot" /><div className="skill">项目简介:爱美爱时尚的人们可以在社区查口碑，做功课，和大家分享日常，一起轻松变美，美仓同时也提供城市周边服务信息，我们只为打造更真实的点评，更及时的美妆资讯以及更有效的互动美业信息聚合型平台。</div></div>
              <div className="row"><div className="dot" /><div className="skill">1.后台管理系统:商家管理，商品管理，以及商品优惠券、促销活动等功能。</div></div>
              <div className="row"><div className="dot" /><div className="skill">2.前台系统:用户可以在前台系统中进行注册、登录、浏览商品、查看评价、交流经验等操作。</div></div>
              <div className="row"><div className="dot" /><div className="skill">3.主要技术:用户端：React, 管理后台：Vue + Element</div></div>
              <div className="row"><div className="dot" /><div className="skill">4.官网预览：<a href="http://m.diaoqii.xyz/mc">http://m.diaoqii.xyz/mc</a>(移动端适配)。或者扫描下方二维码查看。</div></div>
              <div className="qrcode-area">
                <img className="xiaolan" src={MeicangQrCode} alt="avator" />
              </div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="exprience-title title">MyLoan贷款超市<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2018.04 - 2019.07</span></div>
              <div className="row"><div className="dot" /><div className="skill">项目简介:MyLoan贷款超市是一款短期贷款平台(714高炮)，面向南美地区的客户</div></div>
              <div className="row"><div className="dot" /><div className="skill">1.后台管理系统:额度管理，商品管理，风控模块、人脸活体识别等功能。</div></div>
              <div className="row"><div className="dot" /><div className="skill">2.主要技术:用户端：Ionic + cordova, 管理后台：Vue + Element</div></div>
              <div className="row"><div className="dot" /><div className="skill">3.APP下载方式：谷歌商店南美区搜索MyLoan即可下载。</div></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="exprience-title title">东软睿云<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2016.10 - 2018.04</span></div>
              <div className="row"><div className="dot" /><div className="skill">项目简介:东软集团作为中国最大的IT解决方案与服务提供商，成立于1991年，1996年成为中国首个上市的软件公司。东软基于20年来对IT产业实践的理解和对我国教育实践的洞察，由多位国家级资深教育和教学评测专家和北师大、华东师大教育测量学专家共同评定，联合国家优秀中小学一线教师倾力参与打造了东软睿云教学与学习智能服务系统。</div></div>
              <div className="row"><div className="dot" /><div className="skill">1.智能云阅卷系统:线上阅卷，自动算分，生成成绩单、趋势单等自动功能。</div></div>
              <div className="row"><div className="dot" /><div className="skill">2.成绩分析系统:大数据算薄弱知识点，推荐文理科，自动整理错题等功能。</div></div>
              <div className="row"><div className="dot" /><div className="skill">3.官方网站：<a href="http://ry.com.cn/">http://ry.com.cn/</a> 账号：stu01@ry.com.cn 密码：123456。或者扫描下方二维码查看。</div></div>
              <div className="qrcode-area">
                <img className="xiaolan" src={RuiyunQrCode} alt="avator" />
              </div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">实践及个人项目经验</div>
              <div className="exprience-title title">意新小工具<span className="t863">(微信小程序)</span></div>
              <div className="row"> <div className="dot" /><div className="skill">项目简介:意新小工具，微信搜索“意新小工具”即可体验，下方二维码也可体验</div></div>
              <div className="row"> <div className="dot" /><div className="skill">项目链接: <a href="https://github.com/dq77/wx-yixinxcx">https://github.com/dq77/wx-yixinxcx</a></div></div>
              <div className="row"> <div className="dot" /><div className="skill">混合APP “意新计算器”，应用宝搜索“意新计算器” 即可体验，React Native。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">个人 GitHub 地址: <a href="https://github.com/dq77/">https://github.com/dq77/</a></div></div>
              <div className="row"> <div className="dot" /><div className="skill">个人 CSDN 博客地址: <a href="https://blog.csdn.net/a270778319">https://blog.csdn.net/a270778319</a></div></div>
              <div className="row"> <div className="dot" /><div className="skill">目前个人还有两个正在开发的微信小程序，一个后台管理系统，均在 GitHub 上有项目</div></div>
              <div className="row"> <div className="dot" /><div className="skill">小程序“减肥助手“（开发中）<a href="https://github.com/dq77/lose-weight-weapp">https://github.com/dq77/lose-weight-weapp</a></div></div>
            </div>
          </div>

          <div className="item item-person">
            <div className="content">
              <div className="exprience-title title">获得证书</div>
              <div className="row"> <div className="dot" /><div className="skill">2017.03 &nbsp; 普通话水平测试等级证书(二级甲等)</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2014.06 &nbsp; 全国计算机等级考试二级合格证书</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2014.12 &nbsp; 大学英语等级考试四级证书</div></div>
              <div className="row"> <div className="dot" /><div className="skill">目前在考PMP项目管理资格证</div></div>
              <div className="exprience-title title">教育经历</div>
              <div className="row"> <div className="dot" /><div className="skill">2013.09 - 2017.07 &nbsp; 沈阳理工大学(本科一批段)</div></div>
              <div className="exprience-title title">自我评价</div>
              <div className="remark">四年前端开发工作经验。精通前后端分离开发模式，精通 Angular4、TypeScript、ES6 以及 Vue 开发单页面应用，精通 Taro 混合 APP 开发。熟悉微信小程序开发，熟悉 Nodejs+MySQL，熟悉 React 以及 React Native。从事过智能教育、医疗大数据、互联网金融行业，对新技术有较高的热情。</div>
            </div>
          </div>
      </div>
    )
  }
}
export default DqJianLi