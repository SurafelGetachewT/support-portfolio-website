export const contactLinks = {
  github: "https://github.com/SurafelGetachewT",
  linkedin: "https://www.linkedin.com/in/surafel-getachew-2a6696256/",
  upwork: "https://www.upwork.com/freelancers/~017a2e8297e564dbb9",
  telegram: "https://t.me/MarGioM",
  email: "mailto:suragetch@gmail.com",
  emailAddress: "suragetch@gmail.com",
  resume:
    "https://drive.google.com/file/d/1z_WUxdA-mDyNGK9bwCF7Z1aNA8E6yn9h/view?usp=drive_link",
  resumePdf: "/resume/Surafel_Getachew_Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Showcases", href: "/showcases" },
  { label: "Contact", href: "/contact" },
];

export const heroHighlights = [
  "Crypto, SaaS & Fintech Support",
  "Ticket Handling & Escalation",
  "Knowledge Base Writing",
  "Technical Troubleshooting",
  "P2P Dispute Support",
];

export const supportStrengths = [
  {
    title: "Customer Support",
    icon: "Headphones",
    description:
      "Live chat, email support, ticket handling, customer follow-up, and issue resolution.",
  },
  {
    title: "Technical Support",
    icon: "Wrench",
    description:
      "Troubleshooting, bug reporting, escalation, technical documentation, and root cause analysis.",
  },
  {
    title: "Crypto & P2P Support",
    icon: "Bitcoin",
    description:
      "Deposits, withdrawals, P2P disputes, payment verification, KYC/AML workflows, and user education.",
  },
  {
    title: "Knowledge Base Writing",
    icon: "BookOpen",
    description:
      "Help center articles, FAQs, user guides, and step-by-step troubleshooting documentation.",
  },
  {
    title: "Support Operations",
    icon: "Workflow",
    description:
      "Macros, escalation templates, bug report formats, ticket workflows, and support process improvement.",
  },
];

export const tools = [
  {
    category: "Ticketing & Support",
    items: ["Zendesk", "Freshdesk", "Intercom", "HaoDesk"],
  },
  {
    category: "Communication",
    items: ["Slack", "Discord", "Telegram", "Microsoft Teams"],
  },
  {
    category: "Documentation & Workflow",
    items: ["Notion", "Google Workspace", "GitHub"],
  },
  {
    category: "Crypto/Trading",
    items: ["TradingView"],
  },
];

export const experienceCards = [
  {
    role: "Binance Customer Support Representative",
    icon: "ShieldCheck",
    description: [
      "Supported users with crypto exchange-related inquiries including deposits, withdrawals, spot trading, futures, copy trading, account access, KYC/AML, and account security.",
      "Handled customer questions through internal support tools and community channels, documented issues clearly, and escalated complex cases when needed.",
    ],
    skills: [
      "Crypto support",
      "Transaction troubleshooting",
      "KYC/AML support",
      "Account security",
      "Escalation handling",
      "Live support",
    ],
  },
  {
    role: "Clickworker Customer Support Agent",
    icon: "TicketCheck",
    description: [
      "Handled user inquiries related to account issues, payments, task access, platform questions, and support requests through ticketing systems.",
      "Helped document user trends, improve support responses, and support remote users with clear communication.",
    ],
    skills: [
      "Ticket handling",
      "Email support",
      "Payment support",
      "User education",
      "Documentation",
      "Remote support",
    ],
  },
  {
    role: "Ethio-Telecom Technical Support Specialist",
    icon: "Wrench",
    description: [
      "Supported users with technical service issues, troubleshooting, root cause investigation, ticket documentation, and escalation.",
      "Worked on resolving technical problems, identifying recurring issues, and improving support workflows.",
    ],
    skills: [
      "Technical troubleshooting",
      "Root cause analysis",
      "Ticket escalation",
      "Network/service support",
      "Customer communication",
    ],
  },
  {
    role: "P2P Merchant Experience",
    icon: "Wallet",
    description: [
      "Worked as a verified P2P merchant across crypto platforms, handling payment verification, transaction monitoring, customer communication, dispute prevention, and safe trading education.",
    ],
    skills: [
      "P2P support",
      "Payment verification",
      "Dispute handling",
      "Fraud awareness",
      "Crypto transaction support",
      "Customer education",
    ],
  },
];

export const supportPortfolioCards = [
  {
    title: "Customer Support Ticket Examples",
    icon: "MessageSquare",
    description:
      "Sample responses for login issues, payment delays, refund requests, KYC verification, crypto deposits, withdrawals, P2P disputes, and angry customer situations.",
    skills:
      "Empathy, written communication, ticket handling, escalation judgment.",
    detailHref: "#customer-support-ticket-examples",
    repoHref: "#",
  },
  {
    title: "Knowledge Base Articles",
    icon: "FileText",
    description:
      "User-friendly help center articles for SaaS, fintech, crypto, and digital platform users.",
    skills: "Help center writing, customer education, step-by-step guidance.",
    detailHref: "#knowledge-base-articles",
    repoHref: "#",
  },
  {
    title: "Technical Support Workflows",
    icon: "Workflow",
    description:
      "Structured workflows for diagnosing technical issues, collecting customer details, documenting bugs, and escalating complex cases.",
    skills:
      "Troubleshooting, bug reporting, technical documentation, escalation.",
    detailHref: "#technical-support-workflows",
    repoHref: "#",
  },
  {
    title: "Crypto & P2P Support Case Studies",
    icon: "Bitcoin",
    description:
      "Practical support scenarios covering P2P disputes, payment verification, transaction delays, wrong-network deposits, and fraud-aware support.",
    skills: "Crypto support, P2P disputes, risk awareness, customer protection.",
    detailHref: "#crypto-p2p-support-case-studies",
    repoHref: "#",
  },
  {
    title: "Support Operations Templates",
    icon: "ClipboardList",
    description:
      "Macros, canned responses, escalation templates, bug report formats, and customer follow-up templates.",
    skills: "Support operations, internal documentation, workflow improvement.",
    detailHref: "#support-operations-templates",
    repoHref: "#",
  },
];

export const ticketExamples = [
  {
    title: "Crypto Deposit Not Received",
    scenario:
      "A customer deposited USDT but the funds are not showing in their account.",
    customerMessage:
      "I sent USDT to my account 2 hours ago but it still has not arrived. Please fix this.",
    response: `Hi [Customer Name],

Thanks for reaching out. I understand how worrying it can be when a crypto deposit does not appear as expected.

I'll help you check this. Please send the following details:

1. Transaction hash / TxID
2. Network used
3. Token deposited
4. Deposit address
5. Approximate time of the transaction

Once I have the TxID, I can check the transaction status and escalate it to the wallet team if needed.

Best,
Surafel`,
    skills:
      "Crypto support, empathy, information gathering, transaction troubleshooting, escalation judgment.",
  },
  {
    title: "Login Issue",
    scenario: "A customer cannot log in and receives an error message.",
    customerMessage: "",
    response: `Hi [Customer Name],

Thanks for contacting us. I understand how frustrating it can be when you cannot access your account.

To help you resolve this, please confirm:

1. The exact error message you see
2. Whether you are using the mobile app or web version
3. Whether you recently changed your password
4. Whether you can receive your 2FA code

In the meantime, please try clearing your browser cache or testing from another device. If the issue continues, I'll document the details and escalate it to the technical team for review.

Best,
Surafel`,
    skills:
      "Technical troubleshooting, customer communication, issue diagnosis, escalation.",
  },
  {
    title: "P2P Payment Dispute",
    scenario:
      "A seller says the buyer marked the order as paid, but the seller has not received payment.",
    customerMessage: "",
    response: `Hi [Customer Name],

Thanks for contacting us. I understand your concern. Please do not release the crypto until the payment is confirmed in your account.

To help us review the order, please send the order ID and a screenshot of your latest bank transaction history showing that the payment has not arrived.

We'll review the evidence carefully and update you as soon as possible.

Best,
Surafel`,
    skills:
      "P2P dispute support, payment verification, fraud awareness, customer protection.",
  },
];

export const knowledgeBaseArticles = [
  {
    title: "How to Reset Your Password",
    category: "Account Support",
    summary:
      "A simple step-by-step guide for users who need to reset their password and regain account access.",
  },
  {
    title: "How to Check a Crypto Transaction Using TxID",
    category: "Crypto Support",
    summary:
      "Explains how users can check deposit or withdrawal status using a transaction hash on a blockchain explorer.",
  },
  {
    title: "Why Your Withdrawal May Be Delayed",
    category: "Crypto Support",
    summary:
      "Explains common reasons for withdrawal delays, including network congestion, security review, wrong network, or platform checks.",
  },
  {
    title: "How to Report a Bug",
    category: "Technical Support",
    summary:
      "Shows users what information to provide when reporting a bug, including device, browser, steps to reproduce, and screenshots.",
  },
  {
    title: "How to Stay Safe During P2P Trading",
    category: "P2P Support",
    summary:
      "Gives users practical safety tips for payment verification, avoiding third-party payments, and preventing disputes.",
  },
];

export const troubleshootingWorkflows = [
  {
    title: "Login Issue Workflow",
    icon: "Lock",
    steps: [
      "Confirm error message",
      "Check app/web version",
      "Test browser/device",
      "Verify 2FA status",
      "Check account restrictions",
      "Escalate if security or system issue appears",
    ],
  },
  {
    title: "Payment Issue Workflow",
    icon: "CreditCard",
    steps: [
      "Confirm transaction/payment reference",
      "Check payment status",
      "Verify account details",
      "Collect screenshots",
      "Review internal status",
      "Escalate to billing/payment team if needed",
    ],
  },
  {
    title: "Crypto Deposit Workflow",
    icon: "Wallet",
    steps: [
      "Collect TxID",
      "Confirm network",
      "Confirm deposit address",
      "Check blockchain confirmation",
      "Check platform crediting status",
      "Escalate if confirmed on-chain but not credited",
    ],
  },
  {
    title: "Bug Report Workflow",
    icon: "Bug",
    steps: [
      "Understand the issue",
      "Collect device/browser/app version",
      "Reproduce the issue",
      "Document expected vs actual result",
      "Attach screenshots/logs",
      "Escalate to product/engineering team",
    ],
  },
];

export const cryptoBadges = [
  "Payment verification",
  "Dispute handling",
  "Fraud awareness",
  "Transaction troubleshooting",
  "KYC/AML",
  "Account security",
];

export const cryptoCaseStudies = [
  {
    title: "Buyer Marked Paid but Seller Did Not Receive Payment",
    supportGoal:
      "Protect both users, verify evidence, prevent unfair crypto release, and follow platform dispute rules.",
    information:
      "Order ID, payment proof, seller bank statement, payment time, communication history, account names.",
  },
  {
    title: "Wrong Network Deposit",
    supportGoal:
      "Identify the network used, confirm whether the asset and network are supported, collect TxID, and escalate to wallet team if recovery is possible.",
    information:
      "TxID, deposit address, asset, network, screenshot of the withdrawal source, and platform account details.",
  },
  {
    title: "Delayed Withdrawal",
    supportGoal:
      "Check platform status, blockchain status, security review status, and provide clear updates to the customer.",
    information:
      "Withdrawal ID, asset, network, destination address, time submitted, and any platform warning or status message.",
  },
  {
    title: "Suspicious Transaction Review",
    supportGoal:
      "Collect details, avoid sharing sensitive risk rules, protect the customer account, and escalate to the risk/security team.",
    information:
      "Account activity, transaction details, customer explanation, screenshots, login notices, and risk indicators.",
  },
];

export const resumeSnapshot = {
  title: "Resume Snapshot",
  headline: "Technical Customer Support Specialist",
  summary:
    "Customer support, technical troubleshooting, crypto/P2P support, ticket workflows, and documentation.",
  focus: [
    "SaaS Support",
    "Crypto & Fintech",
    "P2P Disputes",
    "Ticket Escalation",
    "Knowledge Base",
    "Remote Support",
  ],
  experience: [
    "Binance Customer Support Representative",
    "Clickworker Customer Support Agent",
    "Ethio-Telecom Technical Support Specialist",
    "Verified P2P Merchant Experience",
  ],
  tools: [
    "Zendesk",
    "Freshdesk",
    "Intercom",
    "HaoDesk",
    "Slack",
    "Telegram",
    "Notion",
    "GitHub",
  ],
};

export const certificates = [
  {
    title: "Customer Support Certificate",
    issuer: "Certificate file can be added here",
    status: "Reserved space",
    href: "#",
  },
  {
    title: "Technical Support Certificate",
    issuer: "Certificate file can be added here",
    status: "Reserved space",
    href: "#",
  },
  {
    title: "Crypto / Fintech Support Certificate",
    issuer: "Certificate file can be added here",
    status: "Reserved space",
    href: "#",
  },
];

export const projects = [
  {
    title: "Support Portfolio Website",
    description:
      "A professional portfolio website presenting my customer support and technical support profile, experience, tools, ticket examples, workflows, crypto/P2P support knowledge, and support projects.",
    skills:
      "Portfolio design, support documentation, customer support positioning.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Customer Support Ticket Examples",
    description:
      "A collection of sample customer support responses for SaaS, fintech, crypto, payment, account, and technical issues.",
    skills: "Empathy, ticket handling, clear writing, escalation judgment.",
    liveHref: "#",
    repoHref: "#",
    id: "customer-support-ticket-examples-project",
  },
  {
    title: "Knowledge Base Articles",
    description:
      "A collection of user-friendly help center articles for SaaS, crypto, fintech, and digital platform users.",
    skills: "Documentation, help center writing, customer education.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Technical Support Workflows",
    description:
      "A structured set of troubleshooting workflows for login issues, payment problems, bug reports, crypto deposits, withdrawal delays, and P2P disputes.",
    skills: "Troubleshooting, technical support, escalation, bug reporting.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Crypto & P2P Support Case Studies",
    description:
      "Support case studies for P2P disputes, payment verification, wrong-network deposits, suspicious transactions, and crypto transaction delays.",
    skills: "Crypto support, P2P dispute handling, fraud awareness.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Support Operations Templates",
    description:
      "Canned responses, escalation templates, bug report formats, customer follow-ups, incident updates, and support macros.",
    skills: "Support operations, documentation, process improvement.",
    liveHref: "#",
    repoHref: "#",
    id: "support-operations-templates",
  },
  {
    title: "Help Center Demo",
    description:
      "A SaaS-style help center website with article categories, FAQ, search-style interface, and contact support section.",
    skills: "Help center structure, user education, documentation design.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Crypto Exchange Support Center",
    description:
      "A support center concept for crypto exchange users covering deposits, withdrawals, KYC, P2P disputes, transaction status, and account security.",
    skills: "Crypto support, fintech support, P2P support, support content design.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Support Ticket Dashboard Demo",
    description:
      "A frontend dashboard concept showing support tickets by category, priority, status, channel, and escalation stage.",
    skills: "Ticket triage, support operations, prioritization.",
    liveHref: "#",
    repoHref: "#",
  },
  {
    title: "Bug Report & Escalation Form",
    description:
      "A form that collects technical bug details such as device, browser, app version, steps to reproduce, expected result, actual result, screenshots, and urgency.",
    skills: "Bug reporting, technical escalation, product support.",
    liveHref: "#",
    repoHref: "#",
  },
];
