import TabBar from "./components/TabBar";
import Content from "./components/Content";
import request from "./components/api";

export default function App($app) {
  this.state = {
    currentTab: "all",
    photos: [],
  };

  const tabBar = new TabBar({
    initialState: "",
    onClick: async (tab) => {
      this.setState({
        ...this.state,
        currentTab: tab,
        photos: await request(),
      });
    },
  });
  const content = new Content({
    initialState: this.state.photos,
  });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  const init = async () => {
    this.setState({
      ...this.state,
      photos: await request(),
    });
  };

  init();
}
