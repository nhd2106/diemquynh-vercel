import Spinner from "./Spinner";

function Loading() {
  return (
    <div className="fixe  top-0 left-0 right-0 bottom-0 w-full h-screen z-[100] overflow-hidden bg-black opacity-75 flex flex-col items-center justify-center">
      <Spinner className="h-12 w-12 mb-4" />
      <p className="w-1/3 text-center text-white">
        This may take a few seconds, please don&apos;t close this page.
      </p>
    </div>
  );
}

export default Loading;
