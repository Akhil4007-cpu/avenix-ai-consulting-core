import {
  BarChart3,
  Bot,
  Brain,
  Boxes,
  Building2,
  GitBranch,
  Layers,
  LifeBuoy,
  MessagesSquare,
  ScrollText,
  Sparkles,
  Target,
} from "lucide-react";

export const services = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw business data into meaningful insights through dashboards, reports, visualization, and business intelligence solutions.",
    points: ["Executive dashboards", "Reporting pipelines", "Business intelligence"],
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description:
      "Develop predictive models and intelligent systems tailored to your business needs using modern machine learning techniques.",
    points: ["Forecasting models", "Classification & scoring", "Model evaluation"],
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Build intelligent conversational assistants for customer support, websites, education, healthcare, and internal business operations.",
    points: ["Support assistants", "Knowledge retrieval", "Workflow automation"],
  },
  {
    icon: Boxes,
    title: "Custom AI Solutions",
    description:
      "Design scalable AI-powered software that solves unique business challenges through automation and intelligent decision-making.",
    points: ["Tailored architecture", "System integration", "Automation tooling"],
  },
] as const;

export const advantages = [
  {
    icon: Target,
    title: "Business-focused solutions",
    description:
      "Every engagement starts with the business outcome you need, not the technology we happen to like.",
  },
  {
    icon: Sparkles,
    title: "Tailor-made AI systems",
    description:
      "Solutions are designed around your data, processes, and constraints rather than a generic template.",
  },
  {
    icon: Layers,
    title: "Scalable architecture",
    description:
      "Systems are structured to grow with your data volume, user base, and future use cases.",
  },
  {
    icon: GitBranch,
    title: "Modern technologies",
    description:
      "We work with current, well-supported tools across analytics, machine learning, and cloud deployment.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent communication",
    description:
      "Clear scope, regular updates, and honest guidance on what AI can and cannot deliver for you.",
  },
  {
    icon: LifeBuoy,
    title: "Long-term support",
    description:
      "Monitoring, refinement, and iteration after launch so the solution keeps performing over time.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Requirement Discovery",
    description: "Understand business goals and project requirements.",
  },
  {
    number: "02",
    title: "Solution Design",
    description: "Plan the best AI architecture and implementation strategy.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build, test and optimize the solution.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "Deliver, monitor and continuously improve the solution.",
  },
] as const;

export const featuredSolutions = [
  {
    title: "Sales Analytics Dashboard",
    category: "Data Analytics",
    description:
      "An interactive dashboard concept that consolidates revenue, pipeline, and regional performance into a single decision-ready view.",
    tags: ["Dashboards", "BI", "Visualization"],
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "A predictive model design that scores accounts by churn risk so retention teams can prioritise outreach.",
    tags: ["Classification", "Retention", "Scoring"],
  },
  {
    title: "AI Resume Screening",
    category: "Custom AI",
    description:
      "A structured screening workflow that ranks applications against role requirements while keeping a human in the loop.",
    tags: ["NLP", "Automation", "HR"],
  },
  {
    title: "Smart Business Chatbot",
    category: "AI Chatbots",
    description:
      "A conversational assistant concept that answers customer and internal questions from approved company knowledge.",
    tags: ["Assistants", "Retrieval", "Support"],
  },
  {
    title: "Demand Forecasting",
    category: "Machine Learning",
    description:
      "A time-series forecasting approach for planning inventory, staffing, and procurement with clearer confidence ranges.",
    tags: ["Forecasting", "Planning", "Operations"],
  },
  {
    title: "Document Intelligence System",
    category: "Custom AI",
    description:
      "An extraction pipeline concept that turns invoices, forms, and reports into structured, searchable data.",
    tags: ["OCR", "Extraction", "Search"],
  },
] as const;

export const industries = [
  { icon: Building2, label: "Startups & Businesses" },
  { icon: ScrollText, label: "Education" },
  { icon: LifeBuoy, label: "Healthcare" },
  { icon: BarChart3, label: "Retail & Commerce" },
] as const;
