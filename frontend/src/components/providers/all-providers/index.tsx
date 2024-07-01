import ReactQueryProvider from "../react-query-provider";

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default AllProviders;
