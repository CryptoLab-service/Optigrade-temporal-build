import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Tolulope",
  lastName: "John",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer | Analyst | Creative technologist",
  avatar: "/images/avatar.jpg",
  email: "oluwalowojohn@gmail.com",
  location: "Africa/Lagos", // Updated to IANA time zone identifier
  languages: ["English", "Yoruba", "Hausa"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to get updates on design and technology trends</>,
  description: (
    <>
      I occasionally write about design, technology, and the intersection of creativity, UX, and
      engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cryptoLab-service",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/oluwalowojohn/",
  },
  {
    name: "Twitter", // Renamed from X
    icon: "x", // Assuming 'twitter' icon is available
    link: "https://www.x.com/EncryptedMFI",
  },
  {
    name: "WhatsApp", // Added WhatsApp
    icon: "whatsapp", // Assuming 'whatsapp' icon is available
    link: "https://wa.me/+2347030739128",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Where design, intelligence, and impact ignite</>,
  featured: {
    display: true,
    title: <>My Ongoing Project: <strong className="ml-4">OPTIGRADE</strong></>,
    href: "/work/optigrade-academic-intelligence",
  },
  subline: (
    <p style={{ fontSize: '1.125rem' }}>
      I'm Toluwalope John — designer, creative technologist, and founder of Zoe Tech Hub. I prototype
      ideas into purposeful digital tools across education and health, like Optigrade for academic
      analytics, TasxBox for simplified daily task workflows, and NoteHub for collaborative
      documentation. I believe in intuitive design and agile engineering for real-world change.
    </p>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://zcal.co/oluwalowojohn",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Toluwalope John is a UI/UX and graphics designer, entry-level data scientist, and budding
        software developer and AI agent. With a passion for creating purposeful visuals and seamless
        user experiences, he bridges design and technology to craft solutions that feel intuitive and
        impactful. He's currently channeling that energy into Optigrade—a platform he's developing to
        rethink and enhance academic performance in Nigerian higher institutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Zoe Tech Hub",
        timeframe: "2017 - Present",
        role: "Founder",
        achievements: [
          <>
            Redesigned UI/UX and graphics for key platforms under Zoe Tech Hub—my design and
            innovation hub—resulting in a 35%+ boost in user engagement and approximately 40% faster
            load times.
          </>,
          <>
            Led multiple graphics design projects, digital literacy campaigns, and office productivity
            initiatives, enhancing client impact and improving overall user experience.
          </>,
          <>
            Conducted extensive user research and usability analysis to guide UI/UX and product design
            decisions.
          </>,
          <>
            Integrated AI-powered tools into the design workflow, enabling faster iteration cycles
            and more data-driven, user-centered solutions.
          </>,
        ],
        images: [
          {
            src: "/tools/home.jpg",
            alt: "Once UI Project",
            width: 12,
            height: 6.75,
          },
        ],
      },
      {
        company: "CM Project House",
        timeframe: "2024 - 2025",
        role: "Research Analyst and Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 25%.
          </>,
          <>
            Collaborated with cross-functional teams to launch a new academic product line,
            contributing to a 15% increase in company revenue and improved student engagement.
          </>,
          <>
            Produced visually compelling digital and print publications for Zoe Tech Hub, combining
            effective layout design with strategic branding to elevate creative impact.
          </>,
        ],
        images: [
          {
            src: "/tools/home.jpg",
            alt: "Vercel website",
            width: 12,
            height: 6.75,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Ekiti State University, Ado-Ekiti",
        description: <>Studied Physics.</>,
      },
      {
        name: "The 3 Million Technical Talent",
        description: <>Studied User Interface and User Experience Design.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            Crafting modern user interfaces with Figma—using its design systems and prototyping
            features to build scalable, collaborative experiences.
          </>
        ),
        images: [
          {
            src: "/tools/figma.jpg",
            alt: "Figma UI Design",
            width: 12,
            height: 6.75,
          },
          {
            src: "/tools/figma1.jpg",
            alt: "XD components",
            width: 12,
            height: 6.75,
          },
        ],
      },
      {
        title: "Adobe XD",
        description: (
          <>
            Designing seamless user interfaces with Adobe XD—leveraging its prototyping and
            collaboration tools to create intuitive, high-fidelity mockups that enhance user
            experiences.
          </>
        ),
        images: [
          {
            src: "/tools/xd.jpg",
            alt: "Figma UI Design",
            width: 12,
            height: 6.75,
          },
          {
            src: "/tools/xd1.jpg",
            alt: "XD components",
            width: 12,
            height: 6.75,
          },
        ],
      },
      {
        title: "Photoshop",
        description: (
          <>
            Creating and refining visual assets with Adobe Photoshop,
            editing imagery, and building flexible editings that power agile creative workflows.
          </>
        ),
        images: [
          {
            src: "/tools/ps.jpg",
            alt: "Figma UI Design",
            width: 12,
            height: 6.75,
          },
          {
            src: "/tools/ps1.jpg",
            alt: "XD components",
            width: 12,
            height: 6.75,
          },
        ],
      },
      {
        title: "Notion",
        description: (
          <>
            Organizing ideas and teams with Notion—creating structured knowledge bases and design
            systems that support agile collaboration.
          </>
        ),
        images: [
          {
            src: "/tools/notion.jpg",
            alt: "Figma UI Design",
            width: 12,
            height: 6.75,
          },
          {
            src: "/tools/notion1.jpg",
            alt: "XD components",
            width: 12,
            height: 6.75,
          },
        ],
      },
      {
        title: "Jupyter Notebook",
        description: (
          <>
            Exploring data and building prototypes with Python-powered notebooks—visualizing insights
            to support design and development decisions.
          </>
        ),
        images: [
          {
            src: "/tools/jupy.jpg",
            alt: "Figma UI Design",
            width: 12,
            height: 6.75,
          },
          {
            src: "/tools/jupy1.jpg",
            alt: "XD components",
            width: 12,
            height: 6.75,
          },
        ],
      },
    ],
  },

  // Added a blank line for visual separation in the code
  research: {
    display: true,
    title: "Academic Research",
    description: (
      <>
        Exploring physics, educational analytics, and applied technology—conducting research that bridges data science with creative design. Projects include CGPA forecasting, learner engagement, and intelligent academic support systems like Optigrade.
      </>
    ),
    images: [
      {
        src: "/tools/research.jpg",
        alt: "Academic Research Projects",
        width: 12,
        height: 6.75,
      },
    ],
  },
  impact: {
    display: true,
    title: "Community Impact",
    description: (
      <>
        Facilitating digital literacy and computer training across schools and youth hubs—empowering learners with hands-on experience in design tools, productivity software, and creative technology. Focused on grassroots growth and tech equity.
      </>
    ),
    images: [
      {
        src: "/tools/training.jpg",
        alt: "Community Training Sessions",
        width: 12,
        height: 6.75,
      },
    ],
  },
  certification: {
    display: true,
    title: "Certification",
    awards: [
      {
        name: "3MTT Nigeria:", // Reverted to string
        description: (
          <>
            Certified in User Interface and User Experience Design as part of the Federal Training
            Initiative.
          </>
        ),
      },
      {
        name: "ALX Africa:", // Reverted to string
        description: (
          <>
            Completed Artificial Intelligence Career Essentials, Professional Foundation and currently
            undergoing Frontend Engineering Training under The Room Fellowship.
          </>
        ),
      },
      {
        name: "Access Bank Youthrive Internship (CareerEx):", // Reverted to string
        description: <>Certified in Product Management with career acceleration support.</>,
      },
      {
        name: "Cisco Networking Academy:", // Reverted to string
        description: (
          <>Completed Introduction to English for IT (1 and 2), Cybersecurity and Networking Basics.</>
        ),
      },
      {
        name: "LinkedIn Learning:", // Reverted to string
        description: (
          <>Completed courses on Design Thinking, Figma Essentials, and Creative Productivity.</>
        ),
      },
      {
        name: "GreatLearning Academy:", // Reverted to string
        description: <>Certified in Design Thinking principles, UI/UX Design, and Introduction to Design.</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
