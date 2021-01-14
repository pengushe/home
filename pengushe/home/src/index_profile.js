import React from 'react';
import ReactDom from 'react-dom';
import Profile from './components/Single_Profile';
import Image1 from './profile_image/donggua.png';
import Image2 from './profile_image/duizhang.png';
import Image3 from './profile_image/muyi.png';
import Image4 from './profile_image/tiehanhan.png';
import Image5 from './profile_image/youyou.png';
import Image6 from './profile_image/xunyou.jpg';
import Image7 from './profile_image/xiahei.jpg';
import Youshi from './components/Youshi';

const App = () => {
  return (
    <div>
      <Youshi />
      <div className="team-container contain5" id="team">
        <div className="container">
          <div className="title-wrap">
            <h2>设计团队</h2>
            <p>Design team</p>
          </div>
          <div className="designer-wrap">
            <Profile author="冬瓜"
              image={Image1}
              description="设计师" />

            <Profile author="队长"
              image={Image2}
              description="网页设计和项目管理带头人，为您提供高质量的全程跟踪以及后续服务" />

            <Profile author="幽幽"
              image={Image5}
              description="团队创始人，提供高质量的咨询，项目跟踪，售后以及反馈服务" />

            <Profile author="木易"
              image={Image3}
              description="深度文案让内涵得以延续，高质量视频让视觉有全新的体验，而为您提供的是二者完美的结合的体验" />

            <Profile author="铁憨憨"
              image={Image4}
              description="网页设计负责人，用心为您提供满意的网站页面设计制作服务以及网站建设策" />

            <Profile author="夏黑"
              image={Image7}
              description="平面设计师带头人，为你提供个性话的服务，为你的企业出谋划策" />

            <Profile author="寻忧"
              image={Image6}
              description="平面设计师，勤奋好学，努力为您探索未来无限的可能" />
          </div>
        </div>
      </div>
    </div>
  );
}
ReactDom.render(<App />, document.getElementById('root'));

