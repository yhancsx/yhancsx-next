const defaultTitle = 'Blog';
const defaultDescription =
  'Mostly related to javascript, web, and data visualization.';

const Intro = ({ title = defaultTitle, description = defaultDescription }) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-left text-sm md:text-lg mt-5 md:pl-8">
        {description}
      </h4>
    </section>
  );
};

export default Intro;
