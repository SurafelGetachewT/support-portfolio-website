export const sitePositioning = {
  name: "Surafel Getachew Support Portfolio",
  headline:
    "Technical Customer Support Portfolio for SaaS, Fintech, Crypto, and P2P Platforms",
  subheadline:
    "A collection of customer support tickets, technical troubleshooting workflows, crypto/P2P case studies, knowledge base articles, escalation templates, and support operations examples.",
};

export const proofHighlights = [
  {
    value: "60+",
    label: "daily support inquiries handled",
    tone: "blue",
  },
  {
    value: "120+",
    label: "weekly crypto support inquiries",
    tone: "green",
  },
  {
    value: "500+",
    label: "monthly P2P transactions as verified merchant",
    tone: "amber",
  },
  {
    value: "Zendesk, Freshdesk, Intercom",
    label: "plus Telegram, Discord, Slack, and admin tools",
    tone: "navy",
  },
];

export const showcaseSummaries = [
  {
    id: "customer-support-ticket-examples",
    title: "Customer Support Ticket Examples",
    shortTitle: "Ticket Examples",
    icon: "MessageSquare",
    route: "/showcases/customer-support-ticket-examples",
    description:
      "Professional responses to account, payment, refund, KYC, crypto, and frustrated customer issues.",
    skills: [
      "Empathy",
      "Ticket handling",
      "Written communication",
      "Escalation judgment",
    ],
    pdfHref: "/pdfs/customer-support-ticket-examples.pdf",
    repoHref: "#",
  },
  {
    id: "crypto-p2p-support-case-studies",
    title: "Crypto & P2P Support Case Studies",
    shortTitle: "Crypto & P2P",
    icon: "Bitcoin",
    route: "/showcases/crypto-p2p-support-case-studies",
    description:
      "Realistic crypto exchange and P2P scenarios involving disputes, deposits, withdrawals, and fraud-aware escalation.",
    skills: [
      "Crypto support",
      "P2P disputes",
      "Payment verification",
      "Risk awareness",
    ],
    pdfHref: "/pdfs/crypto-p2p-support-case-studies.pdf",
    repoHref: "#",
  },
  {
    id: "knowledge-base-articles",
    title: "Knowledge Base Articles",
    shortTitle: "Knowledge Base",
    icon: "BookOpen",
    route: "/showcases/knowledge-base-articles",
    description:
      "Help center articles designed to reduce repeated tickets and guide users clearly.",
    skills: [
      "Help center writing",
      "Customer education",
      "Clear documentation",
      "Self-service support",
    ],
    pdfHref: "/pdfs/knowledge-base-articles.pdf",
    repoHref: "#",
  },
  {
    id: "technical-troubleshooting-workflows",
    title: "Technical Troubleshooting Workflows",
    shortTitle: "Workflows",
    icon: "Workflow",
    route: "/showcases/technical-troubleshooting-workflows",
    description:
      "Step-by-step workflows for diagnosing support issues before escalation.",
    skills: [
      "Troubleshooting",
      "Root cause thinking",
      "Bug reporting",
      "Escalation",
    ],
    pdfHref: "/pdfs/technical-troubleshooting-workflows.pdf",
    repoHref: "#",
  },
  {
    id: "support-operations-templates",
    title: "Support Operations Templates",
    shortTitle: "Templates",
    icon: "ClipboardList",
    route: "/showcases/support-operations-templates",
    description:
      "Internal notes, escalation templates, macros, bug reports, and follow-up templates.",
    skills: [
      "Support operations",
      "Macros",
      "Internal documentation",
      "Process improvement",
    ],
    pdfHref: "/pdfs/support-operations-templates.pdf",
    repoHref: "#",
  },
  {
    id: "technical-support-engineer-examples",
    title: "Technical Support Engineer Examples",
    shortTitle: "Technical Support",
    icon: "Wrench",
    route: "/showcases/technical-support-engineer-examples",
    description:
      "Technical examples involving bugs, APIs, web apps, mobile issues, and integration problems.",
    skills: [
      "Technical support",
      "API issues",
      "Web app bugs",
      "Engineering handoff",
    ],
    pdfHref: "/pdfs/technical-support-engineer-examples.pdf",
    repoHref: "#",
  },
];

export const ticketShowcase = {
  title: "Customer Support Ticket Response Examples",
  intro:
    "Realistic customer support ticket examples for SaaS, fintech, crypto, and digital platform users. Each example shows the customer issue, professional support response, internal note, escalation decision, and resolution summary.",
  skills: [
    "Customer communication",
    "Empathy",
    "Professional writing",
    "Ticket handling",
    "Escalation judgment",
    "Internal documentation",
  ],
  examples: [
    {
      title: "Login Issue After Password Reset",
      issueType: "Account access",
      priority: "Medium",
      channel: "Email support",
      tools: "CRM, admin dashboard, login history",
      emotion: "Frustrated and urgent",
      customerMessage:
        "I reset my password twice but I still cannot log in. This is very frustrating because I need access to my account today.",
      response: `Hi [Customer Name],

I'm sorry for the trouble you're having with logging in. I understand how frustrating this can be, especially when you need access urgently.

Please try the following steps:

1. Make sure you are using the most recent password reset email.
2. Clear your browser cache or try logging in from a private/incognito window.
3. Confirm that there are no extra spaces before or after your email address.
4. Try logging in from a different browser or device.

If the issue continues, please send us a screenshot of the error message you are seeing. I will review it and help you get back into your account as quickly as possible.

Best,
Surafel`,
      internalNote:
        "User reports failed login after multiple password resets. Suggested basic browser/device checks and requested screenshot if issue continues. Monitor for possible account lock or 2FA issue.",
      escalationDecision:
        "Escalate if the user receives an account lock message, 2FA error, or if login fails after browser/device testing.",
      resolutionSummary:
        "User was guided through basic troubleshooting steps. If unresolved, the case would be escalated to the account/security team.",
    },
    {
      title: "Payment Pending",
      issueType: "Billing/payment",
      priority: "Medium",
      channel: "Ticketing system",
      tools: "Billing panel, payment provider reference, CRM",
      emotion: "Concerned",
      customerMessage:
        "I paid for my subscription but my account is still showing unpaid. Why is this taking so long?",
      response: `Hi [Customer Name],

Thank you for reaching out. I understand your concern, especially after you have already completed the payment.

Sometimes payments can take a little time to update depending on the payment provider or bank processing time. To help us check this faster, please send the following details:

1. Payment date and time
2. Amount paid
3. Payment method used
4. Transaction reference or receipt screenshot

Once we receive this, we can check the payment status and update you with the next step.

Best,
Surafel`,
      internalNote:
        "Customer reports paid subscription still showing unpaid. Requested payment details and proof of payment. Needs billing panel verification.",
      escalationDecision:
        "Escalate to billing team if payment exists but account status is not updated.",
      resolutionSummary:
        "Payment evidence requested. Billing verification required before confirming account update.",
    },
    {
      title: "Refund Request from Angry Customer",
      issueType: "Refund request",
      priority: "Medium",
      channel: "Email support",
      tools: "CRM, billing panel, refund policy",
      emotion: "Angry and urgent",
      customerMessage:
        "This service did not work for me. I want my money back immediately.",
      response: `Hi [Customer Name],

I'm sorry to hear that the service did not meet your expectations. I understand why you would want this resolved quickly.

I can help review your refund request. Before I proceed, could you please confirm:

1. The email address linked to your account
2. The payment date
3. The reason the service did not work as expected
4. Any error message or issue you experienced

Once I have these details, I'll check your account and guide you based on our refund policy.

Best,
Surafel`,
      internalNote:
        "Customer requested immediate refund and appears frustrated. Responded calmly, requested account and payment details, and avoided promising refund before policy/account review.",
      escalationDecision:
        "Escalate to billing/refund team if payment is confirmed and refund eligibility needs approval.",
      resolutionSummary:
        "Customer was acknowledged professionally and moved toward a policy-based refund review.",
    },
    {
      title: "KYC Verification Delayed",
      issueType: "KYC verification",
      priority: "Medium",
      channel: "Live chat",
      tools: "KYC panel, account status, internal notes",
      emotion: "Impatient",
      customerMessage:
        "I submitted my documents yesterday but my account is still not verified. I need to trade now.",
      response: `Hi [Customer Name],

Thank you for submitting your verification documents. I understand that you want to start using your account as soon as possible.

KYC reviews can sometimes take longer if the system needs additional checks or if the submitted document image is unclear. Please make sure that:

1. Your document is not expired
2. The full document is visible
3. The image is clear and not blurry
4. The name matches your account information

I'll check the current status of your verification and update you if any additional action is needed from your side.

Best,
Surafel`,
      internalNote:
        "User submitted KYC documents and is waiting for approval. Explained possible delay reasons and will check verification status.",
      escalationDecision:
        "Escalate if KYC is stuck beyond normal review time or if manual review is required.",
      resolutionSummary:
        "User received clear explanation and next-step assurance without guaranteeing approval.",
    },
    {
      title: "Crypto Deposit Not Showing",
      issueType: "Crypto deposit",
      priority: "High",
      channel: "Crypto support ticket",
      tools: "Blockchain explorer, wallet status, admin tools",
      emotion: "Worried and urgent",
      customerMessage:
        "I sent USDT to my account but it is not showing. I need this checked now.",
      response: `Hi [Customer Name],

I understand your concern. I'll help you check the deposit status.

Please send the following information:

1. Transaction hash/TXID
2. Deposit network used
3. Deposit address
4. Amount sent
5. Approximate time of the transaction

Crypto deposits may take time depending on the blockchain network, confirmation requirements, or whether the correct network was selected. Once I have the TXID, I can help review the transaction status and advise on the next step.

Best,
Surafel`,
      internalNote:
        "Customer reports missing USDT deposit. Requested TXID, network, amount, address, and timestamp. Need to check blockchain confirmation and internal deposit status.",
      escalationDecision:
        "Escalate to wallet/technical team if transaction is confirmed on-chain but not credited internally.",
      resolutionSummary:
        "Customer was asked for required transaction details to begin investigation.",
    },
    {
      title: "P2P Buyer Marked Paid But Seller Did Not Receive Funds",
      issueType: "P2P dispute",
      priority: "High",
      channel: "P2P dispute queue",
      tools: "Order panel, payment proof, chat history",
      emotion: "Concerned and protective",
      customerMessage:
        "The buyer clicked paid but I have not received any money in my bank account. Please cancel this order.",
      response: `Hi [Customer Name],

Thank you for reporting this. Please do not release the crypto until you have confirmed that the payment has arrived in your bank account.

To help review this case, please provide:

1. A screenshot of your bank transaction history for the relevant time period
2. The order number
3. The buyer's payment proof if available
4. Any chat messages related to the payment

We will review the evidence from both sides and take the appropriate action based on the payment status.

Best,
Surafel`,
      internalNote:
        "Seller reports buyer marked paid but funds not received. Advised seller not to release crypto. Requested bank statement screenshot and order details. Evidence review required.",
      escalationDecision:
        "Escalate to P2P dispute/risk team if buyer and seller evidence conflicts.",
      resolutionSummary:
        "Seller was protected from releasing funds prematurely while evidence collection started.",
    },
    {
      title: "User Sent Crypto on Wrong Network",
      issueType: "Wrong-network deposit",
      priority: "High",
      channel: "Crypto support ticket",
      tools: "Blockchain explorer, wallet team queue, admin tools",
      emotion: "Anxious",
      customerMessage:
        "I deposited USDT but I think I used the wrong network. Can you recover it?",
      response: `Hi [Customer Name],

I'm sorry this happened. I understand how concerning it can be when funds are sent using the wrong network.

Please send us:

1. Transaction hash/TXID
2. Network used
3. Intended network
4. Deposit address
5. Amount sent
6. Time of transaction

Once we receive these details, we can check whether recovery is technically possible. Please note that recovery is not always guaranteed, but we will review the case carefully and guide you on the next step.

Best,
Surafel`,
      internalNote:
        "User may have deposited USDT using wrong network. Requested full transaction details. Needs wallet team review. Avoided guarantee of recovery.",
      escalationDecision:
        "Escalate to wallet/technical team immediately after TXID and network details are received.",
      resolutionSummary:
        "User received an empathetic but realistic response explaining that recovery depends on technical possibility.",
    },
    {
      title: "Customer Reports a Bug",
      issueType: "Technical bug",
      priority: "Medium",
      channel: "Technical support ticket",
      tools: "Bug report template, screenshots, product queue",
      emotion: "Blocked",
      customerMessage:
        "The dashboard keeps loading and I cannot see my account data. I tried refreshing but it still does not work.",
      response: `Hi [Customer Name],

Thank you for reporting this. I'm sorry the dashboard is not loading properly.

To help us investigate, could you please send:

1. A screenshot or short screen recording
2. The browser or app version you are using
3. Your device type
4. The time the issue started
5. Whether the issue happens on another browser or device

In the meantime, please try clearing your browser cache or opening the dashboard in a private/incognito window. I'll document this and escalate it if the issue continues.

Best,
Surafel`,
      internalNote:
        "User reports dashboard loading issue. Requested reproduction details, browser/device info, screenshot/screen recording, and attempted workaround. Possible frontend or account-specific issue.",
      escalationDecision:
        "Escalate to technical/product team if issue is reproducible or affects multiple users.",
      resolutionSummary:
        "Support gathered technical details before escalation to avoid vague bug reporting.",
    },
  ],
};

export const cryptoP2PShowcase = {
  title: "Crypto and P2P Support Case Studies",
  intro:
    "Realistic crypto exchange and P2P support cases showing how to investigate transaction issues, collect evidence, communicate with users, document findings, and escalate sensitive cases to the correct team.",
  skills: [
    "Crypto support",
    "P2P dispute handling",
    "Transaction investigation",
    "Fraud-aware thinking",
    "Risk escalation",
    "Payment verification",
  ],
  cases: [
    {
      title: "Buyer Marked Paid But Seller Did Not Receive Funds",
      scenario:
        'A P2P seller reports that the buyer clicked "I have paid," but the seller has not received the money in their bank account.',
      risk:
        "The buyer may have made a false payment claim, payment may be delayed by the bank, or the seller may not have checked the correct account.",
      process: [
        "Advise the seller not to release crypto until payment is confirmed.",
        "Ask for the order number.",
        "Request seller's bank statement screenshot for the transaction period.",
        "Request buyer's payment proof.",
        "Compare payment name, amount, timestamp, and reference number.",
        "Check if payment was sent from a third-party account.",
        "Keep both users neutral and avoid blaming either side.",
        "Escalate if evidence is unclear or suspicious.",
      ],
      customerResponse: `Hi [Customer Name],

Thank you for reporting this. Please do not release the crypto until the payment is confirmed in your bank account.

To help review this case, please send a screenshot of your bank transaction history for the relevant time period and the order number. We will review the evidence from both sides and take action based on the confirmed payment status.

Best,
Surafel`,
      internalNote:
        "Seller reports buyer marked payment as completed, but funds are not visible in seller's bank account. Seller advised not to release crypto. Requested bank evidence and order details. Buyer payment proof should be reviewed.",
      escalation:
        "Escalate to P2P dispute/risk team if payment proof and bank evidence do not match.",
      learning:
        "In P2P support, the agent must remain neutral, evidence-based, and careful. The most important rule is to protect funds while avoiding unfair judgment before review.",
    },
    {
      title: "Deposit Confirmed On-Chain But Not Credited",
      scenario:
        "A user sends crypto to the correct deposit address. The transaction shows confirmed on the blockchain, but the balance is not updated in the user's account.",
      process: [
        "Ask for TXID, network, amount, and deposit address.",
        "Check the transaction on a blockchain explorer.",
        "Confirm whether the required number of confirmations has been reached.",
        "Check if the deposit address matches the user's account.",
        "Check internal deposit status if admin tools are available.",
        "Escalate to wallet/technical team if on-chain confirmation is complete but credit is missing.",
      ],
      customerResponse: `Hi [Customer Name],

I understand your concern. I checked that this type of issue needs to be reviewed using the transaction details.

Please send the TXID, network used, deposit address, amount, and transaction time. If the transaction is already confirmed on the blockchain but not credited to your account, we can escalate it to the wallet team for further review.

Best,
Surafel`,
      internalNote:
        "User reports confirmed crypto deposit not credited. Need TXID and network details. If confirmed on-chain and address is correct, escalate to wallet team.",
      escalation: "Wallet/technical team.",
      learning:
        "Never confirm missing deposit status without checking the TXID, network, and deposit address. Blockchain confirmation and internal credit status are separate checks.",
    },
    {
      title: "Wrong Network Deposit",
      scenario:
        "A user deposits USDT using BEP20 instead of ERC20, or another unsupported/wrong network.",
      process: [
        "Ask for TXID, network used, intended network, deposit address, and amount.",
        "Confirm whether the receiving platform supports the network.",
        "Check whether the deposit address belongs to the platform.",
        "Explain that recovery may not be guaranteed.",
        "Escalate to wallet team only after collecting complete details.",
      ],
      customerResponse: `Hi [Customer Name],

I'm sorry this happened. Sending crypto through the wrong network can be stressful, and I'll help you submit the case for review.

Please send the TXID, network used, intended network, deposit address, amount, and transaction time. Once we have these details, the wallet team can check whether recovery is technically possible. Please note that recovery is not always guaranteed.

Best,
Surafel`,
      internalNote:
        "Possible wrong-network deposit. Full transaction details requested. Needs wallet team review. Recovery not guaranteed.",
      escalation: "Wallet/technical team after complete transaction details.",
      learning:
        "The agent must be empathetic but should not promise recovery before technical review.",
    },
    {
      title: "Withdrawal Delayed Due to Security Review",
      scenario:
        "A user's withdrawal is pending longer than expected. The user is frustrated and wants a specific release time.",
      process: [
        "Check withdrawal status.",
        "Check account verification status.",
        "Check whether the transaction is pending internal review.",
        "Check if there are security/risk flags.",
        "Explain the situation without exposing sensitive security logic.",
        "Escalate if review time exceeds normal limits.",
      ],
      customerResponse: `Hi [Customer Name],

I understand that waiting for a withdrawal can be frustrating. I checked that some withdrawals may require additional review for account and transaction security.

At this stage, please make sure your account verification is complete and that there are no pending security requests on your account. I will monitor the status and escalate the case if the review takes longer than expected.

Best,
Surafel`,
      internalNote:
        "User reports delayed withdrawal. Possible security or manual review. Avoided exposing internal risk rules. Monitor and escalate if delay exceeds expected timeframe.",
      escalation:
        "Escalate if the security review exceeds normal limits or status requires manual follow-up.",
      learning:
        "Security-related support requires careful communication. The agent should reassure the user without revealing risk rules or making false promises.",
    },
    {
      title: "Suspicious P2P Pattern",
      scenario:
        "A user has multiple P2P disputes in a short period, often with similar claims and unclear payment proof.",
      process: [
        "Review recent dispute history.",
        "Check repeated behavior patterns.",
        "Compare order amounts, counterparties, timestamps, and evidence.",
        "Document objective facts.",
        "Avoid accusing the user directly.",
        "Escalate to fraud/risk team.",
      ],
      customerResponse: `Hi [Customer Name],

Thank you for contacting us. We are reviewing the order details and payment evidence carefully.

To continue the review, please provide the payment receipt, bank reference number, and any communication related to the transaction. Once the evidence is reviewed, we will update you with the next step.

Best,
Surafel`,
      internalNote:
        "User has repeated P2P disputes with similar payment claims. Evidence appears incomplete. Recommend risk/fraud review before further action.",
      escalation: "Fraud/risk team.",
      learning:
        "Fraud-aware support depends on documentation, patterns, and escalation. The support agent should not accuse the user but should preserve evidence clearly.",
    },
  ],
};

export const knowledgeBaseShowcase = {
  title: "Knowledge Base Article Samples",
  intro:
    "Clear help center article samples for common SaaS, fintech, crypto, and account support issues. The goal is to help users solve simple problems independently while knowing when to contact support.",
  skills: [
    "Help center writing",
    "Customer education",
    "Step-by-step guidance",
    "Ticket deflection",
  ],
  articles: [
    {
      title: "How to Reset Your Password",
      audience:
        "Users who cannot access their account because they forgot their password or their current password is not working.",
      sections: [
        {
          heading: "Steps",
          items: [
            "Go to the login page.",
            'Click "Forgot Password."',
            "Enter the email address linked to your account.",
            "Open the password reset email.",
            "Click the reset link.",
            "Create a new password.",
            "Return to the login page and sign in again.",
          ],
        },
        {
          heading: "Common mistakes",
          items: [
            "Using an old reset email",
            "Entering the wrong email address",
            "Adding spaces before or after the email",
            "Trying too many times and triggering temporary lock",
          ],
        },
        {
          heading: "Contact support if",
          items: [
            "You did not receive the reset email",
            "The reset link is expired",
            "You see an account lock message",
            "You no longer have access to your email",
          ],
        },
      ],
    },
    {
      title: "Why Your Crypto Deposit May Be Delayed",
      audience:
        "Users who sent crypto but do not see it in their account balance yet.",
      sections: [
        {
          heading: "Main reasons",
          items: [
            "The blockchain transaction has not received enough confirmations",
            "The wrong network was selected",
            "The deposit address was incorrect",
            "The transaction is under manual review",
            "The network is congested",
          ],
        },
        {
          heading: "What to check",
          items: [
            "Check your transaction hash/TXID.",
            "Confirm the network used.",
            "Confirm the deposit address.",
            "Check the blockchain explorer.",
            "Wait for the required network confirmations.",
          ],
        },
        {
          heading: "Contact support with",
          items: [
            "TXID",
            "Network used",
            "Deposit address",
            "Amount",
            "Transaction time",
            "Screenshot if available",
          ],
        },
      ],
    },
    {
      title: "How to Avoid P2P Payment Disputes",
      audience: "P2P buyers and sellers who want safer trading habits.",
      sections: [
        {
          heading: "Tips",
          items: [
            "Only use the payment method listed in the order",
            "Make sure the payment name matches the verified account name",
            "Do not mark payment as completed before sending funds",
            "Do not release crypto before confirming payment",
            "Keep all communication inside the platform chat",
            "Upload clear payment proof when requested",
          ],
        },
        {
          heading: "Warning",
          body: "Never release crypto based only on a screenshot. Confirm that the funds are actually received in your account.",
        },
      ],
    },
    {
      title: "How to Report a Technical Bug",
      audience:
        "Users who need to report an app, dashboard, payment, upload, or account issue clearly.",
      sections: [
        {
          heading: "What to include",
          items: [
            "What you were trying to do",
            "What happened instead",
            "Screenshot or screen recording",
            "Device type",
            "Browser or app version",
            "Time the issue happened",
            "Steps to reproduce the issue",
          ],
        },
        {
          heading: "Good bug report example",
          body: 'I clicked "Withdraw," selected USDT, entered the amount, and clicked continue. The page showed a loading spinner and did not move to the next step. I tested this on Chrome and mobile app, and the issue only happens on Chrome.',
        },
      ],
    },
    {
      title: "How to Protect Your Account from Phishing",
      audience:
        "Users who want to avoid account compromise, fake links, and social engineering.",
      sections: [
        {
          heading: "Tips",
          items: [
            "Do not share your password or 2FA code",
            "Check the website URL before logging in",
            "Avoid clicking unknown links from Telegram or email",
            "Use a strong unique password",
            "Enable two-factor authentication",
            "Contact support if you see suspicious activity",
          ],
        },
      ],
    },
  ],
};

export const troubleshootingShowcase = {
  title: "Technical Troubleshooting Workflows",
  intro:
    "Structured troubleshooting workflows for account, payment, app, crypto, and technical support issues. Each workflow shows the first checks, questions to ask, tools to use, possible causes, escalation rules, and response templates.",
  skills: [
    "Systematic diagnosis",
    "Technical support",
    "Customer questions",
    "Escalation readiness",
  ],
  workflows: [
    {
      title: "Login Issue",
      firstChecks: [
        "Email address",
        "Password reset status",
        "2FA status",
        "Account lock status",
        "Browser or app version",
        "Recent password change",
      ],
      questions: [
        "What error message do you see?",
        "Are you using web or mobile app?",
        "When did the issue start?",
        "Did you recently reset your password?",
        "Do you still have access to your email?",
      ],
      possibleCauses: [
        "Wrong password",
        "Expired reset link",
        "Browser cache issue",
        "2FA problem",
        "Account locked",
        "Security restriction",
      ],
      tools: [
        "CRM",
        "Admin dashboard",
        "Login history",
        "User account status",
        "Internal notes",
      ],
      escalationRule:
        "Escalate if account is locked, 2FA is inaccessible, suspicious login is detected, or login fails after basic troubleshooting.",
    },
    {
      title: "Crypto Deposit Delay",
      firstChecks: [
        "TXID",
        "Network",
        "Deposit address",
        "Amount",
        "Blockchain confirmations",
        "Internal credit status",
      ],
      questions: [
        "Which network did you use?",
        "Can you send the TXID?",
        "What amount did you deposit?",
        "When did you make the transaction?",
        "Did you use the deposit address shown in your account?",
      ],
      possibleCauses: [
        "Not enough confirmations",
        "Wrong network",
        "Incorrect address",
        "Network congestion",
        "Internal wallet delay",
        "Manual review",
      ],
      tools: [
        "Blockchain explorer",
        "Wallet status",
        "Admin tools",
        "Internal deposit records",
      ],
      escalationRule:
        "Escalate if transaction is confirmed on-chain, address is correct, and balance is still not credited.",
    },
    {
      title: "Payment Failed",
      firstChecks: [
        "Payment method",
        "Card/bank status",
        "Error message",
        "Billing country",
        "Payment provider status",
        "Account subscription status",
      ],
      questions: [
        "What payment method did you use?",
        "What error message appeared?",
        "Was the amount deducted?",
        "Can you provide a receipt or transaction reference?",
        "Did you try another payment method?",
      ],
      possibleCauses: [
        "Bank decline",
        "Insufficient balance",
        "Payment provider error",
        "Unsupported card",
        "Billing information mismatch",
        "Duplicate payment attempt",
      ],
      tools: ["Billing panel", "Payment provider logs", "CRM", "Receipt"],
      escalationRule:
        "Escalate to billing team if the customer was charged but the service was not activated.",
    },
    {
      title: "App Bug Report",
      firstChecks: [
        "Device type",
        "App version",
        "Operating system",
        "Screenshot/screen recording",
        "Steps to reproduce",
        "Account-specific or global issue",
      ],
      questions: [
        "When did the issue start?",
        "Does it happen every time?",
        "Can you reproduce it after restarting the app?",
        "Does it happen on another device?",
        "Can you send a screen recording?",
      ],
      possibleCauses: [
        "App cache issue",
        "Frontend error",
        "API response issue",
        "Account-specific data issue",
        "Device compatibility problem",
      ],
      tools: ["Bug report template", "Screenshots", "Screen recording", "Logs"],
      escalationRule:
        "Escalate to product/engineering if the issue is reproducible, affects many users, or blocks core functionality.",
    },
    {
      title: "P2P Dispute",
      firstChecks: [
        "Order number",
        "Buyer payment proof",
        "Seller bank confirmation",
        "Payment name match",
        "Order chat history",
        "Dispute history",
      ],
      questions: [
        "Has the seller confirmed receipt?",
        "Was the payment made from the buyer's verified account?",
        "Can both parties provide proof?",
        "Was the exact amount paid?",
        "Was payment made within the order time limit?",
      ],
      possibleCauses: [
        "Delayed bank transfer",
        "False paid claim",
        "Third-party payment",
        "Incorrect amount",
        "Evidence conflict",
      ],
      tools: ["Order panel", "Payment proof", "Bank statement", "Chat history"],
      escalationRule:
        "Escalate to P2P/risk team if evidence conflicts, payment name does not match, or repeated suspicious behavior appears.",
    },
  ],
};

export const supportTemplatesShowcase = {
  title: "Support Operations Templates and Macros",
  intro:
    "Reusable support templates for internal documentation, bug reports, escalations, follow-ups, refund cases, angry customers, and technical handoffs.",
  skills: [
    "Support operations",
    "Internal notes",
    "Escalation handoffs",
    "Macros",
    "Process consistency",
  ],
  templates: [
    {
      title: "Internal Note",
      description: "A structured note for documenting customer impact and next action.",
      body: `Issue Summary:
Customer reports [issue].

Customer Impact:
[Explain how this affects the customer.]

Steps Already Taken:
1. [Step one]
2. [Step two]
3. [Step three]

Information Collected:
Email:
Account ID:
Order ID:
TXID:
Screenshot:
Device/Browser:

Current Status:
[Pending / Resolved / Escalated]

Next Action:
[What should happen next.]`,
    },
    {
      title: "Escalation to Technical Team",
      description: "A clear handoff template for product or engineering review.",
      body: `Hi Team,

Please review the issue below.

Issue:
[Brief issue summary]

User Impact:
[How the issue affects the customer]

Steps to Reproduce:
1.
2.
3.

Expected Result:
[What should happen]

Actual Result:
[What is happening]

User Details:
Account email:
Device:
Browser/App version:
Screenshot/Recording:
Error message:

Support Checks Completed:
[Checks already done]

Priority:
[Low / Medium / High / Urgent]

Recommended Next Step:
[What support needs from the technical team]`,
    },
    {
      title: "Angry Customer Response",
      description: "A calm macro for frustrated users without overpromising.",
      body: `Hi [Customer Name],

I'm sorry for the frustration this has caused. I understand this is important to you, and I'll do my best to help move this forward.

To review this properly, I need to check a few details first. Please send [required information], and I'll use that to investigate the issue and guide you on the next step.

Thank you for your patience while we work on this.

Best,
Surafel`,
    },
    {
      title: "Follow-Up After No Customer Response",
      description: "A professional follow-up before pausing or closing a case.",
      body: `Hi [Customer Name],

I wanted to follow up on your previous request. We are still waiting for [required information] so we can continue reviewing the issue.

If the issue is already resolved, no further action is needed. If you still need help, please reply with the requested details and I'll continue from there.

Best,
Surafel`,
    },
    {
      title: "Bug Report Template",
      description: "A concise format for technical support and engineering escalation.",
      body: `Bug Title:
[Short title]

Issue Description:
[What happened]

User Impact:
[How it affects the user]

Steps to Reproduce:
1.
2.
3.

Expected Result:
[What should happen]

Actual Result:
[What happened instead]

Environment:
Device:
Browser:
App version:
Operating system:

Evidence:
Screenshot:
Screen recording:
Error message:

Priority:
[Low / Medium / High / Urgent]`,
    },
  ],
};

export const technicalSupportShowcase = {
  title: "Technical Support Engineer Examples",
  intro:
    "Technical support examples involving web applications, APIs, integrations, mobile issues, payment systems, and bug escalation. Each example demonstrates technical detail collection, reproduction thinking, user communication, and engineering handoff.",
  skills: [
    "Technical support",
    "Bug escalation",
    "API troubleshooting",
    "Mobile support",
    "Engineering communication",
  ],
  examples: [
    {
      title: "Web Dashboard Not Loading",
      issue:
        "User logs in successfully, but dashboard keeps loading and account data does not appear.",
      impact: "User cannot access account data or complete tasks.",
      initialQuestions: [
        "Which browser are you using?",
        "Does it happen in incognito/private mode?",
        "Does it happen on another device?",
        "When did the issue start?",
        "Can you send a screenshot or screen recording?",
      ],
      possibleRootCauses: [
        "Browser cache issue",
        "Frontend loading error",
        "API response failure",
        "Account-specific data issue",
        "Temporary service outage",
      ],
      customerResponse: `Hi [Customer Name],

Thank you for reporting this. I'm sorry the dashboard is not loading properly.

Please try opening the dashboard in a private/incognito window and clearing your browser cache. Also, could you send a screenshot or short screen recording, along with your browser name and device type?

If the issue continues after these checks, I'll document the details and escalate it to the technical team.

Best,
Surafel`,
      engineeringNote:
        "User can log in but dashboard data does not load. Requested browser/device details and screenshot. Possible frontend/API issue. Needs review if reproducible after cache/incognito test.",
    },
    {
      title: "API Integration Error",
      issue:
        "User's third-party integration fails with an authentication error.",
      initialQuestions: [
        "Was the API key recently changed?",
        "What exact error message appears?",
        "Which endpoint is failing?",
        "What was the request timestamp?",
        "Is IP whitelisting enabled?",
      ],
      possibleRootCauses: [
        "API key status",
        "Permission level",
        "IP whitelist",
        "Recent key rotation",
        "Error code",
        "Request timestamp mismatch",
      ],
      customerResponse: `Hi [Customer Name],

I can help check this integration issue.

Please confirm whether the API key was recently changed and send the exact error message you are receiving. Also, if possible, please share the request timestamp and the endpoint you are trying to access.

For security, please do not send your full API secret. If needed, only share the last few characters of the API key for identification.

Best,
Surafel`,
      engineeringNote:
        "User reports API authentication error. Need endpoint, error code, timestamp, and API key status. Reminded user not to share full API secret.",
      escalation:
        "Escalate to API/backend team if key permissions are correct but authentication still fails.",
    },
    {
      title: "Mobile App Upload Issue",
      issue: "User cannot upload image/video from mobile app.",
      possibleRootCauses: [
        "App permission issue",
        "File size too large",
        "Unsupported file format",
        "App cache issue",
        "OS file picker issue",
        "Network interruption",
      ],
      customerResponse: `Hi [Customer Name],

I'm sorry you're having trouble uploading the file.

Please check the following:

1. Confirm the app has permission to access photos/files.
2. Try uploading a smaller file.
3. Make sure the file type is supported.
4. Restart the app and try again.
5. If possible, test using another network.

If the issue continues, please send your phone model, app version, file type, file size, and a screenshot of where the upload fails.

Best,
Surafel`,
      engineeringNote:
        "Mobile upload issue reported. Need device model, OS version, app version, file type, file size, and failure point. Possible permission or file picker issue.",
    },
    {
      title: "Payment Webhook Delay",
      issue:
        "User paid successfully, but account subscription was not activated.",
      possibleRootCauses: [
        "Webhook delay",
        "Payment provider timeout",
        "Failed callback",
        "Duplicate payment record",
        "Billing sync issue",
      ],
      customerResponse: `Hi [Customer Name],

Thank you for sharing this. I understand that you completed the payment but your account has not been updated yet.

Please send your payment receipt or transaction reference, payment time, and the email linked to your account. Once we verify the payment, we can check why the account status did not update correctly.

Best,
Surafel`,
      engineeringNote:
        "Payment completed but subscription not activated. Possible webhook or billing sync delay. Need billing/payment provider verification.",
      escalation: "Billing/backend team.",
    },
    {
      title: "Integration Not Syncing Data",
      issue: "User connected third-party integration, but data is not syncing.",
      process: [
        "Confirm integration connection status.",
        "Check permissions.",
        "Ask when the last successful sync happened.",
        "Check for error messages.",
        "Ask whether the user recently changed credentials.",
        "Escalate if permissions are correct but sync still fails.",
      ],
      customerResponse: `Hi [Customer Name],

I can help check why the integration is not syncing.

Please confirm when the last successful sync happened and whether you recently changed your login details, API key, or permissions. Also, please send any error message you see on the integration page.

Once I have those details, I can help narrow down whether this is a permission issue, connection issue, or something that needs technical escalation.

Best,
Surafel`,
      engineeringNote:
        "Integration sync issue reported. Need last successful sync time, credential changes, permissions, and error message before escalation.",
    },
  ],
};
