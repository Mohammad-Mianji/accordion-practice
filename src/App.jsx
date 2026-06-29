import { use, useState } from "react";
import "./Apps.css";

const tabsData = [
  {
    id: 1,
    title: "Item One",
    desc: "This is the desc for first item",
  },
  {
    id: 2,
    title: "Item Two",
    desc: "This is the desc for SECOND item",
  },
  {
    id: 3,
    title: "Item Three",
    desc: "This is the desc for THIRD item 👑",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(2);
  const [toggleTabs, setToggleTabs] = useState(true);

  const changeTab = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="close-tab">
        <button onClick={() => setToggleTabs(!toggleTabs)}>
          {toggleTabs ? "Close The Panel" : "Show Panel"}
        </button>
      </div>
      {toggleTabs ? (
        <div className="tab">
          <div className="tab_header">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => changeTab(tab.id)}
                className={activeTab === tab.id ? "active" : ""}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="tab_desc">{tabsData[activeTab - 1].desc}</div>
        </div>
      ) : (
        <p>Panel Closed</p>
      )}
    </div>
  );
}

export default App;
