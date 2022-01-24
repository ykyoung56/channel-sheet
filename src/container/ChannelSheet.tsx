import InputSheet from "../SheetPage/InputSheet";
import AuxSheet from "../SheetPage/AuxSheet";
import MatrixSheet from "../SheetPage/MatrixSheet";

interface propType {
  menu: number;
}

export default function ChannelSheet(props: propType) {
  return (
    <>
      <InputSheet menu={props.menu} />
      <AuxSheet menu={props.menu} />
      <MatrixSheet menu={props.menu} />
    </>
  );
}
