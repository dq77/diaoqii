import './index.scss'
import React from 'react'
import { Carousel } from 'antd-mobile';
import arrawBtm from '../../lib/image/jianLi/arraw-btm.png';
import avator from '../../lib/image/jianLi/xiesiyao.jpg';

class DqJianLi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientHeight: document.body.clientHeight
    }
  }
  componentDidMount() {
    document.title = '刁琪在线简历 - JAVA开发'
    document.title = '22222222'
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
            </div>
          </div>
          <div className="item item-skill">
            <div className="content">
              <div className="title">个人介绍</div>
              <div className="row"><div className="dot" /><div className="skill">四年前端开发工作经验。精通 Angular4、Vue、TypeScript、ES6 以及 Webpack 等开发单页面应用所需技术。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 React 以及 React Native，有 React 开发经验。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 ionic 混合 APP 开发。熟悉微信小程序开发。</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉 Nodejs + MySQL，能独立搭建前中后全栈项目</div></div>
              <div className="row"><div className="dot" /><div className="skill">熟悉网络爬虫技术。熟悉人工智能、机器学习技术，使用过 Python3+TensorFlow</div></div>
              <div className="row"><div className="dot" /><div className="skill">从事过智能教育、医疗大数据、互联网金融行业，对互联网新技术有较高的热情。</div></div>
              {/* <img className="avator" src={avator} alt="avator" /> */}
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">工作经历</div>
              <div className="exprience-title title">杭州淘租公科技有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2019.07 - 2020.10</span></div>
              <div className="expInfo">技术部 &nbsp; &nbsp; &nbsp; 前端开发 &nbsp; &nbsp; &nbsp; 电子商务 &nbsp; &nbsp; &nbsp; 互联网金融</div>
              <div className="row"><div className="dot" /><div className="skill">负责带领部门前端团队，人员招聘面试及成员的培养。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责公司海外租赁产品的编写（加拿大、美国），以及加拿大APP开发，技术栈：Flutter + Dart。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责加拿大管理后台的编写及维护，Nodejs中层开发，使用 Vue + Element + Koa。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责国内支付宝小程序的编写及微信小程序的编写，负责全部对应的后台管理系统。技术栈：Taro + React + Dva。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. 淘租公小程序是一个数码产品租赁、售卖的一站式服务平台，使用Taro统一支付宝及微信渠道，支持花呗分期付款。</div></div>
              <div className="row"><div className="skill">1. 小兰智选微信小程序是微信内的推广渠道，目前日活一千人左右。</div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Angular4 + AntDesign + TypeScript + cordova</span></div>
              <div className="exprience-title title">浙江盘石股份有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2018.04 - 2019.07</span></div>
              <div className="expInfo">互金二部 &nbsp; &nbsp; &nbsp; &nbsp; 前端开发 &nbsp; &nbsp; &nbsp; &nbsp; 互联网金融</div>
              <div className="row"><div className="dot" /><div className="skill">负责公司海外现金贷产品的编写（巴西、墨西哥、印尼），以及混合式 APP 开发，技术栈：ionic + cordova。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责团队后台系统的编写调试修改维护，搭建整体的后台项目，使用 Angular4 TypeScript ES6。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责贷超产品编写和后台编写，负责全部对应的后台系统。技术栈：Vue + iview。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. MyLoan APP 是巴西地区的现金贷 APP，使用多语言国际化以及 cordova 打包安卓应用，谷歌商店切换至巴西区可下载。</div></div>
              <div className="row"><div className="skill">1. MyLoan APP 是巴西地区的现金贷 APP，使用多语言国际化以及 cordova 打包安卓应用。</div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Angular4 + AntDesign + TypeScript + cordova</span></div>
              <div className="exprience-title title">东软集团股份有限公司<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2016.10 - 2018.04</span></div>
              <div className="expInfo">熙康事业部 &nbsp; 睿云产品部 &nbsp; 互联网教育 &nbsp; 互联网医疗</div>
              <div className="row"><div className="dot" /><div className="skill">负责东软睿云 <a href="http://ry.com.cn">http://ry.com.cn</a> 的前端页面制作及实现 js 交互。使用 Bootstrap 开发睿云网对应的移动端网站，完成响应式布局，通过 ajax 调用 JAVA API 接口，增删改查数据。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责熙康医疗系统的软件 APP 编写和维护，及全套后台的维护，使用 jQuery、Ejs、Echart 等技术。</div></div>
              <div className="row"><div className="dot" /><div className="skill">负责伴考云数据的前端页面展示及调试，使用 Echart、highchart 等技术，实现动态的数据展示及用户交互。</div></div>
              <div className="expTitle">项目经验</div>
              <div className="row"><div className="skill">1. 睿云网 <a href="http://ry.com.cn">http://www.ry.com.cn</a> <br />账号：stu01@ry.com.cn 密码：123456</div></div>
              <div className="row"><div className="skill">2. 教师报告、伴考云数据等页面 <a href="http://m.diaoqii.xyz/">http://m.diaoqii.xyz/</a></div></div>
              <div className="skill-total">技术栈：<span style={{'color': '#AAA'}}>Vue + Element + Vuex + Echart</span></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">项目经历</div>
              <div className="exprience-title title">淘租公租赁购物平台<span style={{'color': '#AAA','float': 'right'}}> &nbsp; &nbsp; &nbsp; &nbsp; 2018.05 - 2019.05</span></div>
              <div className="row"> <div className="dot" /><div className="skill">开发工具:Eclipse、MySQL、Tomcat 及 jdk1.8、windows7、Linux</div></div>
              <div className="row"> <div className="dot" /><div className="skill">主要技术:Spring+SpringMVC+Mybatis、JSP、jQuery、KindEditor、CSS+DIV、Maven、SVN、Nginx、Redis</div></div>
              <div className="row"> <div className="dot" /><div className="skill">项目简介:琴湖租赁购物平台是为学生提供的一站式设备信用免押租赁平台，以学生常用设备免押租赁为起点，覆盖数码科技、小型家电、旅游户外、工程机械、教科书及实验器材等产品，方便学生的校园生活。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">1.后台管理系统:管理商品、订单、类目、商品规格属性、用户管理等功能。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2.前台系统:用户可以在前台系统中进行注册、登录、浏览商品、首页、下单等操作。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2.前台系统:用户可以在前台系统中进行注册、登录、浏览商品、首页、下单等操作。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">3.搜索系统:提供商品的搜索功能。</div></div>
            </div>
          </div>

          <div className="item item-exprience">
            <div className="content">
              <div className="expTitle">实践及项目经验</div>
              <div className="exprience-title title">基于多域融合的复合维度信息传输认证方法<span className="t863">(国家 863 项目)</span></div>
              <div className="row"> <div className="dot" /><div className="skill">项目简介:面向无人机下行数据链通信，差分跳频(DFH)技术与常规数字调制技术结合，构建实现复合维度信息传输方法。并且完成对无人机下行数据链的认证系统进行设计，采用 Hash 函数和 DES 加密算法相结合的方式完成无人机数据认证。</div></div>
              <div className="row"> <div className="dot" /><div className="skill">开发工具:Matlab2015、VS2010</div></div>
              <div className="row"> <div className="dot" /><div className="skill">项目角色:项目组骨干成员</div></div>
              <div className="row"><div className="skill">项目责任:</div></div>
              <div className="row"> <div className="dot" /><div className="skill">1.负责完成实现基于差分跳频复合维度的 FH-DFH 传输方法;</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2.参与数据认证部分设计，负责 DES 算法对数据进行加密实现</div></div>
              <div className="row"> <div className="dot" /><div className="skill">3.负责复合维度传输系统抗干扰、抗截获性能测试、改进系统提高通信过程中系统可靠性和有效性;</div></div>
              <div className="row"> <div className="dot" /><div className="skill">4.负责模拟无人机下行遥测链路应用场景，完成搭建软件仿真验证系统。改变系统工作参数将仿真测试结果在 GUI 界面展示。完成 GUI 界面的设计、调试。</div></div>
            </div>
          </div>

          <div className="item item-person">
            <div className="content">
              <div className="exprience-title title">个人奖励</div>
              <div className="row"> <div className="dot" /><div className="skill">2015~2016 &nbsp; 获校二等奖学金</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2014~2015 &nbsp; 获校“优秀团干部”称号</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2015~2016 &nbsp; 获校三等奖学金</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2016~2017 &nbsp; 获“优秀志愿者”称号</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2017~2018 &nbsp; 获校二等奖学金</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2018~2019 &nbsp; 获第十三届中国研究生电子设计大赛二等奖</div></div>
              <div className="row"> <div className="dot" /><div className="skill">2018~2019 &nbsp; 获全国研究生数学建模大赛二等奖</div></div>
              <div className="exprience-title title">自我评价</div>
              <div className="remark">本人乐观坦率真诚，积极向上，开朗自信心态良好。做事认真仔细而有耐心，自主学习能力强，具有钻研精神和坚忍不拔的毅力，勇于接受挑战。具备良好的沟通协调和团队协作能力和优秀的分析问题，以及独立解决问题的能力，有强烈的责任心和积极主动的工作态度。爱好跑步、打羽毛球、旅游、写手账读书等</div>
            </div>
          </div>
      </div>
    )
  }
}
export default DqJianLi