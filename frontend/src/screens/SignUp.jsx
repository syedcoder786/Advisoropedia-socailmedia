import UserSignUp from "../components/UserSignUp";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
      <aside className="hidden md:block md:w-2/4 min-h-screen bg-cover bg-[url('https://media.istockphoto.com/id/1141304089/vector/global-network-connection-concept-big-data-visualization-social-network-communication-in-the.jpg?s=612x612&w=0&k=20&c=XoQRixTQExBgu3CKeSzTleQSbasbpBkDs3S3q6BByOM=')]">
        <div className="absolute min-h-screen w-1/2 bg-black opacity-60"></div>

        <div className="relative z-10">
          <img
            src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/Website-logo-1.png"
            className="w-72 m-8 "
          />
          <div className="m-6 p-2">
            <img
              src="https://toppng.com/uploads/thumbnail/quotation-marks-blue-quotation-marks-11562960630snhp2i1ei7.png"
              className="w-10"
            />
            <div className="m-2 text-white">
              <h1 className="text-xl font-bold z-10 my-2">
                Welcome to our social media platform
              </h1>

              <div className="space-y-1 italic">
                <p>Where connections come to life and communities thrive.</p>
                <p>
                  Explore a world of endless possibilities as you connect with
                  friends, family, and like-minded individuals from across the
                  globe.
                </p>
                <p>
                  Share your thoughts, moments, and experiences through posts,
                  photos, and videos, sparking conversations that matter.
                </p>
                <p>
                  Discover new interests, follow your passions, and stay
                  up-to-date with the latest trends and news from around the
                  world.
                </p>
                <p>
                  Engage with diverse communities, join groups, and participate
                  in events tailored to your interests, creating meaningful
                  connections along the way.
                </p>
                <p>
                  Experience the power of networking, collaboration, and
                  empowerment as you embark on your journey in our vibrant
                  social media community.
                </p>
                <p>
                  Join us today and let's build a brighter, more connected
                  future together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <section className="md:w-2/4 min-h-screen flex items-center ">
        <UserSignUp />
      </section>
    </div>
  );
};

export default SignUp;
