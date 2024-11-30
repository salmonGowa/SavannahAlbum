const LandingPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-indigo-600">
            Welcome to Savannah Albums
          </h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            A modern, user-friendly app to explore and manage albums, users, and
            photos. View user profiles, explore albums, and edit photo details
            seamlessly.
          </p>
          <p className="mt-4 text-gray-600">
            Log in to unlock all features and dive into a seamless album
            management experience!
          </p>
          <a
            href="/login"
            className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
