/*================****==================
Title: Folder Tree
Author: Hieu Nguyen Minh
Desc: Folder Tree Component
================****==================*/

import React, { useState } from "react";
import "../assets/styles/c_folder_tree.css";
import { FaToolbox, FaTools } from "react-icons/fa";

const TreeNode = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const isLeafNode = !node.children || node.children.length === 0;

  return (
    <ul className="root">
      <li className="truncate">
        {isLeafNode ? null : (
          <div className="button-container">
            <button onClick={handleToggle}>{expanded ? "-" : "+"}</button>
          </div>
        )}
        <li>
          <div className="connection">
            <div className="line"></div>
            {isLeafNode ? <FaTools /> : <FaToolbox />}
            <div className="desc">{node.ASSETDESC}</div>
          </div>
        </li>
      </li>
      {expanded && !isLeafNode && (
        <ul className="child">
          {node.children.map((childNode) => (
            <TreeNode key={childNode.ASSETID} node={childNode} />
          ))}
        </ul>
      )}
    </ul>
  );
};

const TreeView = ({ data }) => {
  return (
    <div className="treeview">
      {data.parents.map((parentNode) => (
        <TreeNode key={parentNode.ASSETID} node={parentNode} />
      ))}
    </div>
  );
};

// Sử dụng TreeView trong ứng dụng
export const FolderTree = () => {
  const treeData = {
    parents: [
      {
        ASSETID: "EVNDTNC",
        ASSETID_PARENT: null,
        ASSETID_ORG: "DTNC",
        ASSETDESC: "Thiết bị phục vụ nghiên cứu, đào tạo",
        children: [
          {
            ASSETID: "GAVU.22651",
            ASSETID_PARENT: "EVNDTNC",
            ASSETID_ORG: "DTNC.1",
            ASSETDESC: "Bàn thực hành thí nghiệm rơ le",
            children: [],
          },
          {
            ASSETID: "GAVU.22652",
            ASSETID_PARENT: "EVNDTNC",
            ASSETID_ORG: "DTNC.2",
            ASSETDESC: "Mô hình đào tạo thực hành tự động",
            children: [],
          },
        ],
      },
      {
        ASSETID: "GAVU.14467",
        ASSETID_PARENT: null,
        ASSETID_ORG: "AV.XD",
        ASSETDESC: "PHẦN XÂY DỰNG",
        children: [
          {
            ASSETID: "GAVU.14468",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.HC",
            ASSETDESC: "Hồ chứa",
            children: [
              {
                ASSETID: "GAVU.22041",
                ASSETID_PARENT: "GAVU.14468",
                ASSETID_ORG: "AV.XD.HC.01",
                ASSETDESC: "Hồ A Vương",
                children: [],
              },
            ],
          },
          {
            ASSETID: "GAVU.14469",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.HTTPQT",
            ASSETDESC: "Hệ thống thiết bị quan trắc",
            children: [],
          },
          {
            ASSETID: "GAVU.14470",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.DT",
            ASSETDESC: "Đập tràn",
            children: [
              {
                ASSETID: "GAVU.14471",
                ASSETID_PARENT: "GAVU.14470",
                ASSETID_ORG: "AV.XD.DT.01",
                ASSETDESC: "Thân đập",
                children: [],
              },
              {
                ASSETID: "GAVU.14472",
                ASSETID_PARENT: "GAVU.14470",
                ASSETID_ORG: "AV.XD.DT.02",
                ASSETDESC: "Công trình tiêu năng",
                children: [],
              },
              {
                ASSETID: "GAVU.14473",
                ASSETID_PARENT: "GAVU.14470",
                ASSETID_ORG: "AV.XD.DT.03",
                ASSETDESC: "Cửa xả tràn",
                children: [],
              },
              {
                ASSETID: "GAVU.14474",
                ASSETID_PARENT: "GAVU.14470",
                ASSETID_ORG: "AV.XD.DT.04",
                ASSETDESC: "Nhà vận hành đập",
                children: [],
              },
            ],
          },
          {
            ASSETID: "GAVU.14475",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.CNN",
            ASSETDESC: "Cửa nhận nước",
            children: [
              {
                ASSETID: "GAVU.14476",
                ASSETID_PARENT: "GAVU.14475",
                ASSETID_ORG: "AV.XD.CNN.01",
                ASSETDESC: "Cầu công tác",
                children: [],
              },
              {
                ASSETID: "GAVU.14477",
                ASSETID_PARENT: "GAVU.14475",
                ASSETID_ORG: "AV.XD.CNN.02",
                ASSETDESC: "Nhà vận hành cửa nhận nước",
                children: [],
              },
            ],
          },
          {
            ASSETID: "GAVU.14478",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.DHDN",
            ASSETDESC: "Đường hầm dẫn nước",
            children: [],
          },
          {
            ASSETID: "GAVU.14479",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.TDA",
            ASSETDESC: "Tháp điều áp",
            children: [],
          },
          {
            ASSETID: "GAVU.14480",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.NV",
            ASSETDESC: "Nhà van",
            children: [],
          },
          {
            ASSETID: "GAVU.14481",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.T220",
            ASSETDESC: "Trạm 220kV",
            children: [],
          },
          {
            ASSETID: "GAVU.14482",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.DOAL",
            ASSETDESC: "Đường ống áp lực",
            children: [],
          },
          {
            ASSETID: "GAVU.14483",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.NM",
            ASSETDESC: "Nhà máy Thủy điện A Vương",
            children: [
              {
                ASSETID: "GAVU.14484",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.01",
                ASSETDESC: "Cao trình 87",
                children: [],
              },
              {
                ASSETID: "GAVU.14485",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.02",
                ASSETDESC: "Cao trình 80",
                children: [],
              },
              {
                ASSETID: "GAVU.14486",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.03",
                ASSETDESC: "Cao trình 74",
                children: [],
              },
              {
                ASSETID: "GAVU.14487",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.04",
                ASSETDESC: "Cao trình 62",
                children: [],
              },
              {
                ASSETID: "GAVU.14488",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.05",
                ASSETDESC: "Cao trình 57",
                children: [],
              },
              {
                ASSETID: "GAVU.14489",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.06",
                ASSETDESC: "Cao trình 52.5",
                children: [],
              },
              {
                ASSETID: "GAVU.14490",
                ASSETID_PARENT: "GAVU.14483",
                ASSETID_ORG: "AV.XD.NM.07",
                ASSETDESC: "Cao trình 46.7",
                children: [],
              },
            ],
          },
          {
            ASSETID: "GAVU.14491",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.KX",
            ASSETDESC: "Kênh xả hạ lưu",
            children: [],
          },
          {
            ASSETID: "GAVU.14492",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.KVT",
            ASSETDESC: "Kho vật tư lắp máy",
            children: [],
          },
          {
            ASSETID: "GAVU.14493",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.NDH",
            ASSETDESC: "Nhà điều hành ca kíp",
            children: [],
          },
          {
            ASSETID: "GAVU.14494",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.NNC",
            ASSETDESC: "Khu nhà nghỉ ca",
            children: [],
          },
          {
            ASSETID: "GAVU.14495",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.NBA",
            ASSETDESC: "Khu nhà ban A",
            children: [],
          },
          {
            ASSETID: "GAVU.14496",
            ASSETID_PARENT: "GAVU.14467",
            ASSETID_ORG: "AV.XD.DGTCT",
            ASSETDESC: "Đường giao thông công trình A Vương",
            children: [
              {
                ASSETID: "GAVU.14497",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.01",
                ASSETDESC: "Đường từ ngã 3 A Sờ vào đập tràn",
                children: [],
              },
              {
                ASSETID: "GAVU.14498",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.02",
                ASSETDESC: "Đường từ ngã 3 đường Hồ Chí Minh vào Nhà máy",
                children: [],
              },
              {
                ASSETID: "GAVU.14499",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.03",
                ASSETDESC: "Đường từ Nhà máy vào Nhà nghỉ ca",
                children: [],
              },
              {
                ASSETID: "GAVU.14500",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.04",
                ASSETDESC: "Đường từ ngã 3 khu Nhà máy vào Nhà máy",
                children: [],
              },
              {
                ASSETID: "GAVU.14501",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.05",
                ASSETDESC: "Đường từ ngã 3 khu Nhà máy vào ngã 4 trạm 220kV",
                children: [],
              },
              {
                ASSETID: "GAVU.14502",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.06",
                ASSETDESC: "Đường từ ngã 4 trạm 220kV vào Nhà van",
                children: [],
              },
              {
                ASSETID: "GAVU.14503",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.07",
                ASSETDESC:
                  "Đường từ ngã 4 trạm 220kV vào tháp điều áp và ngách 2",
                children: [],
              },
              {
                ASSETID: "GAVU.14504",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.08",
                ASSETDESC: "Đường từ ngã 4 trạm 220kV vào trạm 220kV",
                children: [],
              },
              {
                ASSETID: "GAVU.14505",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.09",
                ASSETDESC: "Đường A1",
                children: [],
              },
              {
                ASSETID: "GAVU.14506",
                ASSETID_PARENT: "GAVU.14496",
                ASSETID_ORG: "AV.XD.DGTCT.10",
                ASSETDESC: "Các công trình giao thông khác",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  };

  return <TreeView data={treeData} />;
};
