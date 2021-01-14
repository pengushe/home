import './App.css';
const br = "/n";
const youshi = () => {
  return (
    //<!-- 选择我们有什么优势  -->
    <div class="other-container contain4" id="service">
      <div class="container">
        <h2>选择我们有什么优势？</h2>
        <div class="choose-wrap clearfix">
          <div class="icon-box fl">
            <i class="fa fa-handshake-o"></i>
          </div>
          <p class="fl">详细的售前咨询
							{br}完善的售后保障</p>
              <div class="choose-list col-md-6 col-xs-6">
						<div class="icon-box fl">
							<i class="fa fa-edit"></i>
						</div>
						<p class="fl">设计风格别致新颖
							{br}充满青春活力</p>
					</div>
        </div>
      </div>
    </div>
  );
}
export default youshi;