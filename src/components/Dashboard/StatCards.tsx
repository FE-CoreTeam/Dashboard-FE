export const StatCards = () => {
  return (
    <>
      <Card
        title="@anonimous"
        value="Bang perbedaan antara elemen block-level dan inline di Html itu apa bang?"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="@anonimous"
        value="Bang gimana cara bikin form di Html?, trus cara ngirim datanya gimana?"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="@anonimous"
        value="Bang atribut alt di tag img itu untuk apa bang?, kenapa harus pake?"
        period="Today"
      />
    </>
  );
};

const Card = ({
  title,
  value,
  period,
}: {
  title: string;
  value: string;
  period: string;
}) => {
  return (
    <div className="p-4 col-span-4 rounded border border-stone-300">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-slate-500 mb-2 text-sm">{title}</h3>
          <p className="text-sm flex items-center font-semibold">
            {value}
          </p>
        </div>

        {/* <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
          <span>{period}</span>
        </span> */}
      </div>

      <p className="text-xs text-stone-500">{period}</p>
    </div>
  );
};
