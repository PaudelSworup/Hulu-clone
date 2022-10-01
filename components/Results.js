import React from "react";
import ThumbNail from "./ThumbNail";

const Results = ({ results }) => {
  console.log(results);
  return (
    <>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
        {results.map((result) => (
          <ThumbNail key={result.id} result={result} />
        ))}
      </div>
    </>
  );
};

export default Results;
