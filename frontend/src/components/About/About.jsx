import assets from "../../assets/assets";

const About = () => {
  return (
    <div className="w-5xl m-auto px-8">
      <div>
        <div className="py-20 text-center text-3xl leading-10 font-medium">
          <h2>We pioneered the zero-brokerage model for traders in India</h2>
          <h2> Now, we are redefining simplicity with our platform.</h2>
        </div>
        <hr className="text-gray-300" />
        <div className="py-20 flex gap-12">
          <div className="flex flex-col gap-6 w-full">
            <p>
              We kick-started operations on the 26th of January, 2025 with a
              mission to eliminate all barriers traders face in India — high
              brokerage, clunky platforms, and lack of clarity. We named the
              company Kandl, inspired by the candlestick patterns used in
              trading — a symbol of insight, direction, and light in the
              markets.
            </p>
            <p>
              Today, our zero-brokerage trading model and clean, in-house
              platform design have made Kandl one of the fastest-growing trading
              platforms in India.
            </p>
            <p>
              Over 2.3+ million clients place millions of trades every month
              through our minimal yet powerful platform, contributing to over
              11% of Indian retail trading volumes daily. In addition, we run a
              growing ecosystem of free educational tools and community-driven
              initiatives to empower India's retail trading community.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <p>
              <span className="text-green">KandlVerse</span>, our open trader
              community, connects thousands of active users who share insights,
              trading strategies, and support each other in real time.
            </p>
            <p>
              <span className="text-green">LightHouse</span>, our learning
              initiative, breaks down complex trading topics into
              beginner-friendly formats — all completely free and accessible.
            </p>
            <p>
              <span className="text-green">Krypta</span>, our internal
              innovation lab, is building the future of trading with
              AI-generated signals, market sentiment models, and voice-command
              execution.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="mb-15 text-center text-3xl">People</h2>
        <div className="flex">
          <div className="min-w-1/2">
            <div className="flex flex-col items-center w-full gap-4">
              <img
                src={assets.shreyas}
                alt=""
                className="w-2/3 rounded-full object-fit"
              />
              <span className="text-xl">Shreyas K U</span>
              <span className="text-gray-500 text-[14px]">Founder, CEO</span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 px-8">
            <p>
              Shreyas founded Kandl in 2025 after years of trading on legacy
              platforms that felt outdated, expensive, and overwhelming. With a
              background in electronics and a deep passion for user-centered
              design and AI, he set out to build a platform that puts the trader
              first.
            </p>
            <p>
              When he's not building features or testing strategies, you'll find
              him sharing knowledge through his platform Scripted Web or
              mentoring young developers. Simplifying complexity.
            </p>
            <p>
              Playing <span className="font-medium">Cricket</span> is his zen.
            </p>
            <p>
              Connect on <span className="text-green">Homepage</span> /
              <span className="text-green"> KandlVerse</span> /
              <span className="text-green"> Twitter</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
