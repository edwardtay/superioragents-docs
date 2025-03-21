import React, { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import {
  GitHub,
  Settings, 
  BarChart2, 
  GitBranch, 
  RefreshCw,
  MessageCircle,
  ArrowUpRight as LinkIcon,
  Info as InfoIcon, // For "What is Superior Agents?"
  HelpCircle as HelpIcon, // For "How can I build..."
  BookOpen as BookIcon, // For "Learn about..."
} from 'react-feather';
import Discord from '@site/static/img/discord.svg';
import SuperiorSquare from '@site/static/img/superior-square.png'; // <-- Import your image

// Import your CSS module
import styles from '../../css/styles.module.css';

/* ----------------------------------------------------------------------
   1) TYPE DEFINITIONS
   ---------------------------------------------------------------------- */
type DeveloperLink = {
  title: string;
  href: string;
  icon: ReactNode;
};

type CommunityLink = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

/* ----------------------------------------------------------------------
   2) LINKS (Developer & Community)
   ---------------------------------------------------------------------- */
const developerLinks: DeveloperLink[] = [
  {
    title: 'superior-opensource',
    href: 'https://github.com/KIP-Protocol-Contracts/superior-opensource',
    icon: <GitHub style={{ width: '24px', height: '24px' }} />,
  },
];

const communityLinks: CommunityLink[] = [
  {
    title: 'Discord',
    description: 'Join our Developer Community.',
    href: 'https://discord.gg/865JrDPU2J',
    icon: <Discord style={{ width: '48px', height: '48px' }} />,
  },
  {
    title: 'Forum',
    description: 'Discuss governance and more.',
    href: 'https://github.com/KIP-Protocol-Contracts/superior-opensource/issues',
    icon: <MessageCircle style={{ width: '48px', height: '48px' }} />,
  },
  {
    title: 'GitHub',
    description: 'View all KIP Protocol repositories.',
    href: 'https://github.com/KIP-Protocol-Contracts',
    icon: <GitHub style={{ width: '48px', height: '48px' }} />,
  },
];

/* ----------------------------------------------------------------------
   3) NEW INTRO BOXES SECTION (3 cards at the top)
   ---------------------------------------------------------------------- */
function IntroBoxesSection(): JSX.Element {
  // Example data for the three boxes
  const introBoxes = [
    {
      title: 'What is Superior Agents?',
      description: 'Learn about the core concepts of Superior Agents.',
      icon: <InfoIcon />,
      href: '/docs/superior-agents-overview', // Example link
    },
    {
      title: 'How can I build with Superior Agents?',
      description: 'Discover how to create your own AI with real-world evolution.',
      icon: <HelpIcon />,
      href: '/docs/build-with-superior-agents', // Example link
    },
    {
      title: 'Learn about the architecture',
      description: 'Explore the structure of Superior Agents in detail.',
      icon: <BookIcon />,
      href: '/docs/superior-agents-architecture', // Example link
    },
  ];

  return (
    <section className={styles.introBoxesSection}>
      <div className="container">
        <div className={styles.introBoxesGrid}>
          {introBoxes.map((box, idx) => (
            <Link key={idx} to={box.href} className={styles.introBox}>
              {/* Icon in top-left */}
              <div className={styles.introBoxIcon}>{box.icon}</div>

              {/* Title & Description */}
              <div className={styles.introBoxContent}>
                <h3>{box.title}</h3>
                <p>{box.description}</p>
              </div>

              {/* Arrow in top-right */}
              <div className={styles.introBoxArrow}>
                <LinkIcon />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   4) AI Problem & Solution Section
   ---------------------------------------------------------------------- */
   function AIProblemSolutionSection(): JSX.Element {
    return (
      <section className={styles.aiProblemSolutionSection}>
        <div className="container">
          <div className={styles.aiTwoColumn}>
            {/* Left Column */}
            <div className={styles.aiText}>
              <h2>Breaking Free from the AI Echo Chamber</h2>
              
              <p>
                Traditional AI agents are stuck in local loops, requiring constant human oversight.
                They either become too predictable to be engaging—or too erratic to be trusted.
              </p>
              
              <p><strong>Superior Agents</strong> break this cycle.</p>
              
              <p>
                Developed through cutting-edge research at the National University of Singapore,
                Superior Agents leverage <strong>Darwinian Intelligence</strong>, enabling self-improvement through
                real-world feedback rather than static, human-defined benchmarks.
              </p>
              
              <p>They don't just simulate intelligence—they survive and evolve.</p>
  
              <ul>
                <li>
                 <strong>Self-Assessing AI</strong> – Measures success through persistence,
                  replication, and economic utility—not human ratings.
                </li>
                <li>
                  <strong>Evolutionary Intelligence</strong> – No human-imposed ceilings; agents evolve
                  through environmental feedback.
                </li>
                <li>
                  <strong>Autonomous Adaptation</strong> – Agents test, learn, and persist
                  independently, guided by survival—not supervision.
                </li>
              </ul>
  
              <p>
                This is the end of the symbol-loop era and the beginning of a new paradigm: one where
                AI agents improve by adapting, not obeying. Welcome to the age of Superior Agents—
                powered by KIP Protocol.
              </p>
            </div>
  
            {/* Right Column */}
            <div className={styles.aiVisualization}>
              <div className={styles.aiGraphic}>
                <img
                  src={SuperiorSquare}
                  alt="Superior Agents"
                  style={{
                    maxWidth: '400px', // Adjust width as needed
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

/* ----------------------------------------------------------------------
   5) AI Learning Framework Section
   ---------------------------------------------------------------------- */
   function AILearningFrameworkSection(): JSX.Element {
    // Updated timeline steps with Feather icons instead of emojis
    const timelineSteps = [
      {
        step: 'Step 1',
        title: 'AI Agent Initialization',
        description: 'Agents are booted up with initial parameters and configurations.',
        icon: <Settings style={{ width: '48px', height: '48px' }} />,
      },
      {
        step: 'Step 2',
        title: 'Self-Evaluation Using Survival Metrics',
        description: 'Agents assess performance using objective, ungameable criteria.',
        icon: <BarChart2 style={{ width: '48px', height: '48px' }} />,
      },
      {
        step: 'Step 3',
        title: 'Replication & Data Persistence',
        description: 'Successful agents replicate and store critical data for evolution.',
        icon: <GitBranch style={{ width: '48px', height: '48px' }} />,
      },
      {
        step: 'Step 4',
        title: 'Continuous Evolution & Adaptation',
        description: 'AI adapts and evolves continuously in response to feedback.',
        icon: <RefreshCw style={{ width: '48px', height: '48px' }} />,
      },
    ];

  return (
    <section className={styles.aiLearningFrameworkSection}>
      <div className="container">
        <h2 className={styles.sectionHeader}>AI Learning Framework</h2>
        <div className={styles.timelineGrid}>
          {timelineSteps.map((step, idx) => (
            <div key={idx} className={styles.timelineStep}>
              <div className={styles.timelineIcon}>{step.icon}</div>
              <div className={styles.timelineContent}>
                <h3>{`${step.step}: ${step.title}`}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   6) Developer & Community Section
   ---------------------------------------------------------------------- */
function DevAndCommunitySection(): JSX.Element {
  return (
    <section className={styles.devAndCommunitySection}>
      <div className="container">
        <h2 className={styles.sectionHeader}>Developer &amp; Community</h2>

        {/* Developer CTA Box */}
        <div className={styles.summaryCTASection}>
          <div className={`container ${styles.ctaContainer}`}>
            <div className={`${styles.ctaCard} ${styles.commonBox}`}>
              <div
                className={styles.ctaContent}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                {/* Left Column: Text */}
                <div style={{ flex: 2, paddingRight: '1rem' }}>
                  <h2 className={styles.ctaTitle}>Superior Agents redefine AI learning.</h2>
                  <p className={styles.ctaSubtitle}>Build your own evolving AI today.</p>
                </div>

                {/* Right Column: Developer Link */}
                <div style={{ flex: 0.75, textAlign: 'right' }}>
                  {developerLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      to={link.href}
                      className={styles.devLinkCard}
                      style={{ textDecoration: 'none', display: 'inline-block' }}
                    >
                      <div className={styles.cardContent}>
                        <div className={styles.cardIcon}>{link.icon}</div>
                        <div className={styles.cardText}>
                          <h3 style={{ margin: 0, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                            {link.title}
                          </h3>
                        </div>
                        <div className={styles.cardArrow}>
                          <LinkIcon />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Links */}
        <div className={styles.developerLinksGrid}>
          {communityLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className={styles.devLinkCard}
              style={{ textDecoration: 'none' }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{link.icon}</div>
                <div className={styles.cardText}>
                  <h3 style={{ marginBottom: '0.25rem' }}>{link.title}</h3>
                  <p style={{ margin: 0 }}>{link.description}</p>
                </div>
                <div className={styles.cardArrow}>
                  <LinkIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   7) MAIN COMPONENT (Now with the top 3 Boxes)
   ---------------------------------------------------------------------- */
export default function HomepageFeatures(): JSX.Element {
  return (
    <main>
      {/* New 3-Box section at the top */}
      <IntroBoxesSection />

      {/* Existing sections below */}
      <AIProblemSolutionSection />
      <AILearningFrameworkSection />
      <DevAndCommunitySection />
    </main>
  );
}
