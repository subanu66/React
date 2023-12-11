import FunctionalCom from "./Component/FunctionalCom.js";
import ClassComponent from "./Component/ClassComponent.js";
import OneExport from "./Component/OneExport.js";
export default function App()
{
  return(
    <div>
      <FunctionalCom/>
      <ClassComponent/>
      <OneExport/>
    </div>
  )
}