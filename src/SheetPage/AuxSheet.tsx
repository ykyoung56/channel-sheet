interface propType {
  menu: number;
}

export default function AuxSheet(props: propType) {
  return <span className={props.menu === 1 ? "show" : "hide"}>Aux Sheet</span>;
}
