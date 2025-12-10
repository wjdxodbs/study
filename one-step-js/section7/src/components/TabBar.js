const TabBar = ({ initialState, onClick }) => {
  this.state = initialState;
  this.onClick = onClick;

  console.log(this);

  this.template = () => {
    return `
      <div class="tab-bar">
        <a href="/"><div class="clicked">전체</div></a>
        <a href="/"><div>펭퀸</div></a>
        <a href="/"><div>코알라</div></a>
        <a href="/"><div>판다</div></a>
      </div>
    `;
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };
};

export default TabBar;
