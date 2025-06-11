type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold sm:text-3xl mb-2 text-gray-800">
        {heading}
      </h1>
      <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default SectionHeading;
