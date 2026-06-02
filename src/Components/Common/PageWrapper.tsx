interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  return <div className={`min-h-screen bg-white ${className}`}>{children}</div>;
};

export default PageWrapper;
