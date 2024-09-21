import { useState } from "react";

export const data = [
  {
    label: "Home",
    to: "/home",
    children: [],
  },
  {
    label: "About",
    to: "/about",
    children: [
      {
        label: "Team",
        to: "/about/team",
        children: [
          {
            label: "Team Member 1",
            to: "/about/team/member1",
            children: [],
          },
          {
            label: "Team Member 2",
            to: "/about/team/member2",
            children: [],
          },
        ],
      },
      {
        label: "Mission",
        to: "/about/mission",
        children: [],
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      {
        label: "Web Development",
        to: "/services/web-development",
        children: [],
      },
      {
        label: "SEO",
        to: "/services/seo",
        children: [],
      },
    ],
  },
  {
    label: "Contact",
    to: "/contact",
    children: [],
  },
];

function Menulist({ list = [] }) {
  return (
    <ul className="menulist-container">
      {list && list.length
        ? list.map((item) => <Menuitem item={item} key={item.label} />)
        : null}
    </ul>
  );
}

function Menuitem({ item }) {
  const [display, setdisplay] = useState({});
  function handletogglechildren(label) {
    setdisplay({
      ...display,
      [label]: !display[label],
    });
  }

  return (
    <li>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handletogglechildren(item.label)}>
            {display[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      display[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}

export default function Treeview({ data = [] }) {
  return (
    <div className="treeview-container">
      <Menulist list={data} />
    </div>
  );
}
