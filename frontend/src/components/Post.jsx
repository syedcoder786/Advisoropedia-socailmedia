const Post = ({ user, title, img_url }) => {
  return (
    <div className="my-2">
      <div className="md:w-10/12 max-sm:mx-2 m-auto rounded-lg bg-neutral-700">
        <div className="top-post p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="w-12 h-12 rounded-full"
                alt=""
                src={user.profile_url}
              />

              <div>
                <h1 className="text-base font-semibold ">
                  <span className="hover:underline hover:cursor-pointer">
                    {user.name}
                  </span>
                </h1>
                {/* <h3 className="text-xs"> */}
                {/* 1 d · ago */}
                {/* <Moment fromNow ago> */}
                {/* "post.createdAt" */}
                {/* </Moment> */}
                {/* <span> · ago</span> */}
                {/* </h3> */}
              </div>
            </div>
            <h1 className="text-base select-none px-3 py-2 rounded-full hover:bg-slate-600 cursor-pointer">
              •••
            </h1>
          </div>
          <h1 className="top-text p-1 mt-1 text-sm">{title}</h1>
        </div>

        <img src={img_url} alt="" className="w-full" />

        <div className="down-post">
          <div className="flex justify-between items-center px-3 my-2">
            <div className="flex items-center gap-1 h-5">
              <img
                className="w-5 h-5 rounded-full"
                alt=""
                src="https://www.freepnglogos.com/uploads/like-png/facebook-like-1.png"
              />
              <h1 className="top-text text-sm pb-1">4</h1>
            </div>
            <div style={{ marginLeft: "auto" }} className="h-5">
              <h1 className="top-text text-sm">1 comment</h1>
            </div>
          </div>

          <hr
            className="m-auto bg-gray-500 border-0 h-px"
            style={{ width: "96%" }}
          />

          <div className="flex justify-center items-center px-3 py-1">
            <div
              className="w-1/2 flex gap-2 items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-600"
              style={{ userSelect: "none" }}
            >
              <img
                className="w-5"
                alt=""
                src={"https://pngimg.com/uploads/like/small/like_PNG85.png"}
              />
              <h1 className="text-base  text-zinc-400 font-bold">Like</h1>
            </div>

            <div
              className="w-1/2 flex gap-2 items-center justify-center p-2 rounded cursor-pointer hover:bg-gray-500"
              style={{ userSelect: "none" }}
            >
              <img
                className="w-6"
                alt=""
                src="https://www.pngall.com/wp-content/uploads/8/Comment-Transparent.png"
              />
              <h1 className="text-base text-zinc-400 font-bold">Comment</h1>
            </div>
          </div>
          <hr
            className="m-auto bg-gray-500 border-0 h-px"
            style={{ width: "96%" }}
          />

          <div className="comment">
            {/* display comments */}

            <div className="flex gap-2 p-2 px-3">
              <img
                className="w-8 h-8 rounded-full"
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LLUgQAMloUXhgX7DWGbva9RahuXRzbEIsw&usqp=CAU"
              />
              <div>
                <div className="bg-slate-600 p-3 py-1 rounded-2xl">
                  <h1 className="text-sm font-semibold">
                    <span className="hover:underline cursor-pointer">
                      {user.name}
                    </span>
                  </h1>
                  <p className="text-sm">Test comment</p>
                </div>
                {/* <h3 className="text-xs pl-3 pt-1"> */}
                {/* 1 d · ago */}
                {/* <Moment fromNow ago>{oneComment.time}</Moment> */}
                {/* <span> · ago</span> */}
                {/* </h3> */}
              </div>
            </div>

            {/* write comment */}
            <div className="flex gap-2 p-2 px-3 items-center">
              <img
                className="w-8 h-8 rounded-full"
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4LLUgQAMloUXhgX7DWGbva9RahuXRzbEIsw&usqp=CAU"
              />
              <input
                className="rounded-full p-2 px-3 outline-none w-full h-9 text-sm text-black"
                placeholder="Write a comment..."
                // value={comment}
                // onChange={(e) => setComment(e.target.value)}
                // onKeyDown={onComment}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
