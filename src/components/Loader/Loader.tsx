import { ThreeDots } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      color="#1d1dba"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
