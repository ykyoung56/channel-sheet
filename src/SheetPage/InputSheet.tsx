interface propType {
  menu: number;
}

export default function InputSheet(props: propType) {
  return (
    <span className={props.menu === 0 ? "show" : "hide"}>Input Sheet</span>
  );
}
