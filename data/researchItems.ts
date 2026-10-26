import type { AuthorId } from "./authors";

export type ResearchItem = {
  type: "Publication" | "Workshop" | "Poster Presentation";
  year: number;
  month: number;
  title: string;
  authors?: AuthorId[];
  event?: string;
  eventUrl?: string;
  publicationUrl?: string;
  paperUrl?: string;
  presentationUrl?: string;
  posterUrl?: string;
};

export const researchItems: ResearchItem[] = [
  {
    type: "Workshop",
    year: 2025,
    month: 12,
    title: "Using GenAI Agents to Reconstruct Single Function Library",
    event: "1st Workshop for Green AI Application & 6th Workshop for Next-Generation Software Ecosystems",
    eventUrl: "https://naist-se.github.io/HP_Workshop_GAIA_ECO/",
    presentationUrl: "./files/research/05-2025-naist-gaia.pdf",
  },
  {
    type: "Workshop",
    year: 2026,
    month: 7,
    title: "Understanding Agentic Specification and Generated Code",
    event: "ASPIRE SE Summit 2026",
    eventUrl: "https://posl.ait.kyushu-u.ac.jp/~aspiresummit2026/",
    presentationUrl: "./files/research/07-2026-aspire-summit.pdf",
  },
  {
    type: "Poster Presentation",
    year: 2026,
    month: 9,
    title: "Which Context Matters? An Empirical Study of Agentic Specification Contexts Across Five Python Libraries",
    event: "IPSJ/SIGSE Software Engineering Symposium 2026",
    eventUrl: "https://ses.sigse.jp/2026/program.html",
    posterUrl: "./files/research/09-2026-ses-yokohama.pdf",
  },
  {
    type: "Publication",
    year: 2026,
    month: 12,
    title: "The Role of Agentic Instruction Categories for Code Generation: A Study of Five Python Libraries",
    event: "33rd Asia-Pacific Software Engineering Conference (APSEC 2026)",
    authors: [
      "warren-gerald-polandra",
      "raula-gaikovina-kula",
      "yoshiki-higo",
    ],
    eventUrl: "https://conf.researchr.org/home/apsec-2026",
    paperUrl: "./files/research/12-2026-apsec.pdf",
    publicationUrl: "",
  },
];
