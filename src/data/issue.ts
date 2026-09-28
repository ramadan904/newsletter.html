/*
  Content for the current issue. Edit this file (or ask Lovable to) to publish
  a new issue — the page renders entirely from this data.

  Any link with `todo: true` is still a placeholder pointing at a generic
  Devpost page. Replace the href with the real URL and drop the flag.
*/

export type BadgeTone = "default" | "award" | "prize" | "urgent";

export interface Badge {
  label: string;
  tone?: BadgeTone;
}

export interface Link {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
  todo?: boolean;
}

export interface Winner {
  title: string;
  href: string;
  todo?: boolean;
  byline: string;
  badges: Badge[];
  body: string;
  cta: Link;
}

export interface Program {
  title: string;
  badges: Badge[];
  body: string;
  perks: { strong: string; rest: string }[];
  cta: Link;
}

export interface Hackathon {
  title: string;
  badges: Badge[];
  meta: { key: string; value: string }[];
  body?: string;
  ctas: Link[];
}

export interface Issue {
  date: string;
  headline: string;
  dek: string;
  winners: Winner[];
  programs: Program[];
  featured: Hackathon[];
  trending: Hackathon[];
  footer: string[];
}

const DEVPOST_SOFTWARE = "https://devpost.com/software";
const DEVPOST_HACKATHONS = "https://devpost.com/hackathons";

export const issue: Issue = {
  date: "September 17, 2026",
  headline: "Two winners worth studying, and $988K still on the table.",
  dek: "An agent that repairs its own data pipelines, a 0.5B LLM running on a wristwatch, and five hackathons with open registration.",

  winners: [
    {
      title: "Project Blackbox",
      href: DEVPOST_SOFTWARE,
      todo: true,
      byline: "by Alex Velazquez",
      badges: [{ label: "Grand Prize", tone: "award" }, { label: "Build with DataHub" }],
      body: "An autonomous data incident response agent. It takes plain-English anomaly reports, traces them back to their root cause using DataHub lineage, automatically repairs the broken code, and opens a pull request that includes machine-verified proof of the fix.",
      cta: { label: "View project on Devpost →", href: DEVPOST_SOFTWARE, variant: "ghost", todo: true },
    },
    {
      title: "Literally the Smallest 0.5B Param Functional LLM ever built",
      href: DEVPOST_SOFTWARE,
      todo: true,
      byline: "by Bitan Nath and Swati Ram",
      badges: [{ label: "Overall Winner", tone: "award" }, { label: "ARM Create" }],
      body: "A 0.5 billion parameter LLM that runs at roughly 3 tokens per second on an Apple Watch while using only 64 MB of peak RAM. It is built in the Zig programming language using ARM NEON SIMD instructions and memory mapping (mmap) — the first publicly working multi-turn conversation LLM that runs on wearable hardware. The team shipped a mood-uplifting agent on top of it to demonstrate the thing actually functioning.",
      cta: { label: "View project on Devpost →", href: DEVPOST_SOFTWARE, variant: "ghost", todo: true },
    },
  ],

  programs: [
    {
      title: "Nebius AI Builder Program",
      badges: [{ label: "Free to join" }],
      body: "Open to anyone who wants in. It is built to give developers a running start — especially anyone competing in the Nebius x NVIDIA Global AI Hackathon below.",
      perks: [
        { strong: "$25", rest: " in Token Factory inference credits" },
        { strong: "$125+", rest: " in partner stack offers — Tavily, LangSmith, Toloka" },
        { strong: "Runnable cookbooks", rest: " to start from, not read" },
        { strong: "H100 GPU access", rest: "" },
      ],
      cta: { label: "Apply to the Builder Program", href: "https://nebius.com/", todo: true },
    },
  ],

  featured: [
    {
      title: "Nebius x NVIDIA Global AI Hackathon",
      badges: [{ label: "$50,000 cash", tone: "prize" }, { label: "+ NVIDIA Jetson Orin Nanos" }],
      meta: [
        { key: "Deadline", value: "October 30, 2026" },
        { key: "Theme", value: "Build any AI system you’d actually use — coding agents, personal assistants, or physical AI" },
        { key: "Stack", value: "NVIDIA open-source models running on Nebius Token Factory" },
        { key: "Format", value: "Four tracks; Jetson Orin Nanos go to track winners" },
      ],
      body: "They ran a live build session on getting started, and the recording is up if you want the setup walked through before you commit a weekend.",
      ctas: [
        { label: "Register", href: DEVPOST_HACKATHONS, todo: true },
        { label: "Watch the recording", href: DEVPOST_HACKATHONS, variant: "ghost", todo: true },
      ],
    },
    {
      title: "Build, Ship, Shape: Amazon Developer Hackathon",
      badges: [{ label: "$138,000 cash", tone: "prize" }, { label: "Amazon" }],
      meta: [
        { key: "Deadline", value: "October 23, 2026" },
        { key: "Organizer", value: "Amazon" },
      ],
      ctas: [{ label: "Register", href: DEVPOST_HACKATHONS, todo: true }],
    },
  ],

  trending: [
    {
      title: "RevenueCat Shipaton 2026",
      badges: [{ label: "$740,000+ in prizes", tone: "prize" }, { label: "Closing very soon", tone: "urgent" }],
      meta: [
        { key: "Deadline", value: "September 30, 2026" },
        { key: "Organizer", value: "RevenueCat" },
      ],
      body: "If this one is on your list, start the submission today — not next week.",
      ctas: [{ label: "Start your submission", href: DEVPOST_HACKATHONS, todo: true }],
    },
    {
      title: "OpenCV AI Competition 2026, powered by AWS",
      badges: [{ label: "$20,250 cash", tone: "prize" }, { label: "OpenCV + AWS" }],
      meta: [
        { key: "Deadline", value: "October 26, 2026" },
        { key: "Organizers", value: "OpenCV and AWS" },
      ],
      ctas: [{ label: "Register", href: DEVPOST_HACKATHONS, todo: true }],
    },
    {
      title: "AWS CDS Agentic AI Partner Hackathon",
      badges: [{ label: "$40,000 cash", tone: "prize" }, { label: "AWS" }],
      meta: [
        { key: "Deadline", value: "October 28, 2026" },
        { key: "Organizer", value: "AWS Communication Developer Services (CDS)" },
      ],
      ctas: [{ label: "Register", href: DEVPOST_HACKATHONS, todo: true }],
    },
  ],

  footer: [
    "Devpost Weekly — issue of September 17, 2026.",
    "Deadlines are as published by the organizers; check each hackathon page before you plan around them.",
  ],
};
