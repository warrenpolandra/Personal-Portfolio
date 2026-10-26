import { authorProfiles } from "@/data/authors";
import { researchItems } from "@/data/researchItems";

const formatDate = (year: number, month: number) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));

const ResearchSection = () => {
  const sortedResearchItems = [...researchItems].sort(
    (a, b) => b.year - a.year || b.month - a.month
  );
  return (
    <section id="research" className="py-8 text-white">
      <h2 className="text-center text-2xl font-bold sm:text-4xl">
        Research Activities
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#ADB7BE] sm:text-base">
        Research outputs, academic activities, and presentations.
      </p>

      <div className="mx-auto mt-10 max-w-3xl border-l-2 border-[#33353F] pl-8">
        {sortedResearchItems.map((item, index) => {
          const isLastItem = index === sortedResearchItems.length - 1;

          return (
            <article
              key={`${item.type}-${item.year}-${item.month}-${item.title}`}
              className={`relative ${isLastItem ? "" : "pb-10"}`}
            >
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-2 border-primary-500 bg-[#121212]" />
              <p className="text-sm font-semibold text-primary-400">
                {formatDate(item.year, item.month)}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#ADB7BE]">
                {item.type}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              {item.authors && (
                <p className="mt-2 text-[#ADB7BE]">
                  {item.authors.map((authorId, authorIndex) => {
                    const author = authorProfiles[authorId];

                    return (
                      <span key={authorId}>
                        {authorIndex > 0 && ", "}
                        <a
                          href={author.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-white hover:underline"
                        >
                          {author.name}
                        </a>
                      </span>
                    );
                  })}
                </p>
              )}
              {item.event && (
                <p className="mt-2 text-[#ADB7BE]">
                  {item.eventUrl ? (
                    <a
                      href={item.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:underline"
                    >
                      {item.event}
                    </a>
                  ) : (
                    item.event
                  )}
                </p>
              )}
              {(item.publicationUrl ||
                item.paperUrl ||
                item.presentationUrl ||
                item.posterUrl) && (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold text-primary-400">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {item.paperUrl && (
                      <a
                        href={item.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Paper PDF
                      </a>
                    )}
                    {item.presentationUrl && (
                      <a
                        href={item.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Presentation PDF
                      </a>
                    )}
                    {item.posterUrl && (
                      <a
                        href={item.posterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary-300 hover:underline"
                      >
                        Poster PDF
                      </a>
                    )}
                  </div>
                  {item.publicationUrl && (
                    <a
                      href={item.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-300 hover:underline"
                    >
                      Proceedings →
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ResearchSection;
