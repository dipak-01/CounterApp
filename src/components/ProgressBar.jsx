const ProgressBar = ({ value, max }) => {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="w-full bg-gray-400 rounded-full h-4 dark:bg-gray-700 ">
      <div
        className="bg-blue-600 h-4 rounded-full flex items-center justify-center text-white "
        style={{ width: `${percentage}%` }}
      ></div>{" "}
      {percentage > 0 && `${percentage}%`}
    </div>
  );
};

export default ProgressBar;
