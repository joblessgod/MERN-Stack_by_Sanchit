import { RiVerifiedBadgeFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdAddTask } from "react-icons/md";


export function CompletedIcon() {
  return (
    <span className="Completed-StatusBox">
      <RiVerifiedBadgeFill />
    </span>
  );
}

export function PendingIcon() {
  return (
    <span className="Pending-StatusBox">
      <ImCross />
    </span>
  );
}
export function AddTask() {
  return (
    <span>
      <MdAddTask />
    </span>
  );
}
