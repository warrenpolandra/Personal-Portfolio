import Image from "next/image";

const EducationSection = () => {
  return (
    <section id="education" className="py-8 text-white">
      <h2 className="text-center text-2xl font-bold sm:text-4xl">Education</h2>
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#33353F] bg-[#181818] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-stretch">
            <div className="relative w-24 shrink-0 rounded-xl border border-[#33353F] p-2 sm:w-28">
              <Image
                src="./images/education/university-of-osaka-logo.svg"
                alt="The University of Osaka logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-400">
                Master&apos;s Degree
              </p>
              <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
                Computer Science
              </h3>
              <p className="mt-1 text-sm text-[#ADB7BE]">2025–Present</p>
              <a
                href="https://www.osaka-u.ac.jp/en"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[#ADB7BE] hover:text-white hover:underline"
              >
                The University of Osaka
              </a>
              <a
                href="https://sel.ist.osaka-u.ac.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-[#ADB7BE] hover:text-white hover:underline"
              >
                Laboratory: Software Engineering Laboratory
              </a>
            </div>
          </div>
          <p className="rounded-full border border-[#33353F] px-3 py-1 text-sm text-[#ADB7BE]">
            Expected Graduation: 2027
          </p>
        </div>
        <div className="mt-6 border-t border-[#33353F] pt-6">
          <p className="text-sm font-semibold">Research Focus</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
              AI Agents
            </span>
            <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
              Software Ecosystems
            </span>
            <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
              Software Engineering
            </span>
          </div>
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold">Master Thesis</p>
              <p className="mt-1 text-[#ADB7BE]">TBD</p>
            </div>
            <div>
              <p className="text-sm font-semibold">Supervisors</p>
              <p className="mt-1 text-[#ADB7BE]">
                <a
                  href="https://scholar.google.com/citations?user=BxUrdQEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Raula Gaikovina Kula
                </a>
                {", "}
                <a
                  href="https://scholar.google.com/citations?user=FtXOWgMAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  Yoshiki Higo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-[#33353F] bg-[#181818] p-6 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-stretch">
          <div className="relative w-24 shrink-0 rounded-xl border border-[#33353F] p-2 sm:w-28">
            <Image
              src="./images/education/its-logo.png"
              alt="Institut Teknologi Sepuluh Nopember logo"
              fill
              className="object-contain p-2"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-primary-400">
              Bachelor&apos;s Degree
            </p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Informatics Engineering
            </h3>
            <p className="mt-1 text-sm text-[#ADB7BE]">2020–2024</p>
            <a
              href="https://www.its.ac.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-[#ADB7BE] hover:text-white hover:underline"
            >
              Institut Teknologi Sepuluh Nopember
            </a>
            <a
              href="https://www.its.ac.id/informatika/en/laboratory/software-engineering-laboratory/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-[#ADB7BE] hover:text-white hover:underline"
            >
              Laboratory: Software Engineering Laboratory
            </a>
          </div>
        </div>
        <div className="mt-6 space-y-5 border-t border-[#33353F] pt-6">
          <div>
            <p className="text-sm font-semibold">Research Focus</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                Android Development
              </span>
              <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                Design Patterns
              </span>
              <span className="rounded-full bg-primary-500/20 px-3 py-1 text-xs text-primary-300 sm:text-sm">
                Refactoring
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Bachelor Thesis</p>
            <a
              href="https://repository.its.ac.id/109742/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm leading-relaxed text-[#ADB7BE] hover:text-white hover:underline sm:text-base"
            >
              &ldquo;Redesign and Redevelop Clastic Mobile-based Application
              with Android Jetpack Compose Framework and MVVM Design
              Pattern&rdquo;
            </a>
          </div>
          <div>
            <p className="text-sm font-semibold">Supervisors</p>
            <p className="mt-1 text-[#ADB7BE]">
              <a
                href="https://scholar.google.com/citations?user=ZihT82EAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Siti Rochimah
              </a>
              {", "}
              <a
                href="https://scholar.google.com/citations?user=7IdqUgEAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:underline"
              >
                Siska Arifiani
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
