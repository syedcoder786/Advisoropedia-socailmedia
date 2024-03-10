import { useSelector } from "react-redux";

const DivLeft = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {/* profile */}
      <div className="m-auto">
        <div className="h-24 bg-slate-800 cursor-pointer rounded"></div>
        <div className="mb-2">
          <img
            src={
              user?.profile_img
                ? user.profile_img
                : "https://st2.depositphotos.com/1007566/12294/v/450/depositphotos_122947692-stock-illustration-avatar-hacker-man.jpg"
            }
            alt=""
            className="w-28 h-28 m-auto rounded-full -mt-10 mb-2"
          />
          <div className="text-center">
            <p className="text-lg font-semibold">
              {user?.name ? user.name : "Name"}
            </p>
          </div>
        </div>
        <div className="rounded m-1 p-2" style={{ backgroundColor: "#303338" }}>
          <p className="text-center mb-1 text-lg font-semibold">
            Notifications
          </p>
          <div className="h-36 overflow-y-auto notilist">
            <div className="text-center p-2 w-11/12 m-auto rounded cursor-pointer my-2 notification hover:scale-105">
              John Doe added a post.
            </div>
            <div className="text-center p-2 w-11/12 m-auto rounded cursor-pointer my-2 notification hover:scale-105">
              John Doe added a post.
            </div>
            <div className="text-center p-2 w-11/12 m-auto rounded cursor-pointer my-2 notification hover:scale-105">
              John Doe added a post.
            </div>

            <div className="text-center p-2 w-11/12 m-auto rounded cursor-pointer my-2 notification hover:scale-105">
              John Doe added a post.
            </div>
          </div>
        </div>

        <div className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded m-1 cursor-pointer hover:scale-105">
          <img
            src="https://img.freepik.com/premium-photo/hacker-desktop-wallpaper-cyber-background_910608-3038.jpg"
            alt=""
            className="w-2/4 rounded m-auto"
          />
          <p className="text-center text-gray-400 font-medium text-base">
            Feel As Anonymous
          </p>
          <p className="text-center text-gray-400 font-medium text-base">
            Right To Privacy
          </p>
        </div>
      </div>
    </>
  );
};

export default DivLeft;
