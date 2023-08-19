import { FC } from "react";
import { Comment, Report, Share } from "../Icons";
import { Like } from "../Icons/Icon";
import Skeleton from "react-loading-skeleton";
interface PostFunctionsProps {
  extraClass: string;
}
const Elements = [
  <Like
    key={`icon_Like`}
    className="text-secondary-30"
  />,
  <Comment
    key={`icon_Comment`}
    className="text-secondary-30"
  />,
  <Report
    key={`icon_Report`}
    className="text-secondary-30"
  />,
  <Share
    key={`icon_Share`}
    className="text-secondary-30"
  />,
];

const PostFuntions: FC<PostFunctionsProps> = ({ extraClass }) => {
  return (
    <section className={`md:w-10 w-full flex-shrink-0 min-w-[220px] bg-dark-30 rounded-xl h-fit p-2 ${extraClass}`}>
      <ul className="md1:flex md1:items-center gap-5 flex-wrap ba1:justify-evenly">
        {Elements.map((ele, i) => (
          <li
            key={`postFunctionLoading__${i}`}
            className="flex md1:flex-col flex-1 gap-4 md1:gap-1.5 md:mb-3 items-center cursor-pointer md1:text-xs">
            <span className="p-1.5 bg-dark-40 rounded-lg ">{ele}</span>
            <p className="w-full">
              <Skeleton className="w-full rounded-lg" />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default PostFuntions;
