import { useState, useMemo } from "react";
import "./talents-list.scss";

const filters = [
  "Finance & Accounting",
  "Legal",
  "Administrative & Customer Support",
  "Technology",
  "Marketing & Creative",
];

const candidates = [
  {
    sphere: "Finance & Accounting",
    title: "Mechanical Design Engineer 1",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "1",
  },
  {
    sphere: "Finance & Accounting",
    title: "Mechanical Design Engineer 2",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "2",
  },
  {
    sphere: "Finance & Accounting",
    title: "Mechanical Design Engineer 3",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "3",
  },
  {
    sphere: "Finance & Accounting",
    title: "Mechanical Design Engineer 4",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "4",
  },
  {
    sphere: "Finance & Accounting",
    title: "Mechanical Design Engineer 5",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "5",
  },
  {
    sphere: "Legal",
    title: "Legal 1",
    workTimeType: "Full time",
    location: "Irvine,  California,  USA",
    days: "0",
    price: "800$",
    id: "6",
  },
];

export const TalentsList = ({ isHide }) => {
  const [activeTitle, setActiveTitle] = useState(filters[0]);

  const filteredCandidates = useMemo(() => {
    const result = candidates
      .filter((candidate) => candidate.sphere === activeTitle)
      .map((candidate) => (
        <div className="candidate" key={candidate.id}>
          <div className="image"></div>
          <div className="info-block">
            <div className="info-header">
              <p className="info-title">{candidate.title}</p>{" "}
              <p className="info-price">{candidate.price}</p>
            </div>
            <p className="info-work-type">{candidate.workTimeType}</p>
            <p className="info-footer">
              <span>{candidate.location}</span>
              <span>{candidate.days} days ago</span>
            </p>
          </div>
          <div className="price">{candidate.price}</div>
        </div>
      ));

    return result.length ? result : "No result";
  }, [activeTitle, candidates]);

  return (
    <div className={`${isHide ? "hide-block talents-list" : "talents-list"}`}>
      <div className="filters">
        {filters.map((item, index) => (
          <div key={item}>
            <input
              type="radio"
              id={`${item}-radio`}
              name="talents-radio"
              value={item}
              checked={item === activeTitle}
              onChange={() => setActiveTitle(item)}
            />
            <label htmlFor={`${item}-radio`}>{item}</label>
          </div>
        ))}
      </div>
      <div className="candidates-list">
        <h3 className="title">{activeTitle}</h3>
        <div className="candidates-block">{filteredCandidates}</div>
      </div>
    </div>
  );
};
