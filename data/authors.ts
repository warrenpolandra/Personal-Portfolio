export const authorProfiles = {
  "warren-gerald-polandra": {
    name: "Warren Gerald Polandra",
    url: "https://github.com/warrenpolandra",
  },
  "raula-gaikovina-kula": {
    name: "Raula Gaikovina Kula",
    url: "https://scholar.google.com/citations?user=BxUrdQEAAAAJ&hl=en",
  },
  "yoshiki-higo": {
    name: "Yoshiki Higo",
    url: "https://scholar.google.com/citations?user=FtXOWgMAAAAJ&hl=en",
  },
} as const;

export type AuthorId = keyof typeof authorProfiles;
