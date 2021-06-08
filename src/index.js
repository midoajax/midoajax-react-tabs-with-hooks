import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, Content } from "./tab";
import "./styles.css";

function App() {
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          Content1
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Content2
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <h1>Content 1</h1>
        </Content>
        <Content active={active === 1}>
          <h1>Content 2</h1>
        </Content>
      </>
      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
