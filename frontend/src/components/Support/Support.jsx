const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-kandlBlue">
          Kandl Support
        </h1>
        <p className="text-center text-lg mb-10">
          Need help? Our support team is here for you.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">
                How can I open a Kandl trading account?
              </h3>
              <p className="text-sm text-gray-600">
                You can open an account by clicking on the "Get Started" button
                on our homepage and completing the KYC process online.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">
                What documents are needed for verification?
              </h3>
              <p className="text-sm text-gray-600">
                You’ll need a PAN card, Aadhaar card, and a selfie. NRI users
                may need to provide a passport and visa as well.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-semibold">
                How do I contact customer support?
              </h3>
              <p className="text-sm text-gray-600">
                You can reach our support team via email at{" "}
                <a
                  href="mailto:support@kandl.in"
                  className="text-kandlBlue underline"
                >
                  support@kandl.in
                </a>{" "}
                or use the live chat on our platform.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-700 mb-2">
              Email:{" "}
              <a
                href="mailto:support@kandl.in"
                className="text-kandlBlue underline"
              >
                support@kandl.in
              </a>
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Phone: +91-8000-123-456
            </p>
            <p className="text-sm text-gray-700">
              Office Hours: Mon - Fri, 9:00 AM to 6:00 PM IST
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Still need help?</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-xl"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-kandlDarkBlue"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
