import { BlogPost } from "../../../../types";

type Props = {
    post: BlogPost;
};

const BlogCard = ({ post }: Props) => {
      const WORD_LIMIT = 40;
      const shortDesc = post.excerpt?.slice(0, WORD_LIMIT) + "..."
    return (
        <div className="bg-white  shadow-md hover:shadow-xl transition overflow-hidden">
            {/* Image */}
            <div className="h-52 w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="px-3 pb-3 relative ">
                {/* Date */}
                <div className="flex gap-x-3">
                <div className=" px-2 py-1 text-center mt-5.5">
                    <p className="text-2xl font-bold leading-none">{post.date.day}</p>
                    <p className="text-lg font-semibold text-gray-500">{post.date.month}</p>
                    <p className="text-sm text-gray-500">{post.date.year}</p>
                </div>
                <div>
                    <h3 className="mt-6 font-semibold  leading-snug line-clamp-2">
                        {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                        Posted by: <span className="font-medium">{post.author}</span>
                    </p>

                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        {shortDesc}
                    </p>
                </div>
                </div>

                <div className="w-full justify-end items-end flex" >
                <button className="mt-5 btn-primary text-sm font-medium  transition">
                    Read More
                </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
