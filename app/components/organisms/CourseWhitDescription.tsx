import "rsuite/dist/rsuite.min.css";
import { Button, Popover, Whisper, Tooltip } from "rsuite";

import { courseData, responsive } from "@/public/data/dummydata";
import CourseCard from "./CourseCard";
import CouseContent from "./CouseContent";
import useCart from "@/app/Hooks/useCart";

const CourseComponent = ({ ...item }) => {
  const screenSize = window.document.documentElement.scrollWidth;
  const placement =
    screenSize <= 600 ? "bottom" : "autoHorizontal";


  return (
    <>
      <div>
        <Whisper
          trigger="hover"
          speaker={
            <Popover arrow={true}>
              <CouseContent />
            </Popover>
          }
          placement={placement}
          enterable
          controlId="control-id-hover-enterable"
        >
          <div>
            <CourseCard
              name={item?.name}
              imageurl={item?.imageurl}
              price={item?.price}
              author={item?.author}
              description={item?.description}
              classification={item?.classification}
            />
          </div>
        </Whisper>
      </div>
    </>
  );
};

export default CourseComponent;
