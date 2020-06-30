import './index.scss'
import React from 'react'
import { Carousel } from 'antd-mobile';
import arrawBtm from '../../lib/image/jianLi/arraw-btm.png';
import avator from '../../lib/image/jianLi/xiesiyao.jpg';

class JianLi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientHeight: document.body.clientHeight
    }
  }
  componentDidMount() {
    document.title = '解思瑶在线简历 - JAVA开发'
  }


  render () {
    let { clientHeight } = this.state
    return (
      <div className="jianLiPage">
        <div className="item">
          <div className="content">
            <div className="title">基本信息</div>
            <div className="row"> <div className="key">姓名: </div><div className="value">解思瑶</div></div>
            <div className="row"> <div className="key">出生年月: </div><div className="value"> 1995.03</div></div>
            <div className="row"> <div className="key">学历: </div><div className="value"> 硕士研究生</div></div>
            <div className="row"> <div className="key">毕业学校: </div><div className="value"> 沈阳理工大学</div></div>
            <div className="row"> <div className="key">专业: </div><div className="value"> 电子与通信工程</div></div>
            <div className="row"> <div className="key">民族: </div><div className="value"> 汉</div></div>
            <div className="row"> <div className="key">政治面貌: </div><div className="value"> 党员</div></div>
            <div className="row"> <div className="key">现居地址: </div><div className="value"> 辽宁省沈阳市</div></div>
            <div className="row"> <div className="key">联系方式: </div><div className="value"> 15904016850</div></div>
            <div className="row"> <div className="key">电子邮箱: </div><div className="value"> siyao_shieh@163.com</div></div>
            <div className="title">教育经历</div>
            <div className="row"> <div className="">2013.09 - 2017.07 沈阳理工大学 电子信息工程 本科</div></div>
            <div className="row"> <div className="">22017.09 - 至今 沈阳理工大学 电子与通信工程 硕士</div></div>
            <img className="avator" src={avator} alt="more" />
          </div>
          {/* <div className="more-arr">
              <span>MORE</span> &nbsp; <img src={arrawBtm} alt="more" />
          </div> */}
        </div>

        <div className="item item-skill">
          <div className="content">
            <div className="title">专业技能</div>
            <div className="row"> <div className="dot" /><div className="skill">精通J2EE规范下的JSP、Servlet、JDBC、JavaBean编程</div></div>
            <div className="row"> <div className="dot" /><div className="skill">精通Java语言的使用，掌握Spring+SpringMVC+Mybatis框架下的Web应用开发</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟练使用SQL语句，有MySql等数据库的开发经验</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟悉HTML标签、js、Ajax、jQuery等Web前端开发技术</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟练使用Maven进行项目管理</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟练使用SVN、Git团队协作版本控制系统</div></div>
            <div className="row"> <div className="dot" /><div className="skill">了解Nginx反向代理和负载均衡</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟悉TCP/IP，HTTP等网络协议</div></div>
            <div className="row"> <div className="dot" /><div className="skill">熟悉相关平台windows、Linux操作系统，常用的Linux命令</div></div>
            <div className="row"> <div className="dot" /><div className="skill">精通 MATLAB 编程语言，有丰富的 MATLAB 开发项目的经验</div></div>
            <div className="row"> <div className="dot" /><div className="skill">掌握Java语言程序设计，计算机网络、MATLAB程序设计、扩频通信、信号与系统、通信原理等理论知识</div></div>
            <div className="row"> <div className="dot" /><div className="skill">具备良好的英语听说和读写能力，英语水平达到研究生六级标准</div></div>
          </div>
        </div>

        <div className="item item-exprience">
          <div className="content">
            <div className="expTitle">实践及项目经验</div>
            <div className="expInfo">研究生期间在国家级重点实验室通信与网络工程中心(CNI)工作和学习，CNI 是省级和国家级重点实验室， 承接了多个省级和国家级 863 项目。</div>
            <div className="exprience-title title">沈阳理工大学通信网络工程中心图书室管理系统</div>
            <div className="row"> <div className="dot" /><div className="skill">开发工具:Eclipse、MySQL、Tomcat 及 jdk1.8</div></div>
            <div className="row"> <div className="dot" /><div className="skill">主要技术:JavaBean、Servlet、JSP、CSS+DIV</div></div>
            <div className="row"> <div className="dot" /><div className="skill">项目简介:帮助沈阳理工大学通信网络工程中心开发了图书室管理系统，针对图书室管理的需求，根据 Java 语言的 网络运用特点，与 MySQL 数据库连接，对学生借书还书情况进行及时跟踪管理，并可对图书室图书信息进行创建、 删除、更新、查找等操作，推动图书室管理自动化。</div></div>
            <div className="row"> <div className="dot" /><div className="skill">项目责任:独立完成系统的设计，代码的编写以及系统的测试与完善。</div></div>
          </div>
        </div>

        <div className="item item-exprience">
          <div className="content">
            <div className="expTitle">实践及项目经验</div>
            <div className="exprience-title title">琴湖租赁购物平台</div>
            <div className="row"> <div className="dot" /><div className="skill">开发工具:Eclipse、MySQL、Tomcat 及 jdk1.8、windows7、Linux</div></div>
            <div className="row"> <div className="dot" /><div className="skill">主要技术:Spring+SpringMVC+Mybatis、JSP、jQuery、KindEditor、CSS+DIV、Maven、SVN、Nginx、Redis</div></div>
            <div className="row"> <div className="dot" /><div className="skill">项目简介:琴湖租赁购物平台是为学生提供的一站式设备信用免押租赁平台，以学生常用设备免押租赁为起点，覆盖数码科技、小型家电、旅游户外、工程机械、教科书及实验器材等产品，方便学生的校园生活。</div></div>
            <div className="row"> <div className="dot" /><div className="skill">1.后台管理系统:管理商品、订单、类目、商品规格属性、用户管理等功能。</div></div>
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
export default JianLi