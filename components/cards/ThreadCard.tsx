import Image from "next/image";
import Link from "next/link";
import Interactions from "../shared/Interactions";

interface Props {
  id: string;
  currentUserId: string;
  userId: {
    _id: string;
    name: string;
    image: string;
  };
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  likes: string[];
  community: {
    name: string;
    image: string;
    id: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  userId,
  parentId,
  content,
  author,
  likes,
  community,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile Image"
                fill
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>

            <div className="relative mt-2 w-0.5 grow rounded-full bg-neutral-800" />
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2">{content}</p>

            <Interactions
              isComment={isComment}
              likes={likes}
              id={id}
              comments={comments}
              userId={userId}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;

//TODO: Add Like, share and repost functionality to the project.
