import Image from "next/image";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type Props = {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
};

const BlogCard = ({ blog }: Props) => {
  return (
    <div className="bg-white rounded-md overflow-hidden">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-full"
        />

        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BiCalendar className="text-rose-500" />
              <span className="text-sm text-gray-700">{blog.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BiMessage className="text-rose-500" />
              <span className="text-sm text-gray-700">{blog.comment}</span>
            </div>
          </div>
          <h1 className="mt-6 font-bold mb-2 text-gray-700 text-lg hover:underline cursor-pointer">
            {blog.title}
          </h1>
          <p className="text-gray-500 text-base">{blog.shortDescription}</p>
          <div className=" mt-4 flex items-center space-x-2 hover:text-red-500 cursor-pointer">
            <span className="font-bold">Read More</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
