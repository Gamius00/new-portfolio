import Image from "next/image";
import Link from "next/link";

const Career = () => {
  interface ArrayInterface {
    image: string;
    jobtitle: string;
    company: string;
    date: string;
    description: React.ReactNode;
  }

  const date = new Date();

  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const communardoBegin = Month < 8 && Year <= 2025;
  const communardoEnd = Year >= 2028 && Month >= 8;
  const communardoMonth =
    Month - 8 == 0
      ? ""
      : Month > 8
        ? Month - 8 == 1
          ? " " + (Month - 8) + " Month"
          : " " + (Month - 8) + " Months"
        : Month + 4 + "Months";
  const communardoYear =
    Year >= 2026
      ? Month >= 8
        ? Year - 2025 + " Year"
        : Year > 2026
          ? Year - 2025 + " Years"
          : ""
      : "";
  const creativeProgrammersMonth =
    Month - 3 == 0
      ? ""
      : Month > 3
        ? Month - 3 == 1
          ? " " + (Month - 3) + " Month"
          : " " + (Month - 3) + " Months"
        : Month + 9 + "Months";
  const creativeProgrammersYear = Month >= 3 ? Year - 2023 : Year - 2023 - 1;
  const DiscordMonth =
    Month - 1 == 0
      ? ""
      : Month > 1
        ? Month - 1 == 1
          ? " " + (Month - 1) + " Month"
          : " " + (Month - 1) + " Months"
        : Month + 11 + "Months";
  const DiscordYear = Month >= 1 ? Year - 2023 : Year - 2023 - 1;

  const careerStep: ArrayInterface[] = [
    {
      image: "/communardo.png",
      jobtitle:
        "Apprenticeship for Software Engineering (Fachinformatiker Anwendungsentwicklung)",
      company: "Communardo Software GmbH",
      date: communardoBegin
        ? "Starts 01/08/2025"
        : communardoEnd
          ? "01/08/2025 - 31/07/2028"
          : "01/08/2025 - now (" + communardoYear + communardoMonth + ")",
      description: (
        <div>
          <br />
          <li>
            Developing and deploying applications, including project management,
            software development methodologies, databases
          </li>
          <li className="mt-1">
            Business processes, including market research, customer consulting,
            sales planning
          </li>
        </div>
      ),
    },
    {
      image: "/communardo.png",
      jobtitle: "Internship for Software Development",
      company: "Communardo Software GmbH",
      date: "23/09/2024 - 27/09/2024 (1 Week)",
      description: (
        <div>
          <br />
          <li>
            Development of a birthday calendar module with Atlassian Forge to
            improve user-friendliness.
          </li>
          <li className="mt-1">
            Optimization of the calendar app in terms of usability and
            operability for an enhanced user experience (UX).
          </li>
        </div>
      ),
    },
    {
      image: "/communardo.png",
      jobtitle: "Internship for Software Development",
      company: "Communardo Software GmbH",
      date: "3/11/2023 - 17/11/2023 (2 Weeks)",
      description: (
        <div>
          <br />
          <li>
            Concept & Design of User Interfaces using a Calendar App (Confluence
            Macro)
          </li>
          <li className="mt-1">
            Programming with HTML, CSS, JavaScript, React & Atlassian Forge
          </li>
        </div>
      ),
    },
    {
      image: "/tudresden.png",
      jobtitle: "Computer Science Course",
      company: "Technische Universität Dresden",
      date: "01/10/2023 - 01/11/2023 (4 Weeks)",
      description: (
        <div>
          <br />
          <li>
            Participation in the course at the Technische Universität Dresden to
            deepen programming and software development skills.{" "}
          </li>
          <li className="mt-1">
            Interruption of the course due to school obligations.
          </li>
        </div>
      ),
    },
    {
      image: "/Telekom.png",
      jobtitle: "Internship for Software Development",
      company: "Deutsche Telekom MMS GmbH",
      date: "31/07/2023 - 04/08/2023 (1 Week)",
      description: (
        <div>
          <br />
          <li>
            System Engineering congstar Business Solutions Insight into Agile
            Working (Daily/Sprint Change)
          </li>
          <li className="mt-1">Further Development of a Weather App</li>
        </div>
      ),
    },
    {
      image: "/creativeprogrammers.png",
      jobtitle: "Software Developer / CO-Founder",
      company: "Creative Programmers Group",
      date:
        "03/2023 -  now (" +
        creativeProgrammersYear +
        " Years" +
        creativeProgrammersMonth +
        ")",
      description: (
        <div>
          <br />
          <li>
            The Creative Programmer Group was founded by Jakob Roessner{" "}
            <Link href={"https://roessner.tech"}>(https://roessner.tech)</Link>{" "}
          </li>
          <li className="mt-1">
            We are a developer group working on a lot of projects. If you want
            to get more informations click{" "}
            <Link
              href={"https://creative-programmers.vercel.app/"}
              className="text-red-600"
            >
              here
            </Link>
            .
          </li>
        </div>
      ),
    },
    {
      image: "/discord-image.png",
      jobtitle: "Discord Bot Developer",
      company: "Freelance",
      date: "01/2023 -  now (" + DiscordYear + " Years" + DiscordMonth + ")",
      description: (
        <div>
          <br />
          <li>Developed a Discord Bot with Python.</li>
          <li className="mt-1">
            The bot is called Creativo and is active on the Creative Programmers
            server.
          </li>
        </div>
      ),
    },
  ];

  return (
    <div className="mb-10">
      <div className="mb-16 mt-28 flex justify-center">
        <p className="text-2xl">Career & Experience</p>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="relative max-w-[85%] space-y-28 border-l-4 border-red-600 pl-6 lg:max-w-[50%]">
          {careerStep.map((item, index) => {
            return (
              <div key={index} className="relative">
                <div className="absolute -left-9 h-5 w-5 rounded-full bg-red-600"></div>
                <div className="">
                  <h4 className="text-md font-medium">{item.date}</h4>
                  <div className="text-md mt-1 flex-wrap text-gray-300 sm:mt-2 xl:flex">
                    <div className="flex">
                      <Image
                        src={item.image}
                        className="mr-2 h-6 w-6 rounded-full"
                        alt={item.company}
                        width={25}
                        height={25}
                      />
                      <p>{item.company}</p>
                    </div>
                    <p className="ml-0 mt-1 text-lg font-semibold xl:ml-4 xl:mt-0">
                      {item.jobtitle}
                    </p>
                  </div>
                  <div className="">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
