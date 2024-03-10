import { useEffect } from "react";
import DivLeft from "./DivLeft";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/post/postSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { Audio } from "react-loader-spinner";
import DivRight from "./DivRight";

const DashboardComponent = () => {
  const dispatch = useDispatch();

  const { posts, hasMore } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  const postItems = posts.map((onePost, index) => (
    <>
      <Post {...onePost} index={index} />
    </>
  ));

  return (
    <div className="flex justify-center m-auto bg-slate-900 mt-14 min-h-screen">
      <div className="left hidden md:block w-1/4 sticky h-full top-14 p-2 text-white">
        <DivLeft />
      </div>

      <div className="middle md:w-1/2 text-white">
        <InfiniteScroll
          dataLength={posts.length}
          next={() => dispatch(fetchPosts())}
          hasMore={hasMore}
          loader={
            <div className="py-6 px-24">
              <Audio
                heigth="500"
                width="500"
                color="grey"
                ariaLabel="loading"
              />
            </div>
          }
        >
          {postItems}
        </InfiniteScroll>
      </div>

      <div className="right hidden md:block w-1/4 sticky top-14 p-1 h-full text-white">
        <DivRight />
      </div>
    </div>
  );
};

export default DashboardComponent;
