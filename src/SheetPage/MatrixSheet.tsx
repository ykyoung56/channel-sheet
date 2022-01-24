import "../App.css";

interface propType {
  menu: number;
}

export default function MatrixSheet(props: propType) {
  return (
    <span className={props.menu === 2 ? "show" : "hide"}>Matrix Sheet</span>
  );
}
